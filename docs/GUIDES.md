# 🎮 Player Guides / Spieler-Guides

**🇩🇪 [Deutsch](#deutsch) | 🇬🇧 [English](#english)**

**Industrial Colony 2 Server** | Version: 2.3.0 | Minecraft 1.20.1

---

<a name="deutsch"></a>
## 🇩🇪 Deutsch

### 📋 Inhalt

1. [Custom Items erstellen](#1-custom-items-erstellen-de)
2. [Custom Trader erstellen](#2-custom-trader-erstellen-de)
3. [Texturepack Setup](#3-texturepack-setup-de)

---

<a name="1-custom-items-erstellen-de"></a>
### 1. Custom Items erstellen

**3 Methoden:**

| Methode | Vorteile | Nachteile |
|---------|----------|-----------|
| **KubeJS** | Custom Texturen, Mod-Kompatibilität | Kein RPG-System |
| **MMOItems** | RPG-Stats, Skills, Abilities | Keine Custom-Texturen |
| **Hybrid** | KubeJS + MMOItems Stats | Komplex |

#### KubeJS Items

**Datei:** `kubejs/startup_scripts/custom_items.js`

```javascript
StartupEvents.registry('item', event => {
    event.create('custom_gem')
        .displayName('§bMagischer Edelstein')
        .rarity('rare')
        .glow(true);
});
```

#### MMOItems (via Commands)

```bash
/mi browse          # Item-Browser öffnen
/mi create sword LEGENDARY_BLADE
/mi give sword LEGENDARY_BLADE 1
```

---

<a name="2-custom-trader-erstellen-de"></a>
### 2. Custom Trader erstellen

**4 Methoden:**
- Vanilla Villager Trades (KubeJS)
- Wandering Trader (KubeJS)
- Lightman's Currency Shops (Mod)
- Custom NPC-Handler

#### Villager Trades

**Datei:** `kubejs/server_scripts/custom_traders.js`

```javascript
MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:farmer', 1, [
        TradeItem.of('minecraft:diamond', 1),
        TradeItem.of('minecraft:emerald', 10)
    ]);
});
```

#### Lightman's Currency

1. Crafte Item Trader Block
2. Platziere & Rechtsklick
3. Items + Preise setzen

---

<a name="3-texturepack-setup-de"></a>
### 3. Texturepack Setup

**Empfohlene x64 Packs:**

| Pack | Features | Link |
|------|----------|------|
| **Realistico** | PBR, Shader-kompatibel | [CurseForge](https://www.curseforge.com/minecraft/texture-packs/realistico) |
| **Patrix** | Extreme Details | [Patreon](https://www.patreon.com/Patrix) |
| **Mizuno's** | Mod-Support | [CurseForge](https://www.curseforge.com/minecraft/texture-packs/mizunos-16-craft) |

**Quick-Start:**
1. Download Realistico x64
2. Platziere in `.minecraft/resourcepacks/`
3. Aktiviere im Spiel
4. Optional: Complementary Shaders

---

<a name="english"></a>
## 🇬🇧 English

### 📋 Contents

1. [Create Custom Items](#1-create-custom-items-en)
2. [Create Custom Traders](#2-create-custom-traders-en)
3. [Texturepack Setup](#3-texturepack-setup-en)

---

<a name="1-create-custom-items-en"></a>
### 1. Create Custom Items

**3 Methods:**

| Method | Advantages | Disadvantages |
|--------|-----------|---------------|
| **KubeJS** | Custom textures, mod compatibility | No RPG system |
| **MMOItems** | RPG stats, skills, abilities | No custom textures |
| **Hybrid** | KubeJS + MMOItems stats | Complex |

#### KubeJS Items

**File:** `kubejs/startup_scripts/custom_items.js`

```javascript
StartupEvents.registry('item', event => {
    event.create('custom_gem')
        .displayName('§bMagic Gem')
        .rarity('rare')
        .glow(true);
});
```

#### MMOItems (via Commands)

```bash
/mi browse          # Open item browser
/mi create sword LEGENDARY_BLADE
/mi give sword LEGENDARY_BLADE 1
```

---

<a name="2-create-custom-traders-en"></a>
### 2. Create Custom Traders

**4 Methods:**
- Vanilla Villager Trades (KubeJS)
- Wandering Trader (KubeJS)
- Lightman's Currency Shops (Mod)
- Custom NPC Handler

#### Villager Trades

**File:** `kubejs/server_scripts/custom_traders.js`

```javascript
MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:farmer', 1, [
        TradeItem.of('minecraft:diamond', 1),
        TradeItem.of('minecraft:emerald', 10)
    ]);
});
```

#### Lightman's Currency

1. Craft Item Trader Block
2. Place & right-click
3. Set items + prices

---

<a name="3-texturepack-setup-en"></a>
### 3. Texturepack Setup

**Recommended x64 Packs:**

| Pack | Features | Link |
|------|----------|------|
| **Realistico** | PBR, shader compatible | [CurseForge](https://www.curseforge.com/minecraft/texture-packs/realistico) |
| **Patrix** | Extreme details | [Patreon](https://www.patreon.com/Patrix) |
| **Mizuno's** | Mod support | [CurseForge](https://www.curseforge.com/minecraft/texture-packs/mizunos-16-craft) |

**Quick-Start:**
1. Download Realistico x64
2. Place in `.minecraft/resourcepacks/`
3. Activate in game
4. Optional: Complementary Shaders

---

<div align="center">

**Player Guides - Industrial Colony 2 Server**

Version 2.3.0 | 316 Mods | 17 Plugins

[📋 README](../README.md) | [🐛 Bugfixes](BUGFIXES.md) | [🔧 Config](CONFIG.md)

</div>
