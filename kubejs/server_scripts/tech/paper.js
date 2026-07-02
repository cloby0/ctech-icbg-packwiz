ServerEvents.recipes(event => {

    event.remove({ id: 'pamhc2crops:paper_x2_paper_plants' })
    event.remove({ id: 'farmersdelight:paper_from_tree_bark' })

    event.replaceInput(
        { id: 'gtceu:shaped/paper_dust' },
        'minecraft:sugar_cane',
        '#forge:paper_plants'
    )
})
