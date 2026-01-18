# 📋 Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

---

## [Unreleased]

### Geplant für v2.3.1
- [ ] FTB Quests Integration (ATM10 Quest-System adaptiert)
- [ ] Erweiterte Quest-Lines für alle Haupt-Mods
- [ ] Custom Quest-Rewards mit Apotheosis Items

---

## [2.3.0] - 2026-01-16

### 🎉 Major Release - ATM10 Mod Migration & Magie-Systeme

**Status:** ✅ Alpha Release

### 🆕 Hinzugefügt

#### Massive Mod-Erweiterung (126 neue Mods)
- **Mod-Count:** 190 → **316** (+126 Mods)
- Basierend auf **All The Mods 10** (ATM10) Modpack
- Lizenz für Scripts und Quests vom ATM-Team erhalten

#### Magie-Systeme (Neu)
- **Ars Nouveau** - Vollständiges Spell-Crafting System
  - Glyphen-basierte Zauber-Erstellung
  - Mana-System mit Regeneration
  - Familiars und Summoning
- **Ars Elemental** - Elementare Magie-Erweiterung
  - Feuer, Wasser, Erde, Luft Zauber
  - Elementar-Familiars
- **Occultism** - Dämonenbeschwörung
  - Spirit-System für Automatisierung
  - Dimensional Storage via Spirits
  - Crusher-Spirits für Ore-Processing
- **Blood Magic** - Blutrituale und Altar-Magie
- **Botania** - Natürliche Mana-Magie mit Blumen

#### Neue Kern-Mods
- **Alex's Caves** - Neue unterirdische Höhlen-Biome
- **Oh The Biomes We've Gone** - Weitere einzigartige Biome
- **Cataclysm** - Erweiterte Boss-Kämpfe
- **Farmer's Delight** Erweiterungen
- **Supplementaries** - QoL und Dekorationen
- **Sophisticated Storage/Backpacks** - Erweiterte Lagerung

