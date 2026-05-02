ServerEvents.recipes(event => {
    event.remove({ id: "reliquary:ender_staff" });
    event.remove({ id: "reliquary:shears_of_winter" });
    event.remove({ id: "reliquary:sojourner_staff" });
    event.remove({ id: "reliquary:glacial_staff" });
    event.remove({ id: "reliquary:hero_medallion" });
    event.remove({ id: "reliquary:rod_of_lyssa" });
    event.remove({ id: "reliquary:void_tear" });

    event.remove({ id: "irons_spellbooks:divine_pearl" });
    event.remove({ id: "reliquary:mercy_cross" });

    event.remove({ id: "ars_nouveau:enchanting_apparatus" });
    event.remove({ id: "ars_nouveau:arcane_pedestal" });
    event.remove({ id: "ars_nouveau:arcane_core" });

    event.remove({ id: "constructionwand:infinity_wand" });

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "gtceu:source_gem"
        },
        "output": "reliquary:void_tear",
        "pedestalItems": [{
            "item": {
                "item": "minecraft:crying_obsidian"
            }
            }],
        "source": 500
    });
});
