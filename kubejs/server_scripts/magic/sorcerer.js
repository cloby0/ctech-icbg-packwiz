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
                `ars_nouveau:${element}_essence`,
                `ars_nouveau:${element}_essence`,
                `ars_nouveau:${element}_essence`,
            ],
            "minecraft:gunpowder",
            `mysticalagriculture:${element}_seeds`,
            1000,
        );
    })
});