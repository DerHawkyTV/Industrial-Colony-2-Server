// ===================================
// Custom Traders Script
// Industrial Colony 2 Server
// Version: 1.2.0
// ===================================
//
// ZWECK: Erstellt custom Trader-NPCs und Villager-Trades
//
// METHODEN:
// 1. Vanilla Villager Trades modifizieren
// 2. Wandering Trader Trades modifizieren
// 3. Custom Trade-Blöcke (mit Lightman's Currency)
// 4. NPC-Rechtsklick-Handler
//
// ===================================

// --- METHODE 1: Vanilla Villager Trades modifizieren ---

// MoreJSEvents ist nicht verfügbar - Diese Funktionalität erfordert das MoreJS Addon
// Alternativ können Trades via Datapacks oder andere Methoden hinzugefügt werden
/* MoreJSEvents.villagerTrades(event => {

    // BEISPIEL 1: Farmer - Verkauft Custom Items
    event.addTrade('minecraft:farmer', 1, [
        // Trade: 10 Emeralds -> 1 Diamond
        TradeItem.of('minecraft:diamond', 1),
        TradeItem.of('minecraft:emerald', 10)
    ]);

    event.addTrade('minecraft:farmer', 2, [
        // Trade: 5 Gold -> 1 Netherite Scrap
        TradeItem.of('minecraft:netherite_scrap', 1),
        TradeItem.of('minecraft:gold_ingot', 5)
    ]);

    // BEISPIEL 2: Weaponsmith - Verkauft enchantete Waffen
    event.addTrade('minecraft:weaponsmith', 3, [
        // Trade: 20 Emeralds -> Enchanted Diamond Sword (Sharpness V)
        TradeItem.of('minecraft:diamond_sword', 1, {
            Enchantments: [
                { id: 'minecraft:sharpness', lvl: 5 },
                { id: 'minecraft:unbreaking', lvl: 3 }
            ],
            display: {
                Name: '{"text":"Meister-Schwert","color":"gold","bold":true}'
            }
        }),
        TradeItem.of('minecraft:emerald', 20)
    ]);

    // BEISPIEL 3: Toolsmith - Verkauft Tools
    event.addTrade('minecraft:toolsmith', 2, [
        // Trade: 15 Emeralds -> Efficiency V Diamond Pickaxe
        TradeItem.of('minecraft:diamond_pickaxe', 1, {
            Enchantments: [
                { id: 'minecraft:efficiency', lvl: 5 },
                { id: 'minecraft:fortune', lvl: 3 }
            ]
        }),
        TradeItem.of('minecraft:emerald', 15)
    ]);

    // BEISPIEL 4: Librarian - Verkauft Custom Enchantment Books
    event.addTrade('minecraft:librarian', 4, [
        // Trade: 30 Emeralds -> Mending Book
        TradeItem.of('minecraft:enchanted_book', 1, {
            StoredEnchantments: [
                { id: 'minecraft:mending', lvl: 1 }
            ]
        }),
        TradeItem.of('minecraft:emerald', 30)
    ]);

    // BEISPIEL 5: Armorer - Verkauft enchantete Rüstung
    event.addTrade('minecraft:armorer', 5, [
        // Trade: 50 Emeralds -> Full Netherite Helmet mit Protection IV
        TradeItem.of('minecraft:netherite_helmet', 1, {
            Enchantments: [
                { id: 'minecraft:protection', lvl: 4 },
                { id: 'minecraft:respiration', lvl: 3 },
                { id: 'minecraft:unbreaking', lvl: 3 }
            ],
            display: {
                Name: '{"text":"Tiefsee-Helm","color":"aqua","bold":true}'
            }
        }),
        TradeItem.of('minecraft:emerald', 50)
    ]);

    // BEISPIEL 6: Cleric - Verkauft Potions
    event.addTrade('minecraft:cleric', 3, [
        // Trade: 10 Emeralds -> Regeneration Potion II
        TradeItem.of('minecraft:potion', 1, {
            Potion: 'minecraft:strong_regeneration'
        }),
        TradeItem.of('minecraft:emerald', 10)
    ]);

    // BEISPIEL 7: Benutzerdefinierter Villager-Typ
    // Füge Trades zu ALLEN Villager-Typen hinzu
    event.addTrade('*', 1, [
        // Jeder Villager Level 1 verkauft: 32 Bread für 1 Emerald
        TradeItem.of('minecraft:bread', 32),
        TradeItem.of('minecraft:emerald', 1)
    ]);

});
*/