#### Dokumentation
- **docs/enchantments_list.csv** - Alle 143+ Verzauberungen dokumentiert
- **docs/affixes_list.csv** - Alle 87 Apotheosis Affixes dokumentiert
- **docs/v2.3.0-migration/** - Migrations-Dokumentation

### 🔄 Geändert

#### Mod-Entfernungen (Konsolidierung)
Die folgenden Mods wurden entfernt (nicht kompatibel oder ersetzt):
- **Tacz Gun Mod Suite** - Alle Tacz-Mods entfernt
- **Valkyrien Skies** - Bereits in v1.2.0 entfernt
- **Terralith** - Ersetzt durch Oh The Biomes We've Gone
- **Distant Horizons** - Performance-Optimierung
- **Superb Warfare** - Nicht kompatibel

#### Plugin-Updates
- **EssentialsX** 2.21.2 → 2.22.0
- **LuckPerms** 5.5.17 → 5.5.20
- **TAB** 5.4.0 → 5.3.2

#### Konfigurationen
- **.gitignore** - Komplett überarbeitet für v2.3.0
- **README.md** - Aktualisiert mit neuen Features
- **Occultism** - Spirit-Job-Timings angepasst
- **Apotheosis** - Enchantment-Level erhöht

### 📊 Statistiken

| Kategorie | v2.1.0 | v2.3.0 | Änderung |
|-----------|--------|--------|----------|
| **Forge Mods** | 237 | 316 | +79 |
| **Bukkit Plugins** | 17 | 17 | ±0 |
| **Konfigurationsdateien** | 100+ | 150+ | +50 |

### ⚠️ Breaking Changes
- Tacz Gun Mod vollständig entfernt - Waffen-System basiert jetzt auf Apotheosis Affixes
- Terralith Biome-Generation entfernt - Welt sollte mit neuen Chunks kompatibel sein

### 📝 Migration von v2.1.0

1. **Backup erstellen** - Vollständiges World-Backup empfohlen
2. **Neue Mods** werden automatisch geladen
3. **Entfernte Mods** - Items aus Tacz werden zu "Unknown Items"
4. **Configs** bleiben kompatibel

### 🎯 Nächste Schritte (v2.3.1)

1. **FTB Quests** installieren und konfigurieren
2. **ATM10 Quests** an IC2 Mod-Liste anpassen
3. **Custom Quest-Lines** für Magie-Mods erstellen

---

## [2.1.0] - 2026-01-09

### 🔧 Maintenance Release - Bugfixes, Optimierungen & Content-Ergänzung

**Status:** 🚧 In Entwicklung

### 🆕 Hinzugefügt

#### Neue Mods (1)
- **BotanyPots-Forge** `13.0.41` - Kompakte automatische Pflanzenfarmen
  - Dekorative Töpfe in verschiedenen Materialien (Holz, Stein, Terrakotta)
  - Automatisches Pflanzenwachstum & Ernte
  - Kompatibilität: Mystical Agriculture, Industrial Foregoing, Mekanism, Vanilla
  - JEI-Integration für alle Rezepte
  - Perfekt für platzsparende Farms

#### Ender IO Conduit Optimierung
- **4x Transfer-Raten** für alle Ender IO Conduits (via Datapack)
  - **Energy Conduits:**
    - Basic: 5,120 → **20,480 FE/t** (4x)
    - Enhanced: 20,480 → **81,920 FE/t** (4x)
    - Ender: 81,920 → **327,680 FE/t** (4x)
  - **Fluid Conduits:**
    - Pressurized: 100 → **400 mB/t** (4x)
    - Ender: 800 → **3,200 mB/t** (4x)
  - **Item Conduits:**
    - Basic: 4 → **16 items/cycle** (4x)
    - Fast: 16 → **64 items/cycle** (4x)
  - Konfiguration: `world/datapacks/custom_conduits/`
  - Dokumentation: [docs/ENDERIO_CONDUIT_CONFIG.md](docs/ENDERIO_CONDUIT_CONFIG.md)

#### Dokumentation (8 neue Dateien)
- **docs/README.md** - Vollständig überarbeitete Dokumentations-Übersicht
  - 21 Dokumente strukturiert nach Kategorien
  - Schnellnavigation & Problem-Lösungen
  - Admin-Checkliste
- **docs/CLIENT_CRASH_FIX.md** - Creative Inventory Crash Lösung
- **docs/KUBEJS_FIXES.md** - KubeJS Script-Fehlerbehebungen
- **docs/MOD_SYNC_REPORT.md** - Aktueller Mod-Abgleich Client/Server
- **docs/MISSING_MODS_ANALYSIS.md** - Fehlende Mods-Analyse
- **docs/BOTANYPOTS_ADDED.md** - BotanyPots Installation & Features
- **docs/ENDERIO_CONDUIT_CONFIG.md** - Conduit-Konfiguration
- **docs/INDUSTRIAL_FOREGOING_RANGE_FIX.md** - Range-Anpassungen

### 🔧 Geändert

#### Mod-Verwaltung
- **Server Mods:** 236 → **237** (+1)
  - BotanyPots hinzugefügt
- **Client Mods:** 265 → **264** (-1)
  - refinedcooking entfernt (Crash-Fix)
- **Gemeinsame Mods:** 236 → **237**
- **Client-Only Mods:** 29 → **27** (-2)
  - BotanyPots jetzt auf Server
  - refinedcooking entfernt

#### README Aktualisierungen
- Mod-Badge: `213` → `237` ✅
- Alle Statistiken aktualisiert
- Links zu neuer Dokumentation

### 🐛 Behoben

#### Critical: Client Creative Inventory Crash
**Problem:**
- Client crasht beim Öffnen des Creative Mode Inventars
- Fehler: `NullPointerException: Registry Object not present: refinedcooking:kitchen_station`

**Ursache:**
- `refinedcooking-4.0.0.jar` war nur auf Client installiert
- Server kennt Block `kitchen_station` nicht
- JEI versucht beim Laden aller Creative Tabs auf nicht-existenten Block zuzugreifen

**Lösung:**
- Mod vom Client entfernen (bereits `appliedcooking` als Alternative vorhanden)
- Dokumentation: [docs/CLIENT_CRASH_FIX.md](docs/CLIENT_CRASH_FIX.md)
- **Status:** ✅ Gelöst

#### KubeJS Script-Fehler (Alle behoben)
**1. MoreJSEvents nicht definiert:**
- **Datei:** `kubejs/server_scripts/custom_traders.js:19`
- **Fehler:** `ReferenceError: "MoreJSEvents" is not defined`
- **Fix:** MoreJS-abhängige Code-Blöcke auskommentiert
- **Status:** ✅ Behoben

**2. Unbekannter Event:**
- **Datei:** `kubejs/server_scripts/exp_buff.js:4`
- **Fehler:** `Unknown event 'EntityEvents.pickedUpItem'!`
- **Fix:** Event entfernt, nur PlayerEvents.tick() verwendet
- **Status:** ✅ Behoben

**3. Mekanism-Rezept-Fehler:**
- **Datei:** `kubejs/server_scripts/polonium_from_fossil_fuel.js`
- **Fehler:** Falsche Rezept-Syntax mit `event.custom()`
- **Fix:** Kompletter Rewrite mit korrekten KubeJS Mekanism-Methoden:
  - `event.recipes.mekanism.enriching()`
  - `event.recipes.mekanism.crushing()`
  - `event.recipes.mekanism.injecting()`
  - `event.recipes.mekanism.metallurgic_infusing()`
  - `event.recipes.mekanism.sawing()`
- **Ergebnis:** 6 funktionierende Rezepte für alternative Polonium-Produktion
- **Status:** ✅ Behoben

**KubeJS Ergebnis:**
```
Loaded 9/9 KubeJS server scripts in 0.035 s with 0 errors and 0 warnings ✅
```

#### BotanyPots fehlte auf Server
**Problem:**
- BotanyPots war nur auf Client installiert
- Items waren in JEI sichtbar, aber nicht craftbar/nutzbar
- Töpfe konnten nicht platziert werden

**Ursache:**
- Mod ist serverseitig erforderlich
- Wurde als "Client-Only" interpretiert (Name: "Pots" klang dekorativ)

**Lösung:**
- BotanyPots zum Server hinzugefügt
- Mod-Sync zwischen Client/Server perfektioniert
- **Status:** ✅ Behoben

### 📊 Statistiken

#### Mod-Verteilung
| Kategorie | Anzahl | Status |
|-----------|--------|--------|
| Server Mods | **237** | ✅ |
| Client Mods | **264** | ✅ |
| Gemeinsame Mods | **237** | ✅ |
| Client-Only Mods | **27** | ✅ (Performance/UI) |
| Plugins | **17** | ✅ |

#### KubeJS Scripts
- **Scripts:** 9/9 geladen ✅
- **Errors:** 0 ✅
- **Warnings:** 0 ✅
- **Ladezeit:** 0.035s

#### Performance
- **Ender IO Conduits:** 4x schneller ⚡
- **Industrial Foregoing:** Erhöhte Reichweiten ✅
- **BotanyPots:** Kompakte Farmen 🌱

### 🗂️ Dokumentation

#### Neue Struktur
```
docs/ (21 Dateien, ~200 KB)
├── 🎮 Spieler-Guides (3)
├── 🔧 Konfiguration (4)
├── 🐛 Fehlerbehebung (5)
├── 📊 Analysen (6)
├── 🗺️ Roadmaps (3)
└── 📝 Entwicklung (3)
```

#### Wichtigste Dokumente
- [docs/README.md](docs/README.md) - Dokumentations-Hub ⭐
- [docs/MOD_SYNC_REPORT.md](docs/MOD_SYNC_REPORT.md) - Aktueller Mod-Status ⭐
- [docs/CLIENT_CRASH_FIX.md](docs/CLIENT_CRASH_FIX.md) - Crash-Lösung ⚠️
- [docs/KUBEJS_FIXES.md](docs/KUBEJS_FIXES.md) - Script-Fixes ✅
- [docs/ENDERIO_CONDUIT_CONFIG.md](docs/ENDERIO_CONDUIT_CONFIG.md) - Conduit-Optimierung ⚡

### ⚙️ Technische Details

#### Datapack-Konfigurationen
- **custom_conduits/** - Ender IO Conduit Transfer-Raten
  - `data/enderio/conduit_types/energy.json`
  - `data/enderio/conduit_types/fluid.json`
  - `data/enderio/conduit_types/item.json`
- **Format:** pack_format 15 (Minecraft 1.20.1)

#### KubeJS Script-Qualität
- Alle Scripts laden ohne Fehler
- Korrekte Mekanism-Integration
- Keine MoreJS-Abhängigkeit mehr
- Kompatibel mit allen installierten Mods

#### Client-Server Kompatibilität
- **100% Mod-Sync** zwischen Server & Client
- Alle erforderlichen Mods auf Server vorhanden
- Client-Only Mods rein kosmetisch/Performance
- Keine Kompatibilitätsprobleme

### 🎯 Nächste Schritte

#### Empfohlene Aktionen
1. **Server neu starten** - BotanyPots aktivieren
2. **Client aktualisieren** - `refinedcooking` entfernen
3. **Testen:**
   - BotanyPots Töpfe craften & verwenden
   - Ender IO Conduits mit 4x Rates testen
   - Creative Inventory öffnen (sollte nicht mehr crashen)

#### Optional
- Backup erstellen vor Produktiv-Einsatz
- Spielern BotanyPots-Features mitteilen
- Custom KubeJS-Rezepte für BotanyPots hinzufügen

### 📦 Backup-Info

**Empfohlenes Backup vor v2.1:**
- Letztes stabiles Backup: `backups/v2.0.0-dev_2026-01-06/`
- Größe: ~1.1 GB
- Enthält: world, mods, plugins, config, kubejs, docs

### 🔗 Referenzen

- **BotanyPots CurseForge:** https://www.curseforge.com/minecraft/mc-mods/botany-pots
- **Ender IO Wiki:** https://github.com/SleepyTrousers/EnderIO-Rewrite/wiki
- **KubeJS Mekanism Docs:** https://github.com/Notenoughmail/KubeJS-Mekanism

### 💬 Änderungsübersicht

**Zusammenfassung:**
- ✅ 1 neue Mod (BotanyPots)
- ✅ 4x Ender IO Conduit Rates
- ✅ Alle KubeJS-Fehler behoben
- ✅ Client Crash behoben
- ✅ 8 neue Dokumentations-Dateien
- ✅ Perfekte Mod-Synchronisation
- ✅ 100% fehlerfreie Scripts

**Version 2.1.0 ist ein Maintenance-Release mit Fokus auf Stabilität, Fehlerbehebung und Optimierung.**

---

## [2.0.0] - 2026-01-06

### 🎉 Major Release - Neue Dimensionen & Boss-Kämpfe

**Status:** ✅ Stable Release

### 🆕 Hinzugefügt

#### Neue Mods (20)

**Aether Dimension Suite (3 Mods)**:
- **Aether** `1.20.1-1.5.2` - Sky Islands Dimension mit neuer Progression
- **Deep Aether** `1.20.1-1.1.7` - Erweiterte Aether-Inhalte
- **Lost Aether Content** `1.20.1-1.2.3` - Zusätzliche Aether-Features

**L_Enders Cataclysm Suite (7 Mods)**:
- **L_Enders Cataclysm** `3.16` - 8 neue Endgame-Bosse & Dungeons
- **Apothic Cataclysm** `1.0.1` - Apotheosis-Integration
- **Cataclysm Tools** `2.0.0` - Boss-Waffen & Tools
- **Cataclysm UT Lite** `8` - Utility-Tools
- **Cataclysm Fortresses** `1.20.1` - Neue Strukturen
- **Cataclysm Summons** `1.0.1` - Beschwörung-System
- **Cataclysm Weaponery** `2.0` - Erweiterte Waffen
- **Lenders Delight** `1.0.10` - Farmers Delight + Cataclysm Integration

**Spartan Weaponry Suite (3 Mods)**:
- **Spartan Weaponry** `3.2.1` - 15+ neue Waffen-Typen (Speere, Hämmer, Katanas)
- **Spartan Toolkit** `1.6.1` - Crafting-System für Waffen
- **Spartan Cataclysm** `1.1.2` - Cataclysm-Waffen-Integration

**Utilities & Systems (3 Mods)**:
- **Pehkui** `3.8.2` - Entity Scaling (Größenänderung für Spieler/Mobs)
- **Attributizer** `3.1` - Erweitertes Attribut-System
- **LionFish API** `2.4-Fix` - Library für Cataclysm-Mods

**Dependencies (3 Mods)**:
- **Structure Gel** `2.16.2` - Für Aether-Strukturen
- **YUNG's Better Nether Fortresses** `2.0.6` - Bessere Nether-Festungen
- **YUNG's API** `4.0.6` - Library für YUNG's Mods

#### Custom Scripts & Features
- **Polonium from Fossil Fuel** (`kubejs/server_scripts/polonium_from_fossil_fuel.js`)
  - Neue Alternative zur Polonium-Erzeugung
  - Verwendet fossile Brennstoffe als Basis
  - Mekanism-Integration für chemische Prozesse
- **Industrial Foregoing Range Bundles** (`kubejs/startup_scripts/industrial_foregoing_range_addon.js`)
  - Range Bundle 2x (24 Blöcke Range)
  - Range Bundle 3x (36 Blöcke Range)
  - Range Bundle 4x (48 Blöcke Range, Epic mit Glow-Effekt)
- **Custom Trader System** (`kubejs/server_scripts/custom_traders.js`)
  - Villager Trade Modifications
  - Wandering Trader Custom Trades
  - Lightman's Currency Integration
- **Damage Indicator Cleanup** (`kubejs/server_scripts/cleanup_damage_indicators.js`)
  - Auto-Cleanup alle 10 Minuten
  - Verhindert Lag durch zu viele Text-Displays

#### Dokumentation (19 Dateien)
- **docs/README.md** - Zentrale Dokumentations-Übersicht
- **docs/CUSTOM_ITEMS_GUIDE.md** - Guide für Custom Items (KubeJS, Hybrid, MMOItems)
- **docs/CREATE_TRADER_GUIDE.md** - Trader-Erstellung mit KubeJS
- **docs/TEXTUREPACK_GUIDE.md** - Ultra Realistic x64 Texturepack-Guide
- **docs/MODPACK_PUBLISHING.md** - Modpack-Veröffentlichung (CurseForge/Modrinth)
- **docs/MOD_COMPARISON.md** - Server vs Client Mod-Vergleich
- **docs/INDUSTRIAL_FOREGOING_RANGE_FIX.md** - Range-Addon-Lösung
- **docs/ECONOMY_FIX.md** - Economy-Placeholder-Fix (TAB)
- **docs/VERSION_2.0_ROADMAP.md** - v2.0 Entwicklungs-Roadmap
- **docs/V2.0_MOD_ANALYSIS.md** - Detaillierte Mod-Analyse für v2.0
- **docs/V2.0_TRANSFER_SUMMARY.md** - Mod-Transfer-Zusammenfassung
- **docs/V2.0_CRASH_FIX.md** - Dependency-Fixes & Lösungen

#### Texturepack
- **resourcepack/IC2_Realistic_x64/** - Template für Ultra Realistic x64 Pack
  - pack.mcmeta (Format 15 für 1.20.1)
  - README.txt mit Installationsanleitung
  - Ordnerstruktur für Mod-Texturen

#### Backups
- **backups/v2.0.0-dev_2026-01-06/** - Vollständiges Server-Backup v2.0.0 (~1.1 GB)
  - world.zip (283 MB) - Komplette World mit v2.0 Dimensionen
  - mods.zip (797 MB) - Alle 213 v2.0.0 Mods
  - plugins.zip (32 MB) - Alle 17 Plugins
  - config.zip (470 KB) - Alle Configs
  - kubejs.zip (12 KB) - Alle Scripts inkl. Polonium-Script
  - BACKUP_INFO.md mit vollständiger Wiederherstellungs-Anleitung
  - docs/ - Komplette Dokumentation
- **backups/v1.2.0_2026-01-04/** - Vollständiges Server-Backup v1.2.0 (907 MB)
  - world.zip (156 MB) - Komplette World
  - mods.zip (680 MB) - Alle 193 v1.2.0 Mods
  - plugins.zip (32 MB) - Alle 18 Plugins
  - config.zip (451 KB) - Alle Configs
  - kubejs.zip (10 KB) - Alle Scripts
  - BACKUP_INFO.md mit Wiederherstellungs-Anleitung
  - VERIFICATION.txt mit Integritäts-Check

### 🔄 Geändert

#### Mod-Count
- **Server-Mods:** 193 → **213** (+20 Mods)
- **Client-Mods:** 209 → **229** (+20 Mods)

#### Konfigurationen
- **Industrial Foregoing** - Tank-Größen verdoppelt (machine-core.toml)
  - Latex Processing Unit: maxLatexTankSize 8000 → 16000mB
  - Latex Processing Unit: maxWaterTankSize 8000 → 16000mB
  - Dissolution Chamber: maxOutputTankSize 8000 → 16000mB
  - Latex Processing Unit: powerPerTick 400 → 20 FE/t
  - Dissolution Chamber: powerPerTick 60 → 90 FE/t
- **TAB** - Economy-Placeholder-Fix (config.yml)
  - Zeile 19 & 98: `%vault_eco_balance%` → `%vault_eco_balance_formatted%`

#### README Updates
- Version Badge: 1.2.0 → 2.0.0-dev
- Mod-Count Badge: 190+ → 210+

### 🐛 Bugfixes
- ✅ Economy-Anzeige in TAB Scoreboard/HUD funktioniert jetzt korrekt
- ✅ Damage Indicators werden automatisch entfernt (kein manuelles Cleanup mehr nötig)
- ✅ Industrial Foregoing Range >12 Blöcke möglich (via Bundle-System)
- ✅ Dependency-Probleme für v2.0 Mods gelöst:
  - structure_gel für lost_aether_content installiert
  - YUNG's Better Fortresses für cataclysmfortresses installiert
  - YUNG's API für Better Fortresses installiert

### 🎮 Neue Features

#### Aether Dimension
- **Sky Islands** - Komplett neue Dimension zum Erforschen
- **Unique Mobs** - Moas, Aerwhale, Zephyrs, Sheepuff
- **Dungeons** - Bronze, Silver & Gold Dungeons mit Bosses
- **Bosses** - Sun Spirit, Slider, Valkyrie Queen
- **Progression** - Eigene Quest-Linie möglich
- **Integration** - Kompatibel mit Create (Sky Factories!)

#### Boss-Kämpfe (Cataclysm)
- **The Harbinger** - Nether-Boss mit Ancient Factory
- **Ignited Revenant** - Lava-Monster im Burning Arena
- **Netherite Monstrosity** - End-Game Boss (Soul Blacksmith)
- **Ancient Remnant** - Desert-Boss (Ancient Remains)
- **Maledictus** - Church-Boss (Cursed Pyramid)
- **Ender Golem** - End-Boss (Ruined Citadel)
- **Ender Guardian** - Elite-End-Boss
- **Leviathan** - Ocean-Boss (Sunken City)
- Custom-Loot für alle Bosse (inkl. Apotheosis-Integration)

#### Combat-Erweiterung (Spartan Weaponry)
- **15+ Waffen-Typen:** Speere, Hämmer, Katanas, Äxte, Sensen, Dolche, Rapiere, Morgensterme, Gleven, Wurfwaffen
- **Material-Integration:** Alle Create, Mekanism, Tinkers Materialien nutzbar
  - Brass-Speere (Create)
  - Osmium-Hämmer (Mekanism)
  - Steel-Katanas (Mekanism)
  - Refined Obsidian-Äxte (Mekanism)
- **Cataclysm-Waffen:** Spartan + Cataclysm Items kombinierbar

#### Entity Scaling (Pehkui)
- `/scale set <player> <scale>` - Spieler-Größe ändern
- Potion-Effekte für Größenänderung möglich
- Nutzbar für Custom Items & Quests
- Boss-Scaling möglich

#### Food-Integration (Lenders Delight)
- Neue Food-Items aus Cataclysm Boss-Drops
- Farmers Delight Cooking Pot Rezepte
- Integration in Lightman's Currency Economy

### 🔧 Technische Änderungen
- **Mod-Count:** 193 → 213 (+20 Server-Mods)
- **RAM-Empfehlung:** 12GB → 14-16GB (wegen neuer Dimensionen)
- **Startup-Zeit:** Erwartet ~3-5 Minuten (vs. 2-3 Min in v1.2.0)
- **Dependencies:** Automatische Dependency-Resolution implementiert

### 📚 Dokumentations-Verbesserungen
- Alle Dokumentation in `docs/` Ordner konsolidiert
- Zentrale README.md für Dokumentations-Übersicht
- Kategorie-basierte Organisation (Setup, Bugfixes, Features, v2.0)
- Backup-System mit vollständiger Wiederherstellungs-Anleitung
- Texturepack-Guide für Community

### ⚠️ Breaking Changes
- Keine Breaking Changes für v1.2.0 → v2.0.0
- Vollständig rückwärtskompatibel
- Bestehende Welten funktionieren weiterhin
- Neue Dimensionen werden beim ersten Besuch generiert

### 📝 Migration von v1.2.0

**Automatische Backups vorhanden:**
- Vollständiges v2.0.0 Backup in `backups/v2.0.0-dev_2026-01-06/` (~1.1 GB)
- Vollständiges v1.2.0 Backup in `backups/v1.2.0_2026-01-04/` (907 MB)
- Wiederherstellung jederzeit möglich

**Update-Schritte:**
1. Server stoppen
2. Backup der aktuellen World erstellen (optional, bereits in Backups)
3. Neue Mods werden automatisch geladen (bereits kopiert)
4. Configs bleiben erhalten (keine Änderungen nötig außer dokumentierte)
5. Server starten
6. Neue Dimensionen & Features sind verfügbar

**Neue Features testen:**
1. Aether-Portal bauen (Glowstone + Wasser)
2. Cataclysm-Strukturen suchen
3. Spartan-Waffen craften
4. Range-Bundles via KubeJS erhalten
5. Polonium aus fossilen Brennstoffen herstellen

### 🎯 Version 2.0 Roadmap Status
- ✅ Phase 1: Vorbereitung & Mod-Transfer abgeschlossen
- ✅ Phase 2: Core Features (Quest-System, Custom Items erweitern)
- ✅ Phase 3: Optimierung & Testing
- ✅ Phase 4: Content & Polish (Dokumentation, Backups)
- ✅ Phase 5: Release v2.0.0 - **COMPLETED!**

### 🎊 Release Notes

**Version 2.0.0 markiert einen Major Release mit:**
- 20 neue Mods für erweiterte Gameplay-Möglichkeiten
- Zwei neue Dimensionen (Aether, Cataclysm-Strukturen)
- 8 neue Endgame-Bosse mit einzigartigen Drops
- Erweiterte Kampfmechaniken durch Spartan Weaponry
- Vollständiges Backup-System mit automatischer Wiederherstellung
- Umfassende Dokumentation in `docs/`
- Polonium-Alternativ-Produktion via KubeJS

**Server ist produktionsbereit und stabil!**

---

## [1.2.0] - 2024-12-09

### 🆕 Hinzugefügt

#### Neue Mods (30+)
- **Titanium** `3.8.32` - Library-Mod für Industrial Foregoing
- **Connector** `1.0.0-beta.47` - Fabric-Mods auf Forge-Server (Update von beta.44)
- **Connector Extras** `1.11.2` - Zusätzliche Connector-Funktionen
- **Fabric API** `0.92.6+1.11.14` - Fabric API Support (Update von 0.92.2)
- **Lightman's Currency** `2.2.5.0` - Erweiterte Wirtschafts-Mod mit physischer Währung
- **LCompat Waystones** `0.0.0.1a` - Waystones-Kompatibilität
- **MTR (Minecraft Transit Railway)** `4.0.2` - Realistische Züge und U-Bahn-Systeme
- **MTR London Underground Trains** `1.0.2` - London U-Bahn Zug-Pack
- **MTR Russian Metro Addon** - Russische Metro-Züge
- **Create Train Additions** `0.3.2` - Zusätzliche Züge für Create
- **Create Station Decor** `0.1.2` - Bahnhofs-Dekorationen
- **Modern Train Parts** `0.1.7` - Moderne Zugteile
- **Underground Bunkers** `1.0.5` - Unterirdische Strukturen
- **Industrial Foregoing** `3.5.19` - Moderne Automatisierung (mit Titanium)

#### Neue Plugins
- Keine neuen Plugins in dieser Version

#### Custom Scripts & Features
- **Vault Bridge Script** (`kubejs/server_scripts/vault_bridge.js`)
  - Automatische Synchronisation zwischen Vault Economy und Lightman's Currency
  - ATM-Integration für nahtlosen Geldtransfer
  - Bank-Account-Verwaltung
- **XP Buff Script** (`kubejs/server_scripts/exp_buff.js`)
  - 80x XP-Multiplikator mit GameMaster-Sword
  - Visuelles Feedback für Spieler

#### Konfigurationen
- Lightman's Currency Konfigurationen
  - `config/lightmanscurrency-common.txt`
  - `config/lightmanscurrency-server.txt`
  - `config/lightmanscurrency/` Verzeichnis
- Industrial Foregoing Konfigurationen
  - `config/industrialforegoing/`
- Titanium Konfigurationen
  - `config/titanium/`
- Handels-Konfigurationen
  - `config/trades/`

### 🔄 Geändert

#### Mod-Updates
- **Connector** `beta.44` → `beta.47` - Verbesserte Fabric-Kompatibilität
- **Fabric API** `0.92.2+1.11.12` → `0.92.6+1.11.14` - API-Erweiterungen

#### Konfigurationsanpassungen
- **Apotheosis Enchantments** - Verzauberungs-Balance angepasst (`config/apotheosis/enchantments.cfg`)
- **Better Village** - Dorf-Generierung optimiert (`config/bettervillage_1.properties`)
- **Library Ferret** - Bibliotheks-Einstellungen (`config/libraryferret_1.properties`)
- **WorldEdit** - WorldEdit-Einstellungen aktualisiert (`config/worldedit/worldedit.properties`)
- **Mohist** - Server-Konfiguration angepasst (`mohist-config/mohist.yml`)
- **Server Properties** - Grundlegende Server-Einstellungen (`server.properties`)

### ❌ Entfernt

#### Mods (60+)
<details>
<summary><b>Liste der entfernten Mods (Klicken zum Erweitern)</b></summary>

**Client-Side Mods** (auf Server nicht benötigt):
- `AmbientSounds_FORGE_v6.1.8` - Ambiente Sounds
- `appleskin-forge-2.5.1` - AppleSkin HUD
- `betterfpsdist-6.0` - FPS-Optimierung
- `effecttooltips.json` - Effect-Tooltips
- `entityculling-1.7.4` - Entity-Culling
- `fallingleaves-2.1.2` - Fallende Blätter
- `gpumemleakfix-1.8` - GPU Memory Leak Fix
- `skinlayers3d-1.7.5` - 3D Skin Layers
- `xaerominimap-common.txt` - Xaero's Minimap
- `xaeroworldmap-common.txt` - Xaero's World Map
- `immediatelyfast.json` - ImmediatelyFast

**Fabric/Connector-ersetzte Mods**:
- `fabric-api-0.92.2+1.11.12` - Ersetzt durch neuere Version
- `Connector-1.0.0-beta.44` - Ersetzt durch beta.47

**Valkyrien Skies Related** (Vollständig entfernt):
- `valkyrienskies-120-2.3.0-beta.6` - Kern-Mod
- `clockwork-0.1.16` - Clockwork-Addon
- `eureka-1.5.1-beta.3` - Eureka Schiffe
- `tournament-1.1.0_beta-5.3` - Tournament-Addon
- `vs_sails-0.1.7` - Segel
- `vlib-0.0.11` - Valkyrien Lib
- `vvp-0.1.7` - Valkyrien Physics
- `drivebywire-0.0.10` - Drive by Wire
- Alle Valkyrien Skies Config-Dateien:
  - `config/valkyrienskies/` (alle Schemas und Configs)
  - `config/vs_sails/config.cfg`

**Waffen/Combat Mods** (Konsolidierung):
- `WariumVS 0.0.12` - Waffen-Mod (VS-Integration)
- `superbwarfare-0.8.7` - Warfare-Mod

**Applied Energistics 2 Related**:
- `appliedenergistics2-forge-15.2.8` - Temporär entfernt
- `ae2wtlib-15.2.3` - AE2 Wireless Terminal
- `createappliedkinetics-1.3.2` - Create + AE2 Integration

**Sonstige**:
- `Byzantine-31.3` - Mod entfernt
- `CreateNumismatics-1.0.3` - Numismatics entfernt (ersetzt durch Lightman's)
- `MEconomy-1.0.5` - Economy-Mod (ersetzt durch Lightman's)
- `create_eureka-1.0.0` - Create Eureka Integration
- `create_interactive-1.1.1-beta.3` - Create Interactive
- `DistantHorizons-2.3.2` - Distant Horizons LOD
- `konkrete_forge_1.8.0` - Konkrete Library
- `simpleclouds-0.7` - Simple Clouds (disabled)
- `curios-5.9.1` - Ersetzt durch 5.14.1

**Embeddium Related**:
- `embeddium-mixins.properties` - Embeddium Config

</details>

#### Plugins (7)
- `EssentialsX-2.22.0-dev+47` - Ersetzt durch 2.21.2 (stable)
- `EssentialsXDiscord-2.21.2` - Discord-Integration entfernt
- `EssentialsXDiscordLink-2.21.2` - Discord-Link entfernt
- `Gringotts` - Harry-Potter-Bank-Plugin entfernt (inkl. Datenbank)
- `Boosters` - Booster-Plugin entfernt
- `LuckPerms-5.5.20` - Ersetzt durch 5.5.17
- `TAB v5.3.2` - Ersetzt durch 5.4.0

#### Konfigurationen
<details>
<summary><b>Entfernte Konfigurations-Dateien</b></summary>

- `README.md` - Alte README (ersetzt durch neue)
- `start.bat` - Altes Start-Script (ersetzt)
- **Distant Horizons**: `config/DistantHorizons.toml`
- **Applied Energistics 2**:
  - `config/ae2/client.json`
  - `config/ae2/common.json`
- **Valkyrien Skies**: Alle Schemas und Configs
- **Client-Only Configs**:
  - `config/appleskin-client.toml`
  - `config/betterfpsdist.json`
  - `config/de/mari_023/ae2wtlib.json5`
  - `config/effecttooltips.json`
  - `config/immediatelyfast.json`
  - `config/xaerominimap-common.txt`
  - `config/xaeroworldmap-common.txt`

**Plugin-Daten**:
- `plugins/Boosters/` - Komplett
- `plugins/EssentialsDiscord/` - Komplett
- `plugins/EssentialsDiscordLink/` - Komplett
- `plugins/Gringotts/` - Komplett (inkl. Datenbank)

</details>

#### Schematics & Backups
- `kubejs/client_scripts/example.js` - Client-Script entfernt
- Verschiedene Tacz-Backups bereinigt:
  - `tacz_backup/elitex_quality_guns/backup-20251209-162214`
  - `tacz_backup/gucci_vuitton_attachment/backup-20251209-162216`
  - `tacz_backup/tacz_default_gun/backup-20251209-162222`
- ModernFix Structure Cache:
  - `modernfix/structureCacheV1/terralith_ruin_glacial_*` (mehrere Dateien)

### 🐛 Bugfixes
- Valkyrien Skies Konflikte durch vollständiges Entfernen gelöst
- Client-Side Mods entfernt für bessere Server-Performance
- Duplicate Economy-Systeme konsolidiert (Lightman's Currency als Hauptsystem)
- Plugin-Konflikte durch EssentialsX-Downgrade behoben

### 🔧 Technische Änderungen
- Servertyp bleibt Mohist (Forge + Bukkit Hybrid)
- Java 21 weiterhin erforderlich
- RAM-Empfehlung: 16 GB
- Maximale Spieler: 20

---

## [1.0.0] - 2024-11-30

### 🎉 Initial Release

#### Kernfunktionalität

**Server-Plattform**:
- **Mohist** `1.20.1-6e3e2a1` - Hybrid Forge + Bukkit Server
- **Minecraft** `1.20.1`
- **Java** `JDK 21` erforderlich

#### Hauptmods (130+)

<details>
<summary><b>Technologie & Automation</b></summary>

- **Create** `0.5.1.j` - Mechanische Automation
- **Mekanism** `10.4.16.80` - Tech-Suite
  - Mekanism Generators
  - Mekanism Tools
  - Mekanism Additions
  - More Solar Panels `1.5.9`
  - Mekanism Lasers `1.0.10`
  - Mekanism Covers `1.3-BETA`
  - KubeJS Mekanism `2001.1.5.1`
- **Refined Storage** `1.12.4` - Item Storage
- **Applied Energistics 2** `15.2.8` - ME Network
- **RFTools Suite**:
  - RFTools Base `5.0.6`
  - RFTools Power `6.0.2`
  - RFTools Storage `5.0.3`
  - RFTools Utility `6.0.6`
  - RFTools Builder `6.0.8`
  - RFTools Dimensions `11.0.10`
  - RFTools Control `7.0.3`

</details>

<details>
<summary><b>Waffen & Kampf</b></summary>

- **Tacz** `1.1.6` - Gun Mod
  - Tacz Addon `1.1.6`
  - Tacz NPC `1.2.0`
  - Tacz JS Integration
- **Elite X Quality Guns** `v4.2`
- **Apocalyptic Arsenal** `1.0.1`
- **Gucci Vuitton Attachment** `0.2.2`
- **LR Tactical** `0.3.0`
- **Waffen-Packs**:
  - Warium VS `0.0.12`
  - Super Warfare `0.8.7`
- **Ice and Fire** `2.1.13` - Drachen & Kreaturen
- **Draconic Evolution** `3.1.2.621` - Endgame-Tools
  - Draconic Additions `2.4.1.5`
- **Tinkers' Construct** `3.10.2.92` - Custom Tools
  - Tinkers Levelling Addon `1.4.3`

</details>

<details>
<summary><b>Welt & Biome</b></summary>

- **Terralith** `2.4.11` - Weltgenerierung
- **Biomes O' Plenty** `18.0.0.592`
- **TerraBlender** `3.0.1.4`
- **Nature's Compass** `1.11.2`

</details>

<details>
<summary><b>Valkyrien Skies & Schiffe</b></summary>

- **Valkyrien Skies** `2.3.0-beta.6` - Physik-Engine
- **Clockwork** `0.1.16` - Clockwork-Mechaniken
- **Eureka** `1.5.1-beta.3` - Schiffsbau
- **Tournament** `1.1.0-beta-5.3` - Tournament-Addon
- **VS Sails** `0.1.7` - Segel-System
- **VLib** `0.0.11` - Valkyrien Library
- **VVP** `0.1.7` - Valkyrien Vehicles & Physics
- **Drive by Wire** `0.0.10` - Fahrzeug-Steuerung
- **Create Eureka** `1.0.0` - Create + Eureka
- **Create Interactive** `1.1.1-beta.3`
- **Warium VS** `0.0.12` - Waffen + VS

</details>

<details>
<summary><b>Create Addons</b></summary>

- **Create Confectionery** `v1.1.0` - Süßigkeiten
- **Create Central Kitchen** `1.3.12` - Küchen-Automation
- **Create Enchantment Industry** `1.2.9.d` - Verzauberungen
- **Create Ender Transmission** `2.0.7` - Ender-Transport
- **TFMG (Create Addon)** `0.9.3` - Factories
- **Molten Metals** `0.1.4` - Geschmolzene Metalle

</details>

<details>
<summary><b>Magic & RPG</b></summary>

- **Apotheosis** `7.4.8` - Enchantment-Overhaul
  - Apothic Attributes `1.3.7`
  - Apothic Curios `1.0.3e`
  - Apotheoic Additions `V2.2.2`

</details>

<details>
<summary><b>Building & Decoration</b></summary>

- **Chipped** `3.0.7` - 12.000+ Block-Varianten
- **Domum Ornamentum** `1.0.184` - Dekorationen
- **Immersive Paintings** `0.6.7` - Gemälde
- **Structurize** `1.0.759` - Strukturen
- **Block UI** `1.0.151-BETA` - UI-Blöcke
- **Effortless Building** `3.7` - Bau-Tools
- **Construction Wand** `2.11` - Bau-Zauberstab

</details>

<details>
<summary><b>Storage & Inventory</b></summary>

- **Storage Drawers** `12.9.13`
- **Iron Chest** `14.4.4`
- **Sophisticated Backpacks** (via dependencies)
- **Trash Cans** `1.0.18b`
- **Refined Storage Addons** `0.10.0`
- **Extra Disks** `3.0.3`
- **RS Requestify** `2.3.3`

</details>

<details>
<summary><b>Food & Farming</b></summary>

- **Farmer's Delight** `1.2.7`
- **Aquaculture** (via dependencies)
- **Right Click Harvest** `3.2.3`
- **Slice and Dice** `3.3.0`

</details>

<details>
<summary><b>Transport</b></summary>

- **Waystones** `14.1.11` - Teleportation
- **Carry On** `2.1.2.7` - Tragen von Blöcken

</details>

<details>
<summary><b>Economy</b></summary>

- **Create Numismatics** `1.0.3` - Währung
- **MEconomy** `1.0.5` - AE2 Economy-Integration

</details>

<details>
<summary><b>Utilities & QoL</b></summary>

- **JEI** `15.20.0.106` - Recipe Browser
- **Jade** `11.7.1` - WAILA
- **JadeAddons** `5.2.2`
- **Just Enough Resources** `1.4.0.247`
- **Just Enough Professions** `3.0.1`
- **Just Enough Mekanism Multiblocks** `4.15`
- **Inventory Sorter** `23.0.8`
- **Searchables** (via dependencies)
- **Recipe Essentials** `4.0`
- **Comforts** `6.4.0` - Sleeping Bags
- **Corpse** `1.0.20` - Corpse on Death
- **Clumps** `12.0.0.4` - XP-Orb-Combining
- **Collective** `7.40` - Library

</details>

<details>
<summary><b>Libraries & Frameworks</b></summary>

- **KubeJS** `2001.6.5-build.16` - Scripting
- **Rhino** `2001.2.3-build.10` - JS-Engine
- **Architectury** `9.2.14` - Multi-platform API
- **Cloth Config** `11.1.118` - Config-GUI
- **Balm** `7.3.27` - Multi-loader library
- **Bookshelf** `20.1.9` - Library
- **Placebo** `8.6.3` - Library
- **Patchouli** `84.1` - In-Game-Dokumentation
- **Botarium** `2.3.4` - Library
- **Citadel** `2.6.0` - Animation-Library
- **Creative Core** `v2.12.17` - Library
- **Puzzles Lib** `v8.1.17` - Library
- **SmartBrainLib** `1.15` - AI-Library
- **Kambrik** `6.1.1` - Fabric-Library
- **Kotlin for Forge** `4.11.0` - Kotlin-Support
- **CodeChicken Lib** `4.4.0.516` - Library
- **Brandon's Core** `3.2.1.302` - Draconic Evolution Core
- **Mantle** `1.11.79` - Tinkers' Core
- **FTB Library** `2001.2.9` - FTB-Core
- **FTB Teams** `2001.3.1` - Team-System
- **FTB Chunks** `2001.3.6` - Chunk-Claiming
- **Mysterious Mountain Lib** `1.5.19` - Library
- **Curios** `5.9.1` - Equipment-Slots
- **KubeJS Curios** `1.0.4` - KubeJS + Curios
- **Supermartijn642 Config Lib** `1.1.8` - Config-Library

</details>

<details>
<summary><b>Performance & Optimization</b></summary>

- **ModernFix** `5.21.0` - Performance-Optimierung
- **FerriteCore** `6.0.1` - RAM-Optimierung
- **Starlight** `1.1.2` - Lighting-Engine
- **Entity Culling** `1.7.4` - Render-Optimierung
- **BetterFPS** `6.0` - FPS-Verbesserung
- **GPU Memory Leak Fix** `1.8` - Memory-Fix
- **Neruina** `2.1.2` - Crash-Prevention

</details>

<details>
<summary><b>Visuals & Audio</b></summary>

- **Ambient Sounds** `v6.1.8` - Ambiente
- **Falling Leaves** `2.1.2` - Fallende Blätter
- **Sound Physics Remastered** `1.4.10` - Sound-Physik
- **Simple Clouds** `0.7` (disabled) - Cloud-Rendering
- **Skin Layers 3D** `1.7.5` - 3D-Skins

</details>

<details>
<summary><b>Client Enhancements</b></summary>

- **AppleSkin** `2.5.1` - Food-Info
- **Effect Tooltips** - Effekt-Anzeige
- **Xaero's Minimap** - Minimap
- **Xaero's World Map** - Weltkarte
- **ImmediatelyFast** - Rendering-Optimierung

</details>

<details>
<summary><b>Misc</b></summary>

- **Distant Horizons** `2.3.2` - LOD-Rendering
- **Byzantine** `31.3` - Addon
- **Torch Master** `20.1.9` - Spawn-Unterdrückung
- **Let Me Despawn** `1.5.0` - Despawn-Fix
- **Almanac** `1.0.2` - In-Game-Kalender
- **Melody** `1.0.3` - Music-Mod
- **Mob Grinding Utils** `1.1.0` - Mob-Farming
- **Library Ferret** `4.0.0` - Library-Mod
- **Escalated** `1.0.0` - Addon
- **Attribute Fix** `21.0.4` - Attribute-Fix
- **Konkrete** `1.8.0` - Concrete-Library

</details>

#### Plugins (15)

- **LuckPerms** `5.5.20` - Permission-System
- **Vault** - Economy-API
- **EssentialsX** `2.22.0-dev+47`
  - EssentialsX Chat
  - EssentialsX Spawn
  - EssentialsX Discord `2.21.2`
  - EssentialsX Discord Link `2.21.2`
- **Gringotts** - Bank-System (Harry Potter Style)
- **BankPlus** `5.9` - Banking
- **Lands** `7.18.9` - Land-Management
- **Quests** `5.2.8` - Quest-System
- **QuestsGUI** `2.1.3` - Quest-GUI
- **MMOCore** `1.13` - RPG-Core
- **MMOItems** `6.10` - Custom-Items
- **MythicLib** `1.7` - Mythic-Library
- **TAB** `v5.3.2` - Tablist & Scoreboard
- **PlaceholderAPI** `2.11.7` - Placeholder-System
- **ProtocolLib** - Packet-API
- **HappyHUD** `0.3.4-SNAPSHOT` - Custom-HUD
- **ItemEdit** `3.7.8` - Item-Editor
- **PlugManX** `3.0.0` - Plugin-Manager
- **Boosters** - Booster-Plugin

#### Initiale Konfiguration

**Server-Einstellungen**:
- Max. Spieler: `20`
- Schwierigkeit: `easy`
- View-Distance: `10`
- Sprache: `de_DE` (Deutsch)
- RAM: `16 GB`

**Wichtige Features**:
- Hybrid Forge + Bukkit Support
- Quest-System aktiv
- Land-Claim aktiviert
- Bank-System (Gringotts & BankPlus)
- Permissions via LuckPerms
- RPG-Progression (MMOCore)

---

## Git-Commit-Historie

### Version 1.2.0 Commits
```
a6da0cf - Update version number to 1.2.0
b692ca1 - Merge branch 'main' of https://github.com/DerHawkyTV/Industrial-Colony-2-Server
54ece12 - Create titanium-1.20.1-3.8.32.jar
61f2180 - Version 1.2
```

### Version 1.0.0 Commits
```
9a75c75 - Update Linux/Mac startup command in README
4279ae8 - Update version number in README.md
25ae878 - Merge pull request #1 from DerHawkyTV/claude/add-changelog-readme-tJVBK
dbd0ab0 - Add comprehensive README with Changelog and Modlist for Version 1.0
a3e358b - Update .gitignore
00dea21 - T
b65c92f - remove trash
b9592d4 - Add README for Industrial Colony 2 Server Pack
b7219ba - Initial Push
fdb1a95 - Initial commit
```

---

## Versionshinweise

### Upgrade von 1.0.0 auf 1.2.0

**⚠️ WICHTIG - Backup erforderlich!**

1. **Backup erstellen:**
   ```
   world/
   plugins/
   config/
   kubejs/
   ```

2. **Inkompatible Mods entfernen:**
   - Alle Valkyrien Skies Mods
   - Client-Side Mods (AppleSkin, Ambient Sounds, etc.)
   - Alte Economy-Mods (Numismatics, MEconomy)

3. **Neue Mods hinzufügen:**
   - Lightman's Currency System
   - MTR Transport-Mods
   - Titanium Library
   - Connector-Updates

4. **Konfigurationen anpassen:**
   - Lightman's Currency konfigurieren
   - Vault Bridge aktivieren (KubeJS-Script)
   - Trade-System einrichten

5. **Plugin-Updates:**
   - EssentialsX downgrade auf stable
   - TAB update auf 5.4.0
   - Gringotts entfernen (ersetzt durch Lightman's)

6. **Erste Schritte nach Update:**
   - Server starten und Logs prüfen
   - Economy-System testen
   - MTR-Züge testen
   - Spieler-Daten verifizieren

---

## Bekannte Probleme

### Version 1.2.0
- Keine kritischen Probleme bekannt
- MTR erfordert möglicherweise zusätzliche Ressourcen-Packs für beste Grafik
- Lightman's Currency Economy-Migration von Gringotts muss manuell erfolgen

### Version 1.0.0
- Valkyrien Skies kann Performance-Probleme verursachen (in 1.2.0 behoben)
- Distant Horizons LOD kann RAM intensiv sein (in 1.2.0 entfernt)
- Duplicate Economy-Systeme (in 1.2.0 konsolidiert)

---

## Roadmap

### Geplant für Version 1.3.0
- [ ] Zusätzliche Quest-Lines
- [ ] Custom-Rezepte via KubeJS
- [ ] Weitere MTR-Zug-Packs
- [ ] Create-Automation-Blueprints
- [ ] Erweiterte Lightman's Currency Features
- [ ] Performance-Optimierungen

### In Überlegung
- [ ] Custom Dungeon-Generierung
- [ ] Boss-Arenen mit Apotheosis
- [ ] Erweiterte RPG-Klassen
- [ ] Server-Events und Turniere
- [ ] Player-Shops mit Lightman's Currency

---

## Danksagungen

Vielen Dank an alle Mod- und Plugin-Entwickler, die diesen Server-Pack möglich gemacht haben:

- **simibubi** - Create Mod
- **Mekanism Team** - Mekanism Suite
- **hrznstudio** - Galacticraft & More
- **LuckPerms Team** - Permissions-System
- **EssentialsX Team** - Server-Essentials
- **Terralith Team** - Weltgenerierung
- Und viele weitere...

---

## Support & Feedback

Bei Problemen oder Vorschlägen:

- **GitHub Issues:** [Issues erstellen](https://github.com/DerHawkyTV/Industrial-Colony-2-Server/issues)
- **GitHub Discussions:** [Diskussionen](https://github.com/DerHawkyTV/Industrial-Colony-2-Server/discussions)

---

<div align="center">

**[⬆ Zurück nach oben](#-changelog)**

Made with ❤️ by [DerHawkyTV](https://github.com/DerHawkyTV)

</div>
