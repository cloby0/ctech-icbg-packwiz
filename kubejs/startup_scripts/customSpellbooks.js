StartupEvents.registry('item', event => {

    // Sorcerer (EV) tier spellbooks
    event.create('pyromatic_codex', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(6)
        .addSpell('legendary_spellbooks:flame_eater', 7)
        .addSpell('legendary_spellbooks:flame_sector', 7)
        .addSpell('irons_spellbooks:blaze_storm', 7)
        .addSpell('irons_spellbooks:fireball', 7)
        .addSpell('irons_spellbooks:wall_of_fire', 7)

    event.create('evocation_folio', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(6)
        .addSpell('legendary_spellbooks:summon_flameborn_knights', 7)
        .addSpell('legendary_spellbooks:summon_haunted_knights', 7)
        .addSpell('irons_spellbooks:fang_strike', 7)
        .addSpell('irons_spellbooks:spectral_hammer', 7)
        .addSpell('irons_spellbooks:shield', 7)

    // Arcanist (ZPM) tier spellbooks
    event.create('glacial_grimoire', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(8)
        .addSpell('legendary_spellbooks:glacier_eruption', 9)
        .addSpell('legendary_spellbooks:glacier_ringburst', 9)
        .addSpell('irons_spellbooks:ice_tomb', 9)
        .addSpell('irons_spellbooks:cone_of_cold', 9)
        .addSpell('irons_spellbooks:frost_step', 9)

    event.create('verdant_chronicle', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(8)
        .addSpell('legendary_spellbooks:ambush_thorns', 9)
        .addSpell('legendary_spellbooks:fossilized_fury', 9)
        .addSpell('legendary_spellbooks:overgrown_shockwave', 9)
        .addSpell('irons_spellbooks:earthquake', 9)
        .addSpell('irons_spellbooks:oakskin', 9)

    // Sage (UV) tier spellbooks — each gated behind a gaian resonance core
    event.create('blood_grimoire', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(12)
        .addSpell('irons_spellbooks:raise_dead', 10)
        .addSpell('irons_spellbooks:heartstop', 10)
        .addSpell('irons_spellbooks:ray_of_siphoning', 10)
        .addSpell('irons_spellbooks:blood_step', 10)
        .addSpell('irons_spellbooks:devour', 10)

    event.create('gaian_sanctum', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(12)
        .addSpell('irons_spellbooks:greater_heal', 10)
        .addSpell('irons_spellbooks:divine_smite', 10)
        .addSpell('irons_spellbooks:healing_circle', 10)
        .addSpell('irons_spellbooks:sunbeam', 10)
        .addSpell('irons_spellbooks:angel_wings', 10)

    event.create('abyssal_codex', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(12)
        .addSpell('irons_spellbooks:eldritch_blast', 10)
        .addSpell('irons_spellbooks:pocket_dimension', 10)
        .addSpell('irons_spellbooks:abyssal_shroud', 10)
        .addSpell('irons_spellbooks:telekinesis', 10)
        .addSpell('irons_spellbooks:sonic_boom', 10)

    event.create('obliteration_chronicle', 'irons_spells_js:spellbook')
        .setMaxSpellSlots(12)
        .addSpell('legendary_spellbooks:annihilation_bomb', 10)
        .addSpell('legendary_spellbooks:annihilation_shockwave', 10)
        .addSpell('legendary_spellbooks:annihilation_resonance', 10)
        .addSpell('legendary_spellbooks:release_riftwalker_predator', 8)

})