// --- METHODE 2: Wandering Trader Trades modifizieren ---

/* MoreJSEvents.wandererTrades(event => {

    // BEISPIEL 1: Seltene Items
    event.addTrade(1, [
        // Trade: 5 Emeralds -> Music Disc
        TradeItem.of('minecraft:music_disc_cat', 1),
        TradeItem.of('minecraft:emerald', 5)
    ]);

    event.addTrade(1, [
        // Trade: 10 Emeralds -> Elytra
        TradeItem.of('minecraft:elytra', 1),
        TradeItem.of('minecraft:emerald', 10)
    ]);

    event.addTrade(2, [
        // Trade: 20 Emeralds -> Nether Star
        TradeItem.of('minecraft:nether_star', 1),
        TradeItem.of('minecraft:emerald', 20)
    ]);

    event.addTrade(2, [
        // Trade: 15 Emeralds -> Dragon Egg
        TradeItem.of('minecraft:dragon_egg', 1),
        TradeItem.of('minecraft:emerald', 15)
    ]);

});
*/

// --- METHODE 3: Custom NPC mit Rechtsklick-Trades ---

// BEISPIEL: Erstelle einen "Shop-NPC" der auf Rechtsklick reagiert
// DEAKTIVIERT - VillagerData kann nicht direkt gesetzt werden in KubeJS
/* EntityEvents.spawned('minecraft:villager', event => {
    const { entity, server } = event;

    // Prüfe ob der Villager einen speziellen Namen hat
    if (entity.customName && entity.customName.getString().includes('[SHOP]')) {

        // VillagerData kann nicht als Object gesetzt werden
        // Nutze stattdessen NBT oder Commands

        // Mache Villager unsterblich (optional)
        entity.invulnerable = true;
        entity.persistent = true;

        // Entferne AI (steht still)
        entity.setNoAi(true);
    }
});
*/

// --- METHODE 4: Custom Trade-Block Handler ---

// BEISPIEL: Erstelle einen Custom-Shop mit Barrel-Block
BlockEvents.rightClicked('minecraft:barrel', event => {
    const { player, block, server } = event;

    // Prüfe ob der Block einen Custom-Name hat (via Sign oder NBT)
    // Du kannst einen Barrel mit /setblock platzieren mit Custom-NBT

    // Beispiel: Shop-GUI öffnen
    const barrelName = block.entityData?.CustomName;

    if (barrelName && barrelName.toString().includes('Waffen-Shop')) {

        event.cancel(); // Verhindere normales Öffnen

        // Öffne custom Shop-Menü
        player.tell('§6[Waffen-Shop] §7Öffne Shop-Menü...');

        // Hier kannst du:
        // 1. Lightman's Currency Shop öffnen
        // 2. Custom GUI öffnen
        // 3. Items gegen Geld tauschen

        // Beispiel: Gib dem Spieler ein Item gegen Geld
        const price = 100; // 100 Coins

        server.scheduleInTicks(1, callback => {
            // Prüfe ob Spieler genug Geld hat (via Vault)
            const hasEnoughMoney = server.runCommandSilent(`execute if score ${player.username} money matches ${price}..`);

            if (hasEnoughMoney) {
                // Entferne Geld
                server.runCommandSilent(`eco take ${player.username} ${price}`);

                // Gib Item
                player.give('minecraft:diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]}');

                player.tell('§a[Waffen-Shop] §7Gekauft: Diamant-Schwert (Schärfe V) für §6$' + price);
            } else {
                player.tell('§c[Waffen-Shop] §7Nicht genug Geld! Benötigt: §6$' + price);
            }
        });
    }
});

