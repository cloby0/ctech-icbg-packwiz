GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('kiln')
		.category('primitive')
		.setMaxIOSize(2, 1, 0, 0)
		.setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('gtceu:kiln', 'primitive')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('kiln')
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('BBB', 'BBB', 'BBB', '#B#', '#A#')
			.aisle('BBB', 'BCB', 'B#B', 'B#B', 'A#A')
			.aisle('BBB', 'BDB', 'BBB', '#B#', '#A#')
			.where('A', Predicates.blockTag('#minecraft:logs'))
			.where('B', Predicates.blocks('minecraft:mud_bricks'))
			.where('#', Predicates.any())
			.where('C', Predicates.blocks('minecraft:campfire'))
			.where('D', Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingModel('minecraft:block/mud_bricks', 'gtceu:block/multiblock/primitive_blast_furnace')
});