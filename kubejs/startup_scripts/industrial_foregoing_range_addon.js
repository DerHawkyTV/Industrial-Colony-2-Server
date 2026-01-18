// ===================================
// Industrial Foregoing - Range Addon Helper
// Erleichtert das Erstellen von Range-Addon-Stacks
// ===================================
//
// WICHTIG: Industrial Foregoing Range ist HARDCODED!
// Diese Items sind MARKER-Items, die an mehrfache Range-Addons erinnern
//
// ECHTE LÖSUNG: Nutze mehrere Range Addon Tier 11 gleichzeitig!
// - 2x Range Addon Tier 11 = 24 Blöcke Range
// - 3x Range Addon Tier 11 = 36 Blöcke Range
// - 4x Range Addon Tier 11 = 48 Blöcke Range
//
// Diese Items können gegen echte Range-Addons getauscht werden
//
// ===================================

StartupEvents.registry('item', event => {

    // RANGE BUNDLE x2 (= 24 Blöcke)
    event.create('range_addon_bundle_2x')
        .displayName('§eRange Addon Bundle §7(2x)')
        .tooltip('§7Enthält: §b2x Range Addon Tier 11')
        .tooltip('§7Gesamt-Range: §a+24 Blöcke')
        .tooltip('§8Rechtsklick zum Auspacken')
        .rarity('uncommon')
        .maxStackSize(16);

    // RANGE BUNDLE x3 (= 36 Blöcke)
    event.create('range_addon_bundle_3x')
        .displayName('§6Range Addon Bundle §7(3x)')
        .tooltip('§7Enthält: §b3x Range Addon Tier 11')
        .tooltip('§7Gesamt-Range: §a+36 Blöcke')
        .tooltip('§8Rechtsklick zum Auspacken')
        .rarity('rare')
        .maxStackSize(16);

    // RANGE BUNDLE x4 (= 48 Blöcke)
    event.create('range_addon_bundle_4x')
        .displayName('§5Range Addon Bundle §7(4x)')
        .tooltip('§7Enthält: §b4x Range Addon Tier 11')
        .tooltip('§7Gesamt-Range: §a+48 Blöcke')
        .tooltip('§8Rechtsklick zum Auspacken')
        .rarity('epic')
        .glow(true)
        .maxStackSize(16);

});

console.info('[IF Range Helper] Range-Addon-Bundles erstellt (2x, 3x, 4x)');
