// Auto-generate arcane solder variants for all gtceu:kjs/ circuit_assembler recipes that use soldering_alloy.
// Replaces soldering_alloy with arcane_solder and doubles all item output counts.
// Lives in tech/ and named zz_ to guarantee it runs after ae2.js and all other tech scripts,
// so forEachRecipe sees their recipes. Load order between root scripts and tech/ is non-deterministic.
// me_circuit is pre-seeded in seen because it's handled manually in techMagicInteraction.js (3x not 2x).
ServerEvents.recipes(event => {
    const toAdd = []
    // pre-seed manually-handled recipes to skip auto-gen
    const seen = new Set(['me_circuit'])

    event.forEachRecipe({ type: 'gtceu:circuit_assembler' }, recipe => {
        const jsonStr = recipe.json.toString()
        const hasSolderTag = jsonStr.includes('"tag":"forge:soldering_alloy"')
        const hasSolderFluid = jsonStr.includes('"gtceu:soldering_alloy"')
        if (!hasSolderTag && !hasSolderFluid) return
        const id = recipe.id.toString()
        if (id.startsWith('kubejs:')) return
        // only process gtceu:kjs/ form — KubeJS-format JSON that event.custom() can parse correctly
        // gtceu:circuit_assembler/ is GTCEu's raw codec format; event.custom() cannot parse its outputs
        if (!id.startsWith('gtceu:kjs/')) return
        const baseName = id.replace(/^gtceu:kjs\//, '')
        if (seen.has(baseName)) return
        seen.add(baseName)
        toAdd.push({ json: JSON.parse(jsonStr), baseName: baseName })
    })

    // double all "count" fields inside the outputs subtree only
    // uses for..in — Object.fromEntries/Object.entries not available in Rhino
    const doubleOutputCounts = function(obj) {
        if (!obj || typeof obj !== 'object') return obj
        if (Array.isArray(obj)) return obj.map(doubleOutputCounts)
        const result = {}
        for (const k in obj) {
            if (k === 'count' && typeof obj[k] === 'number') {
                result[k] = obj[k] * 2
            } else {
                result[k] = doubleOutputCounts(obj[k])
            }
        }
        return result
    }

    toAdd.forEach(function(entry) {
        const rawJson = entry.json
        const modified = JSON.parse(
            JSON.stringify(rawJson)
                .replace(/"tag":"forge:soldering_alloy"/g, '"fluid":"kubejs:arcane_solder"')
                .replace(/"fluid":"gtceu:soldering_alloy"/g, '"fluid":"kubejs:arcane_solder"')
        )

        if (!modified.outputs || !modified.outputs.item || modified.outputs.item.length === 0) return
        modified.outputs = doubleOutputCounts(modified.outputs)

        // strip kubejs:actions — avoid carrying over any KJS ingredient rewrites
        delete modified['kubejs:actions']
        delete modified.id
        event.custom(modified)
    })
})
