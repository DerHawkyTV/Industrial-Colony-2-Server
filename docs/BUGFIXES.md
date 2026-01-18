# 🐛 Bugfixes & Troubleshooting

**🇩🇪 [Deutsch](#deutsch) | 🇬🇧 [English](#english)**

**Industrial Colony 2 Server** | Version: 2.3.0 | Minecraft 1.20.1

---

<a name="deutsch"></a>
## 🇩🇪 Deutsch

### 📊 Übersicht

| Version | Datum | Fixes | Status |
|---------|-------|-------|--------|
| **v2.3.0** | 2026-01-16 | Migration | ✅ Behoben |
| **v2.1.0** | 2026-01-09 | 4 | ✅ Behoben |
| **v2.0.0** | 2026-01-06 | 3 | ✅ Behoben |
| **v1.2.0** | 2026-01-02 | 5 | ✅ Behoben |

**Gesamt:** 12+ Bugs behoben

---

### 🔴 v2.1.0 - Kritische Fixes

#### 1. Client Creative Inventory Crash

**Problem:** Client crasht beim Öffnen des Creative Inventars
```
java.lang.NullPointerException: Registry Object not present: refinedcooking:kitchen_station
```

**Lösung:** `refinedcooking-4.0.0.jar` vom Client entfernen

**Status:** ✅ Behoben

---

#### 2. KubeJS Script-Fehler

**Fehler:**
- `MoreJSEvents` nicht definiert
- Unbekannter Event `EntityEvents.pickedUpItem`
- Mekanism Rezept-Syntax falsch

**Lösung:** Scripts aktualisiert

**Ergebnis:** `9/9 Scripts geladen - 0 Errors, 0 Warnings` ✅

---

#### 3. BotanyPots fehlte

**Problem:** Mod nur auf Client, nicht auf Server

**Lösung:** Mod zum Server hinzugefügt

**Status:** ✅ Behoben

---

### 🟡 v2.0.0 - Major Release Fixes

| Fix | Problem | Lösung |
|-----|---------|--------|
| Dependencies | Fehlende APIs | Structure Gel, YUNG's API hinzugefügt |
| Custom Scripts | Neue Mods | Polonium, Range Bundle Scripts |
| Texturepack | Fehlend | Template erstellt |

---

### 🟢 v1.2.0 - Initial Fixes

| Fix | Problem | Lösung |
|-----|---------|--------|
| MythicLib | Damage Indicator Crash | Deaktiviert in Config |
| PlaceholderAPI | Economy nicht angezeigt | Vault Expansion installiert |
| Cleanup Script | Lag durch Text-Displays | Auto-Cleanup hinzugefügt |

---

### 📊 Aktueller Status

```
✅ Alle kritischen Bugs behoben
✅ KubeJS: 0 Errors
✅ Mod-Sync: 100%
✅ Scripts: 9/9 geladen
```

---

<a name="english"></a>
## 🇬🇧 English

### 📊 Overview

| Version | Date | Fixes | Status |
|---------|------|-------|--------|
| **v2.3.0** | 2026-01-16 | Migration | ✅ Fixed |
| **v2.1.0** | 2026-01-09 | 4 | ✅ Fixed |
| **v2.0.0** | 2026-01-06 | 3 | ✅ Fixed |
| **v1.2.0** | 2026-01-02 | 5 | ✅ Fixed |

**Total:** 12+ Bugs fixed

---

### 🔴 v2.1.0 - Critical Fixes

#### 1. Client Creative Inventory Crash

**Problem:** Client crashes when opening Creative inventory
```
java.lang.NullPointerException: Registry Object not present: refinedcooking:kitchen_station
```

**Solution:** Remove `refinedcooking-4.0.0.jar` from client

**Status:** ✅ Fixed

---

#### 2. KubeJS Script Errors

**Errors:**
- `MoreJSEvents` not defined
- Unknown event `EntityEvents.pickedUpItem`
- Mekanism recipe syntax wrong

**Solution:** Scripts updated

**Result:** `9/9 Scripts loaded - 0 Errors, 0 Warnings` ✅

---

#### 3. BotanyPots Missing

**Problem:** Mod only on client, not server

**Solution:** Added mod to server

**Status:** ✅ Fixed

---

### 🟡 v2.0.0 - Major Release Fixes

| Fix | Problem | Solution |
|-----|---------|----------|
| Dependencies | Missing APIs | Added Structure Gel, YUNG's API |
| Custom Scripts | New mods | Polonium, Range Bundle Scripts |
| Texturepack | Missing | Created template |

---

### 🟢 v1.2.0 - Initial Fixes

| Fix | Problem | Solution |
|-----|---------|----------|
| MythicLib | Damage Indicator Crash | Disabled in config |
| PlaceholderAPI | Economy not showing | Installed Vault Expansion |
| Cleanup Script | Lag from Text-Displays | Added auto-cleanup |

---

### 📊 Current Status

```
✅ All critical bugs fixed
✅ KubeJS: 0 Errors
✅ Mod-Sync: 100%
✅ Scripts: 9/9 loaded
```

---

<div align="center">

**Bugfixes - Industrial Colony 2 Server**

Version 2.3.0 | All Critical Bugs Fixed ✅

[📋 README](../README.md) | [🔧 Config](CONFIG.md) | [🎮 Guides](GUIDES.md)

</div>
