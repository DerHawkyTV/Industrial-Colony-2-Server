# 🔧 Line Endings Fix

Wenn du beim Start auf Linux diesen Fehler bekommst:
```
: not found
Syntax error: word unexpected (expecting "in")
```

Das liegt an Windows-Zeilenumbrüchen (`\r\n` statt `\n`).

---

## ✅ Lösung 1: dos2unix (Empfohlen)

### Installiere dos2unix:
```bash
# Debian/Ubuntu
sudo apt-get install dos2unix

# RHEL/Fedora
sudo dnf install dos2unix

# CentOS
sudo yum install dos2unix
```

### Konvertiere die Scripts:
```bash
cd /pfad/zu/deinem/server

dos2unix start.sh
dos2unix start-direct.sh

chmod +x start.sh start-direct.sh
```

---

## ✅ Lösung 2: sed (Falls dos2unix nicht verfügbar)

```bash
cd /pfad/zu/deinem/server

sed -i 's/\r$//' start.sh
sed -i 's/\r$//' start-direct.sh

chmod +x start.sh start-direct.sh
```

---

## ✅ Lösung 3: vim

```bash
vim start.sh

# Im vim:
:set ff=unix
:wq

# Wiederholen für start-direct.sh
vim start-direct.sh
:set ff=unix
:wq
```

---

## 🧪 Testen

Nach der Konvertierung:
```bash
# Prüfe ob Zeilenumbrüche korrekt sind
file start.sh
# Sollte zeigen: "ASCII text" (nicht "ASCII text, with CRLF line terminators")

# Starte Server
./start.sh
```

---

## 🎯 Schnell-Fix (Copy-Paste)

Für faule Leute - einfach alles kopieren und ausführen:

```bash
cd /home/installer/Server/Industrial-Colony-2-Server

# Installiere dos2unix falls nicht vorhanden
if ! command -v dos2unix &> /dev/null; then
    sudo apt-get update && sudo apt-get install -y dos2unix
fi

# Konvertiere Scripts
dos2unix start.sh start-direct.sh 2>/dev/null || {
    sed -i 's/\r$//' start.sh
    sed -i 's/\r$//' start-direct.sh
}

# Mache ausführbar
chmod +x start.sh start-direct.sh

# Prüfe
echo "✅ Line endings fixed!"
file start.sh

# Starte Server
./start.sh
```

---

## 📝 Für die Zukunft

### In Git Bash (Windows) vor dem Upload:
```bash
# Konvertiere zu Unix vor Git Commit
unix2dos -n start.sh start.sh.tmp && mv start.sh.tmp start.sh
```

### Oder setze Git Auto-Konvertierung:
```bash
git config --global core.autocrlf input
```

Das verhindert automatisch Windows-Zeilenumbrüche in Zukunft.

---

<div align="center">

**Industrial Colony 2 Server**

[📋 Start Guide](START_GUIDE.md) | [🐛 Bugfixes](docs/BUGFIXES.md)

</div>