// --- METHODE 5: Lightman's Currency Integration ---

// BEISPIEL: Erstelle automatisch einen Lightman's Shop beim Platzieren
BlockEvents.placed('lightmanscurrency:item_trader', event => {
    const { player, block, server } = event;

    player.tell('§a[Lightman\'s Currency] §7Item-Trader platziert!');
    player.tell('§7Konfiguriere den Shop mit §6/lcadmin trader');

    // Optional: Setze Shop-Besitzer automatisch
    server.scheduleInTicks(10, callback => {
        // Hier könntest du den Shop via Commands konfigurieren
        // Lightman's Currency hat eigene GUIs für Shop-Setup
    });
});

// --- METHODE 6: Custom Trader Spawn-Event ---

// Spawne einen Custom-Trader an bestimmten Koordinaten
// DEAKTIVIERT - Beispiel-Code, spawnt NPC bei jedem Server-Start
/* ServerEvents.loaded(event => {
    const { server } = event;

    // Beispiel: Spawne einen Villager-Shop beim Server-Start
    // Hinweis: Koordinaten anpassen! (0 64 0 ist nur ein Beispiel)
    server.runCommandSilent(`summon minecraft:villager 0 64 0 {CustomName:'{"text":"[SHOP] Waffen-Händler","color":"gold","bold":true}',NoAI:1b,Invulnerable:1b,PersistenceRequired:1b,VillagerData:{profession:"minecraft:weaponsmith",level:5,type:"minecraft:plains"}}`);

    console.info('[Custom Traders] Shop-NPCs gespawnt');
});
*/

// --- BEISPIEL-TEMPLATES ---

/*
// TEMPLATE 1: Villager Trade hinzufügen
event.addTrade('PROFESSION', LEVEL, [
    TradeItem.of('OUTPUT_ITEM', COUNT, {NBT}),
    TradeItem.of('INPUT_ITEM', COUNT)
]);

// TEMPLATE 2: Enchanted Item Trade
event.addTrade('minecraft:weaponsmith', 3, [
    TradeItem.of('minecraft:diamond_sword', 1, {
        Enchantments: [
            { id: 'minecraft:sharpness', lvl: 5 },
            { id: 'minecraft:unbreaking', lvl: 3 },
            { id: 'minecraft:mending', lvl: 1 }
        ],
        display: {
            Name: '{"text":"Legendary Sword","color":"gold","bold":true}',
            Lore: [
                '{"text":"Ein legendäres Schwert","color":"gray","italic":true}',
                '{"text":"Schärfe V, Haltbarkeit III, Reparatur","color":"aqua"}'
            ]
        }
    }),
    TradeItem.of('minecraft:emerald', 50),
    TradeItem.of('minecraft:diamond', 10) // Zweiter Input (optional)
]);

// TEMPLATE 3: Potion Trade
event.addTrade('minecraft:cleric', 2, [
    TradeItem.of('minecraft:potion', 1, {
        Potion: 'minecraft:strong_healing',
        CustomPotionColor: 16711680 // Rot
    }),
    TradeItem.of('minecraft:emerald', 5)
]);

// TEMPLATE 4: Custom Item mit NBT
event.addTrade('minecraft:farmer', 3, [
    TradeItem.of('minecraft:golden_apple', 1, {
        display: {
            Name: '{"text":"Göttlicher Apfel","color":"light_purple","bold":true}',
            Lore: [
                '{"text":"Heilt vollständig","color":"gray","italic":true}'
            ]
        },
        Enchantments: [
            { id: 'minecraft:mending', lvl: 1 }
        ]
    }),
    TradeItem.of('minecraft:emerald', 20)
]);
*/

console.info('[Custom Traders] Trader-Script geladen');
console.info('[Custom Traders] - Vanilla Villager Trades');
console.info('[Custom Traders] - Wandering Trader Trades');
console.info('[Custom Traders] - Custom Shop-Blöcke');
console.info('[Custom Traders] - NPC-Handler');
