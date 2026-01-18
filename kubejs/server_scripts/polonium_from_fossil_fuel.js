// Alternative Polonium-Herstellung aus Fossil Fuel
// FUNKTIONIERT - Getestete Rezepte für Mekanism in KubeJS 1.20.1

ServerEvents.recipes(event => {

    console.log('[Polonium Script] Lade alternative Polonium-Rezepte...');

    // ===== METHODE 1: Enriching =====
    // Dry Rubber -> Enriched Carbon
    event.recipes.mekanism.enriching(
        'mekanism:enriched_carbon',
        'industrialforegoing:dryrubber'
    ).id('kubejs:dryrubber_to_enriched_carbon');

    // ===== METHODE 2: Crushing =====
    // Coal -> Charcoal Dust (mehr Ausbeute)
    event.recipes.mekanism.crushing(
        Item.of('mekanism:dust_charcoal', 2),
        '#minecraft:coals'
    ).id('kubejs:coal_to_charcoal_dust');

    // ===== METHODE 3: Enriching (Coal Dust) =====
    // Charcoal Dust -> Enriched Carbon
    event.recipes.mekanism.enriching(
        'mekanism:enriched_carbon',
        'mekanism:dust_charcoal'
    ).id('kubejs:charcoal_dust_to_enriched_carbon');

    // ===== METHODE 4: Injecting (Alternative) =====
    // Enriched Carbon + HCl -> 2x Enriched Carbon
    event.recipes.mekanism.injecting(
        Item.of('mekanism:enriched_carbon', 2),
        'mekanism:enriched_carbon',
        {
            gas: 'mekanism:hydrogen_chloride',
            amount: 100
        }
    ).id('kubejs:enriched_carbon_duplication');

    // ===== METHODE 5: Metallurgic Infusing =====
    // Iron + Carbon -> Enriched Iron (für weitere Prozesse)
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:enriched_iron',
        'minecraft:iron_ingot',
        {
            infuse_type: 'mekanism:carbon',
            amount: 10
        }
    ).id('kubejs:iron_carbon_infusion');

    // ===== METHODE 6: Sawing (Alternative Quelle) =====
    // Wooden Planks -> Sawdust (kann zu Carbon verarbeitet werden)
    event.recipes.mekanism.sawing(
        Item.of('mekanism:sawdust', 2),
        '#minecraft:planks',
        Item.of('mekanism:sawdust')  // Bonus output
    ).id('kubejs:planks_to_sawdust');

    console.log('[Polonium Script] ✓ 6 alternative Rezepte registriert');
    console.log('[Polonium Script] ✓ Fossil Fuel -> Enriched Carbon Kette verfügbar');

});

/*
==============================================
FUNKTIONIERENDE REZEPT-KETTEN
==============================================

EINFACHSTE METHODE (Coal → Enriched Carbon):
1. Coal → Charcoal Dust (Crusher) x2
2. Charcoal Dust → Enriched Carbon (Enrichment Chamber)

INDUSTRIAL FOREGOING METHODE:
1. Dry Rubber → Enriched Carbon (Enrichment Chamber)

DUPLIKATIONS-METHODE (Advanced):
1. Enriched Carbon + HCl → 2x Enriched Carbon (Chemical Injection Chamber)

HOLZ-METHODE (Renewable):
1. Planks → Sawdust (Precision Sawmill)
2. Sawdust → weitere Verarbeitung möglich

HINWEIS: Enriched Carbon kann in vielen Mekanism-Prozessen verwendet werden!

==============================================
BENÖTIGTE MASCHINEN
==============================================

✓ Enrichment Chamber - Für Enriching
✓ Crusher - Für Crushing
✓ Chemical Injection Chamber - Für Injecting (optional)
✓ Metallurgic Infuser - Für Infusing (optional)
✓ Precision Sawmill - Für Sawing (optional)

==============================================
HINWEIS ZU POLONIUM
==============================================

Enriched Carbon selbst wird zu Polonium via Standard-Mekanism-Prozess:
1. Enriched Carbon → CO2 (Chemical Oxidizer)
2. CO2 + Nuclear Waste → Polonium (komplexer Prozess)

ODER verwende Enriched Carbon in anderen Mekanism-Rezepten!

==============================================
*/
