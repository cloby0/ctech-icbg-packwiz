ServerEvents.tags('item', event => {
  event.add('aether:aether_portal_activation_items', 'gtceu:luminessence_dust');

  const elements = [
    "air",
    "earth",
    "fire",
    "water"
  ]

  elements.forEach(element => {
    event.add(`kubejs:${element}_essences`, `ars_nouveau:${element}_essence`);
    event.add(`kubejs:${element}_essences`, `mysticalagriculture:${element}_essence`);
  })

  event.add('forge:ingots/silicon', 'ae2:silicon');
  event.add('forge:gems/ambrosium', 'aether:ambrosium_shard');
});