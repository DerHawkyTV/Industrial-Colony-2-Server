# 🎨 Texturepack Setup - Quick Guide

## 🚀 Schnellste Lösung (10 Minuten)

### Option 1: Fertiges Pack nutzen

**1. Download Realistico x64**
```
https://www.curseforge.com/minecraft/texture-packs/realistico
```

**2. Download Unity Mod-Support**
```
https://www.curseforge.com/minecraft/texture-packs/unity
```

**3. Installation**
```
Beide .zip Dateien nach .minecraft/resourcepacks/ kopieren
Im Spiel aktivieren (Unity ÜBER Realistico laden)
```

**4. Shader installieren (optional)**
```
Download Complementary Shaders
https://www.curseforge.com/minecraft/customization/complementary-shaders

Platziere in: .minecraft/shaderpacks/
Aktiviere: Einstellungen → Video → Shaders
```

**Fertig!** ✅

---

## 🔧 Option 2: Eigenes Pack erstellen

### Schritt 1: Base-Pack downloaden

**Empfohlen: Realistico x64**

1. Download von CurseForge
2. Entpacke in: `IC2_Realistic_x64/`
3. Das ist deine Base

### Schritt 2: Mod-Texturen extrahieren

**Aus Mod-JARs:**

```bash
# Öffne mit 7-Zip:
mods/create-1.20.1-0.5.1.jar

# Navigiere zu:
assets/create/textures/

# Kopiere nach:
IC2_Realistic_x64/assets/create/textures/
```

**Wichtigste Mods:**
- ✅ Create
- ✅ Mekanism
- ✅ Industrial Foregoing
- ✅ Lightman's Currency
- ✅ MMOItems (nutzt Vanilla-Textures)

### Schritt 3: Texturen upscalen

**x16 → x64 Upscaling:**

**Tool: Waifu2x (Online, kostenlos)**

1. Gehe zu: https://waifu2x.booru.pics/
2. Upload Texture (z.B. brass_ingot.png)
3. Wähle: Upscaling 4x (16x4 = 64)
4. Style: Artwork (für Items) oder Photo (für Blocks)
5. Download upscaled Texture
6. Platziere in richtigem Ordner

**Batch-Processing (viele Texturen):**
```
Tool: Topaz Gigapixel AI (kostenpflichtig, beste Qualität)
Oder: Bulk Image Downloader + Waifu2x API
```

### Schritt 4: KubeJS Custom Items

**Für unsere Custom Items:**

```
IC2_Realistic_x64/assets/kubejs/textures/item/
├── legendary_ingot.png
├── custom_gem.png
├── flame_sword.png
├── range_addon_bundle_2x.png
├── range_addon_bundle_3x.png
└── range_addon_bundle_4x.png
```

**Base-Textures:**
- Vanilla Gold Ingot als Base
- Upscale + Color-Shift (Gold → Lila/Aqua/etc.)
- Glow-Effekt hinzufügen (Outer Glow in Photoshop)

### Schritt 5: Testen

```
1. Pack als .zip komprimieren
2. In .minecraft/resourcepacks/ kopieren
3. Im Spiel aktivieren
4. Items/Blocks prüfen
```

---

## 📦 Template-Pack (bereits erstellt)

Ich habe dir ein Grundgerüst erstellt:

```
resourcepack/IC2_Realistic_x64/
├── pack.mcmeta          ✅ Fertig
├── README.txt           ✅ Fertig
└── assets/
    ├── minecraft/       📁 Erstellt
    ├── create/         📁 Erstellt
    ├── mekanism/       📁 Erstellt (erstelle bei Bedarf)
    ├── industrialforegoing/ 📁 Erstellt (erstelle bei Bedarf)
    └── kubejs/         📁 Erstellt
        └── textures/
            └── item/   📁 Bereit für Custom-Items
```

**Nächste Schritte:**

1. **Download Base-Pack** (Realistico/Unity)
2. **Entpacke** in `IC2_Realistic_x64/`
3. **Mod-Texturen hinzufügen**
4. **Komprimiere als .zip**
5. **Teste im Spiel**

---

## 🎯 Priorität: Welche Texturen zuerst?

### Tier 1 (Wichtigste):
- ✅ **Create** - Hauptmod, viele Items
- ✅ **Lightman's Currency** - Münzen, Scheine
- ✅ **KubeJS Custom Items** - Legendary Ingot, Range Bundles

### Tier 2 (Nice-to-have):
- Mekanism
- Industrial Foregoing
- MMOItems (nutzt meist Vanilla)

### Tier 3 (Optional):
- Decoration Mods
- Food Mods
- Minor Utility Mods

---

## 🛠️ Tools-Liste

### Notwendig:
- **7-Zip** (Entpacken von Mod-JARs)
- **Waifu2x** (Upscaling)
- **Texteditor** (pack.mcmeta bearbeiten)

### Optional:
- **Photoshop/GIMP** (Details hinzufügen)
- **Topaz Gigapixel AI** (Besseres Upscaling)
- **Materialize** (PBR-Maps erstellen)

---

## 🎨 Realistic Style - Tipps

### Für Items:

1. **Metallischer Glanz**
   - Dodge/Burn Tool in Photoshop
   - Highlights an Kanten
   - Schatten in Vertiefungen

2. **Farb-Tiefe**
   - Nicht nur eine Farbe
   - Farbverlauf (hell → dunkel)
   - Subtle Color-Variations

3. **Details**
   - Kratz-Spuren (für Metalle)
   - Unreinheiten (für Steine)
   - Texturen (für Holz)

### Für Blocks:

1. **Seamless Textures**
   - Kanten müssen nahtlos verbinden
   - Offset-Filter in Photoshop
   - Oder: Materialize Auto-Tiling

2. **Normal-Maps**
   - Erzeugt 3D-Effekt
   - Mit Materialize generieren
   - Als `_n.png` speichern

3. **Variation**
   - Connected Textures (Optifine/CTM)
   - Random-Rotation
   - Biom-abhängige Farben

---

## 📚 Weitere Ressourcen

**Vollständige Anleitung:**
```
docs/TEXTUREPACK_GUIDE.md
```

**Texturepack-Vorlage:**
```
resourcepack/IC2_Realistic_x64/
```

**Custom Items Guide:**
```
docs/CUSTOM_ITEMS_GUIDE.md
```

---

## ⚡ Super-Quick-Start (5 Minuten)

**Keine Zeit? Nutze fertige Packs:**

```bash
# 1. Download
Realistico x64: https://www.curseforge.com/minecraft/texture-packs/realistico
Unity x64: https://www.curseforge.com/minecraft/texture-packs/unity

# 2. Install
Beide in .minecraft/resourcepacks/ kopieren

# 3. Activate
Unity ÜBER Realistico laden (Reihenfolge wichtig!)

# 4. Done!
```

**Das war's!** Die meisten Mod-Texturen sind bereits in Unity enthalten.

---

<div align="center">

**Viel Erfolg mit deinem Texturepack!** 🎨

[📚 Komplette Anleitung](../docs/TEXTUREPACK_GUIDE.md)

</div>
