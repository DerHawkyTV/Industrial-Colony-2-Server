// ===================================
// Industrial Foregoing - Range Addon Bundle Recipes
// Crafting & Rechtsklick-Events für Range-Bundles
// ===================================

ServerEvents.recipes(event => {

    // RANGE BUNDLE 2x - Kombiniert 2 Range-Addons
    event.shaped('kubejs:range_addon_bundle_2x', [
        'P',
        'R',
        'R'
    ], {
        P: 'industrialforegoing:plastic',
        R: 'industrialforegoing:range_addon11'
    });

    // RANGE BUNDLE 3x - Kombiniert 3 Range-Addons
    event.shaped('kubejs:range_addon_bundle_3x', [
        'PRP',
        'RRR'
    ], {
        P: 'industrialforegoing:plastic',
        R: 'industrialforegoing:range_addon11'
    });

    // RANGE BUNDLE 4x - Kombiniert 4 Range-Addons
    event.shaped('kubejs:range_addon_bundle_4x', [
        'PRP',
        'RRR',
        'PRP'
    ], {
        P: 'industrialforegoing:plastic',
        R: 'industrialforegoing:range_addon11'
    });

    // Shapeless Alternative (einfacher)
    event.shapeless('kubejs:range_addon_bundle_2x', [
        '2x industrialforegoing:range_addon11',
        'industrialforegoing:plastic'
    ]);

    event.shapeless('kubejs:range_addon_bundle_3x', [
        '3x industrialforegoing:range_addon11',
        'industrialforegoing:plastic'
    ]);

    event.shapeless('kubejs:range_addon_bundle_4x', [
        '4x industrialforegoing:range_addon11',
        'industrialforegoing:plastic'
    ]);

});

// Rechtsklick-Event: Bundle auspacken
ItemEvents.rightClicked(event => {
    const { player, item } = event;

    // Bundle 2x auspacken
    if (item.id === 'kubejs:range_addon_bundle_2x') {
        item.count--;
        player.give('2x industrialforegoing:range_addon11');
        player.displayClientMessage('§a[IF] §72x Range Addon Tier 11 erhalten!', true);
    }

    // Bundle 3x auspacken
    if (item.id === 'kubejs:range_addon_bundle_3x') {
        item.count--;
        player.give('3x industrialforegoing:range_addon11');
        player.displayClientMessage('§a[IF] §73x Range Addon Tier 11 erhalten!', true);
    }

    // Bundle 4x auspacken
    if (item.id === 'kubejs:range_addon_bundle_4x') {
        item.count--;
        player.give('4x industrialforegoing:range_addon11');
        player.displayClientMessage('§a[IF] §74x Range Addon Tier 11 erhalten!', true);
    }
});

console.info('[IF Range Bundles] Recipes & Events geladen');
