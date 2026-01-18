// --- EXP Booster Script ---
// XP-Boost für Spieler mit GameMaster-Sword

// Tick-basierte Lösung für XP-Boost
PlayerEvents.tick(event => {
    const { player } = event;

    // Nur alle 20 Ticks (1 Sekunde) prüfen für Performance
    if (player.age % 20 !== 0) return;

    // Prüfe ob der Spieler das GameMaster-Sword hält
    const mainHandItem = player.mainHandItem;

    if (mainHandItem && mainHandItem.id) {
        const itemName = mainHandItem.hasNBT() && mainHandItem.nbt ?
            (mainHandItem.nbt.display?.Name || mainHandItem.id) :
            mainHandItem.id;

        // Check: Hat das Item "GameMaster-Sword" im Namen?
        if (itemName.toString().includes("GameMaster-Sword")) {
            // Setze ein Player-Persistent-Data-Tag für XP-Boost
            player.persistentData.putBoolean('exp_boost_active', true);

            // Zeige Nachricht nur einmal pro Minute
            if (player.age % 1200 === 0) {
                player.displayClientMessage('§a§l40x EXP BOOST AKTIV!', true);
            }
        } else {
            player.persistentData.putBoolean('exp_boost_active', false);
        }
    } else {
        player.persistentData.putBoolean('exp_boost_active', false);
    }
});

// XP-Boost anwenden wenn Spieler XP erhält
// Verwende den Level-Change Event als Trigger
PlayerEvents.inventoryChanged(event => {
    const { player } = event;

    // Prüfe ob XP-Boost aktiv ist
    if (player.persistentData.getBoolean('exp_boost_active')) {
        // Hole aktuelles XP
        const currentXp = player.xp;

        // Wenn XP vorhanden ist, multipliziere es
        if (currentXp > 0) {
            // Füge 79x zusätzliches XP hinzu (zusammen mit Original = 80x)
            player.addXP(Math.floor(currentXp * 79));
        }
    }
});

// Alternative: Verwende den Experience-Change Event (falls verfügbar)
// Dieser Ansatz ist präziser aber möglicherweise nicht in allen KubeJS-Versionen verfügbar
/*
PlayerEvents.experienceChange(event => {
    const { player, amount } = event;

    // Prüfe ob der Spieler das GameMaster-Sword hält
    const mainHandItem = player.mainHandItem;

    if (mainHandItem && mainHandItem.id) {
        const itemName = mainHandItem.hasNBT() && mainHandItem.nbt ?
            (mainHandItem.nbt.display?.Name || mainHandItem.id) :
            mainHandItem.id;

        if (itemName.toString().includes("GameMaster-Sword")) {
            // Multipliziere XP um 80
            event.setAmount(amount * 80);
            player.displayClientMessage('§a§l40x EXP BOOST AKTIV!', true);
        }
    }
});
*/

console.info('[EXP BUFF] XP-Boost Script für GameMaster-Sword geladen (Tick-basiert)');
