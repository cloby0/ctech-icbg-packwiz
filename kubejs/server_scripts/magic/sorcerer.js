ServerEvents.recipes(event => {
    const elements = [
        "air",
        "earth",
        "fire",
        "water"
    ]

    elements.forEach(element => {
        event.recipes.ars_nouveau.enchanting_apparatus(
            [
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`
            ],
            "ars_nouveau:magebloom_crop",
            `mysticalagriculture:${element}_seeds`,
            1000,
        );
        event.replaceInput(
            { input: `ars_nouveau:${element}_essence` },
            `ars_nouveau:${element}_essence`,
            `#kubejs:${element}_essences`
        )
    })


});