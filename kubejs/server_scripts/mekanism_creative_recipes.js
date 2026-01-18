// Mekanism Creative Energy Cell Recipe
// Very expensive recipe using end-game materials from multiple mods
ServerEvents.recipes(event => {

    // Creative Energy Cell - Extrem teures Rezept
    event.shaped('mekanism:creative_energy_cube', [
        'DUD',
        'UCU',
        'DUD'
    ], {
        D: 'draconicevolution:awakened_draconium_block',      // Draconic Evolution End-game
        U: 'mekanism:ultimate_energy_cube',                   // Mekanism Ultimate Energy Cube
        C: 'draconicevolution:creative_op_capacitor'          // Draconic Evolution Creative Capacitor
    }).id('kubejs:creative_energy_cube_crafting');

    // Alternative mit mehr Komponenten
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
            "amount": 100000,
            "tag": "mekanism:antimatter"
        },
        "itemInput": {
            "ingredient": {
                "item": "mekanism:ultimate_energy_cube"
            }
        },
        "output": {
            "item": "mekanism:creative_energy_cube"
        }
    }).id('kubejs:creative_energy_cube_infusing');

});