// --- Vault to Lightman's Power-Sync V6 ---

BlockEvents.rightClicked('lightmanscurrency:atm', event => {
    const { player, server, username } = event;

    // 1. PAPI Kontostand in Scoreboard übertragen
    server.runCommandSilent(`execute as ${username} store result score @s vault_sync run papi parse @s %vault_eco_balance_fixed%`);

    server.scheduleInTicks(2, callback => {
        let balance = server.runCommandSilent(`scoreboard players get ${username} vault_sync`);

        if (balance >= 0) {
            // A) Wir erstellen zur Sicherheit ein Bankkonto, falls der Spieler noch keines hat
            server.runCommandSilent(`lcadmin bank admin create ${username}`);
            
            // B) Wir setzen das Guthaben (wir versuchen beide Formate zur Sicherheit)
            server.runCommandSilent(`lcadmin bank admin setBalance ${username} ${balance}`);
            
            // C) Nachricht an den Spieler
            player.statusMessage = `§aBank-Sync: §f${balance} $ übertragen.`;
            
            // D) Den ATM für den Spieler öffnen (falls er nicht schon offen ist)
            // Bei manchen Versionen hilft das, die Anzeige zu aktualisieren
        }
    });
});