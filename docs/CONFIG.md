# 🔧 Server Configuration / Server-Konfiguration

**🇩🇪 [Deutsch](#deutsch) | 🇬🇧 [English](#english)**

**Industrial Colony 2 Server** | Version: 2.3.0 | Minecraft 1.20.1

---

<a name="deutsch"></a>
## 🇩🇪 Deutsch

### 📋 Inhalt

1. [Ender IO Conduit Optimierung](#1-ender-io-conduits-de)
2. [Industrial Foregoing Range Fix](#2-range-fix-de)
3. [Economy-System](#3-economy-de)

---

<a name="1-ender-io-conduits-de"></a>
### 1. Ender IO Conduit Optimierung

**Status:** ✅ **4x Transfer-Raten aktiv**

#### ⚡ Energy Conduits

| Typ | Standard | Aktuell (4x) |
|-----|----------|--------------|
| Basic Energy | 5,120 FE/t | **20,480 FE/t** |
| Enhanced Energy | 20,480 FE/t | **81,920 FE/t** |
| Ender Energy | 81,920 FE/t | **327,680 FE/t** |

#### 💧 Fluid Conduits

| Typ | Standard | Aktuell (4x) |
|-----|----------|--------------|
| Pressurized Fluid | 100 mB/t | **400 mB/t** |
| Ender Fluid | 800 mB/t | **3,200 mB/t** |

#### 📦 Item Conduits

| Typ | Standard | Aktuell (4x) |
|-----|----------|--------------|
| Item Conduit | 4 items | **16 items** |
| Fast Item | 16 items | **64 items** |

**Konfiguration:** `world/datapacks/custom_conduits/`

---

<a name="2-range-fix-de"></a>
### 2. Industrial Foregoing Range Fix

**Lösung:** Mehrere Range-Addons gleichzeitig nutzen

| Anzahl (Tier 11) | Range |
|------------------|-------|
| 1x | +12 Blöcke |
| 2x | +24 Blöcke |
| 3x | +36 Blöcke |
| 5x | +60 Blöcke |

**Setup:**
1. Öffne Maschinen-GUI
2. Setze mehrere Range-Addons in Upgrade-Slots
3. Range addiert sich!

---

<a name="3-economy-de"></a>
### 3. Economy-System

**Drei Systeme:**
- **EssentialsX Economy** - Vault-Provider
- **Lightman's Currency** - In-Game Shops & ATMs
- **BankPlus** - Bank-System

#### Platzhalter

| Platzhalter | Ausgabe |
|-------------|---------|
| `%vault_eco_balance_formatted%` | `$1,234.56` ✅ |
| `%bankplus_balance%` | Bank-Guthaben |

#### Befehle

```bash
/balance              # Kontostand
/pay <spieler> <geld> # Überweisen
/eco give <name> 1000 # Admin: Geld geben
```

---

<a name="english"></a>
## 🇬🇧 English

### 📋 Contents

1. [Ender IO Conduit Optimization](#1-ender-io-conduits-en)
2. [Industrial Foregoing Range Fix](#2-range-fix-en)
3. [Economy System](#3-economy-en)

---

<a name="1-ender-io-conduits-en"></a>
### 1. Ender IO Conduit Optimization

**Status:** ✅ **4x Transfer Rates Active**

#### ⚡ Energy Conduits

| Type | Default | Current (4x) |
|------|---------|--------------|
| Basic Energy | 5,120 FE/t | **20,480 FE/t** |
| Enhanced Energy | 20,480 FE/t | **81,920 FE/t** |
| Ender Energy | 81,920 FE/t | **327,680 FE/t** |

#### 💧 Fluid Conduits

| Type | Default | Current (4x) |
|------|---------|--------------|
| Pressurized Fluid | 100 mB/t | **400 mB/t** |
| Ender Fluid | 800 mB/t | **3,200 mB/t** |

#### 📦 Item Conduits

| Type | Default | Current (4x) |
|------|---------|--------------|
| Item Conduit | 4 items | **16 items** |
| Fast Item | 16 items | **64 items** |

**Configuration:** `world/datapacks/custom_conduits/`

---

<a name="2-range-fix-en"></a>
### 2. Industrial Foregoing Range Fix

**Solution:** Use multiple Range Addons simultaneously

| Count (Tier 11) | Range |
|-----------------|-------|
| 1x | +12 blocks |
| 2x | +24 blocks |
| 3x | +36 blocks |
| 5x | +60 blocks |

**Setup:**
1. Open machine GUI
2. Place multiple Range Addons in upgrade slots
3. Range stacks!

---

<a name="3-economy-en"></a>
### 3. Economy System

**Three Systems:**
- **EssentialsX Economy** - Vault provider
- **Lightman's Currency** - In-game shops & ATMs
- **BankPlus** - Bank system

#### Placeholders

| Placeholder | Output |
|-------------|--------|
| `%vault_eco_balance_formatted%` | `$1,234.56` ✅ |
| `%bankplus_balance%` | Bank balance |

#### Commands

```bash
/balance              # Check balance
/pay <player> <money> # Transfer money
/eco give <name> 1000 # Admin: Give money
```

---

<div align="center">

**Server Configuration - Industrial Colony 2**

Version 2.3.0 | 4x Conduits | Range Fix | Economy System

[📋 README](../README.md) | [🐛 Bugfixes](BUGFIXES.md) | [🎮 Guides](GUIDES.md)

</div>
