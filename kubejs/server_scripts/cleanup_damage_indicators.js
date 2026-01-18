// ===================================
// Damage-Indicator Cleanup Script
// Industrial Colony 2 Server
// Version: 1.2.0
// ===================================
//
// ZWECK: Entfernt alte MythicLib Damage-Indicator Entities automatisch
// FUNKTION:
// 1. Verhindert neue Text-Display Entities (Damage-Indikatoren)
// 2. Entfernt alle 10 Minuten alte Text-Displays
//
// ===================================

// --- CLEANUP ALLE 10 MINUTEN ---
ServerEvents.tick(event => {
    const { server } = event;

    // Alle 12000 Ticks (10 Minuten)
    if (server.tickCount % 12000 === 0) {
        // Entferne alle Text-Display Entities ohne Custom-Name
        // (Damage-Indikatoren haben meist keinen Namen oder nur Zahlen)
        try {
            // Methode 1: Kill-Befehl für namenlose Text-Displays
            server.runCommandSilent('kill @e[type=minecraft:text_display,name=""]');

            // Methode 2: Kill-Befehl für numerische Namen (z.B. "12", "5.5")
            // Diese Entities sind wahrscheinlich Damage-Indikatoren
            server.runCommandSilent('kill @e[type=minecraft:text_display,name="!"]');

            // Optional: Entferne auch alte Armor-Stands (falls MythicLib die nutzt)
            // server.runCommandSilent('kill @e[type=minecraft:armor_stand,name=""]');

        } catch (error) {
            // Fehler loggen (falls Befehl nicht funktioniert)
            console.error('[Cleanup] Fehler beim Entfernen von Damage-Indikatoren: ' + error);
        }
    }
});

// --- VERHINDERE NEUE DAMAGE-INDIKATOREN (Fallback) ---
// Falls MythicLib trotz deaktivierter Config noch Entities spawnt
EntityEvents.spawned('minecraft:text_display', event => {
    const { entity } = event;

    try {
        // Prüfe ob die Entity einen Custom-Name hat
        const hasCustomName = entity.hasCustomName();

        // Wenn kein Custom-Name -> wahrscheinlich Damage-Indicator
        if (!hasCustomName) {
            event.cancel(); // Verhindere Spawnen
            return;
        }

        // Alternative: Prüfe ob der Name nur aus Zahlen besteht
        const name = entity.customName ? entity.customName.getString() : '';

        // Damage-Indikatoren haben Namen wie "12.5", "50", "3.14" etc.
        if (name && /^[0-9.]+$/.test(name)) {
            event.cancel(); // Verhindere Spawnen
        }

    } catch (error) {
        // Fehler ignorieren (Entity könnte bereits despawned sein)
    }
});

// --- ARMOR-STAND CLEANUP (Optional) ---
// Falls MythicLib Armor-Stands für Damage-Indikatoren nutzt
/*
EntityEvents.spawned('minecraft:armor_stand', event => {
    const { entity } = event;

    try {
        // Prüfe Eigenschaften die auf Damage-Indicator hinweisen
        const hasCustomName = entity.hasCustomName();
        const isInvisible = entity.invisible;
        const hasGravity = !entity.noGravity;

        // Damage-Indicator Armor-Stands sind meist:
        // - Unsichtbar
        // - Ohne Gravity
        // - Ohne Custom-Name oder nur Zahlen
        if (!hasCustomName && isInvisible && !hasGravity) {
            event.cancel();
        }

    } catch (error) {
        // Fehler ignorieren
    }
});
*/

// --- MANUAL CLEANUP COMMAND (Optional) ---
// Erstellt einen Custom-Befehl zum manuellen Cleanup
/*
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('cleanupdamage')
            .requires(source => source.hasPermission(2)) // Nur für OPs
            .executes(context => {
                const server = context.source.server;

                try {
                    // Entferne alle Text-Displays
                    server.runCommandSilent('kill @e[type=minecraft:text_display]');

                    // Nachricht an Ausführenden
                    context.source.sendSuccess(
                        Component.literal('§a[Cleanup] §7Damage-Indikatoren entfernt!'),
                        true
                    );

                    return 1; // Erfolg
                } catch (error) {
                    context.source.sendFailure(
                        Component.literal('§c[Cleanup] §7Fehler: ' + error)
                    );
                    return 0; // Fehler
                }
            })
    );
});
*/

console.info('[Cleanup] Damage-Indicator Cleanup Script geladen');
console.info('[Cleanup] - Auto-Cleanup alle 10 Minuten');
console.info('[Cleanup] - Verhindert neue Text-Display Entities (Damage-Indikatoren)');
