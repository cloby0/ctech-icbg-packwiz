ServerEvents.tags('fluid', event => {
    event.add('ad_astra:fuel', 'gtceu:rocket_fuel');

    for (let i = 1; i <= 4; i++) {
        event.add(`ad_astra:tier_${i}_rocket_fuel`, 'gtceu:rocket_fuel');
    }
})
