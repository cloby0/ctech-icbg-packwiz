EMIEvents.hideItems(event => {
    const ec_intermediates = [
        // base materials
        'extendedcrafting:black_iron_ingot',
        'extendedcrafting:black_iron_nugget',
        'extendedcrafting:black_iron_block',
        'extendedcrafting:black_iron_slate',
        'extendedcrafting:luminessence',
        'extendedcrafting:luminessence_block',

        // redstone line
        'extendedcrafting:redstone_ingot',
        'extendedcrafting:redstone_nugget',
        'extendedcrafting:redstone_ingot_block',
        'extendedcrafting:redstone_component',
        'extendedcrafting:redstone_catalyst',
        'extendedcrafting:enhanced_redstone_ingot',
        'extendedcrafting:enhanced_redstone_nugget',
        'extendedcrafting:enhanced_redstone_ingot_block',
        'extendedcrafting:enhanced_redstone_component',
        'extendedcrafting:enhanced_redstone_catalyst',

        // ender line
        'extendedcrafting:ender_ingot',
        'extendedcrafting:ender_nugget',
        'extendedcrafting:ender_ingot_block',
        'extendedcrafting:ender_component',
        'extendedcrafting:ender_catalyst',
        'extendedcrafting:enhanced_ender_ingot',
        'extendedcrafting:enhanced_ender_nugget',
        'extendedcrafting:enhanced_ender_ingot_block',
        'extendedcrafting:enhanced_ender_component',
        'extendedcrafting:enhanced_ender_catalyst',

        // component/catalyst line
        'extendedcrafting:basic_component',
        'extendedcrafting:basic_catalyst',
        'extendedcrafting:advanced_component',
        'extendedcrafting:advanced_catalyst',
        'extendedcrafting:elite_component',
        'extendedcrafting:elite_catalyst',
        'extendedcrafting:ultimate_component',
        'extendedcrafting:ultimate_catalyst',

        // crystaltine line
        'extendedcrafting:crystaltine_ingot',
        'extendedcrafting:crystaltine_nugget',
        'extendedcrafting:crystaltine_block',
        'extendedcrafting:crystaltine_component',
        'extendedcrafting:crystaltine_catalyst',

        // ultimate ingot line
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:the_ultimate_nugget',
        'extendedcrafting:the_ultimate_block',
        'extendedcrafting:the_ultimate_component',
        'extendedcrafting:the_ultimate_catalyst',

        // stars and star blocks
        'extendedcrafting:flux_star',
        'extendedcrafting:flux_star_block',
        'extendedcrafting:ender_star',
        'extendedcrafting:ender_star_block',

        // singularities (compressor output, nothing consumes them)
        'extendedcrafting:singularity',
        'extendedcrafting:ultimate_singularity',

        // misc utilities
        'extendedcrafting:recipe_maker',
        'extendedcrafting:handheld_table',
    ]
    ec_intermediates.forEach(item => event.hide(item))
})
