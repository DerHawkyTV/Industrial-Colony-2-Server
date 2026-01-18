# 🚀 Server Start Guide

**Industrial Colony 2 Server**

Version 2.1.0 | Minecraft 1.20.1

---

## 📋 Übersicht

Zwei Methoden zum Server-Start:

1. **[start.sh](#startsh-empfohlen)** - Mit screen (empfohlen für Produktiv-Server)
2. **[start-direct.sh](#start-directsh)** - Ohne screen (für Tests/Development)

---

## 🎯 start.sh (Empfohlen)

**Startet Server im screen `mc1`**

### Features

✅ **Automatische Java 21 Prüfung**
- Erkennt installierte Java-Version
- Installiert Java 21 automatisch falls benötigt
- Unterstützt: Linux (Debian, Ubuntu, RHEL, Fedora, Arch), macOS

✅ **Screen Management**
- Startet Server in screen-Session `mc1`
- Server läuft im Hintergrund weiter
- Terminal kann geschlossen werden
- Prüft auf bestehende Sessions

✅ **Auto-Installation**
- Installiert screen falls nicht vorhanden
- Erstellt eula.txt automatisch
- Prüft Server-Jar

✅ **Optimierte JVM-Flags**
- Aikars Flags für beste Performance
- 6GB - 12GB RAM
- G1GC Garbage Collector

### Verwendung

```bash
# Server starten
./start.sh

# Zum Server verbinden
screen -r mc1

# Von Screen trennen (Server läuft weiter)
Strg+A dann D

# Server stoppen (im Screen)
stop
```

### Erste Schritte

1. **Ausführbar machen:**
   ```bash
   chmod +x start.sh
   ```

2. **Server starten:**
   ```bash
   ./start.sh
   ```

3. **Mit Server verbinden:**
   ```bash
   screen -r mc1
   ```

4. **Screen verlassen:**
   - Drücke `Strg+A`
   - Dann drücke `D`
   - Server läuft weiter!

### Fehlerbehebung

**Java 21 wird nicht gefunden?**
```bash
# Prüfe Java Version
java -version

# Falls <21: Start-Script installiert automatisch
./start.sh
```

**Screen nicht verfügbar?**
```bash
# Script installiert automatisch, oder manuell:
# Debian/Ubuntu:
sudo apt-get install screen

# RHEL/Fedora:
sudo dnf install screen

# macOS:
brew install screen
```

**Server läuft bereits?**
```bash
# Prüfe laufende Screens
screen -list

# Zum laufenden Server verbinden
screen -r mc1

# Erzwinge Stop
screen -X -S mc1 quit
```

---

## 🔧 start-direct.sh

**Startet Server direkt im aktuellen Terminal**

### Features

- ✅ Startet Server im aktuellen Terminal
- ✅ Prüft Java 21 (keine Auto-Installation)
- ✅ Gleiche JVM-Optimierungen wie start.sh
- ❌ Kein Hintergrund-Betrieb
- ❌ Server stoppt wenn Terminal geschlossen wird

### Verwendung

```bash
# Ausführbar machen
chmod +x start-direct.sh

# Server starten
./start-direct.sh

# Server stoppen
stop
# oder Strg+C
```

### Wann nutzen?

**Gut für:**
- 🧪 Tests & Development
- 🔍 Debugging
- 📝 Log-Überwachung in Echtzeit

**Nicht gut für:**
- 🚀 Produktiv-Server
- 💻 SSH-Sessions (nutze start.sh mit screen)
- 🌐 Dauerbetrieb

---

## 📊 Server-Konfiguration

### RAM-Einstellungen anpassen

**In beiden Scripts:**

```bash
# Öffne Script
nano start.sh

# Ändere Zeilen:
MIN_RAM="6G"    # Start-RAM
MAX_RAM="12G"   # Maximum-RAM

# Empfohlene Werte:
# Klein (238 Mods): 6G - 10G
# Mittel:           8G - 12G
# Groß:            10G - 16G
```

### Server-Jar ändern

```bash
# In start.sh / start-direct.sh:
SERVER_JAR="mohist-1.20.1-1003-server.jar"

# Falls du auf neue Mohist-Version updatest:
SERVER_JAR="mohist-1.20.1-XXXX-server.jar"
```

---

## 🔍 Screen Befehle

### Grundlegende Befehle

```bash
# Alle Screens auflisten
screen -list

# Zu Screen verbinden
screen -r mc1

# Neuen Screen erstellen
screen -S <name>

# Screen im Hintergrund
Strg+A dann D
```

### Server-Management

```bash
# Server Status prüfen
screen -list | grep mc1

# Zum Server
screen -r mc1

# Server Console-Befehl ohne verbinden
screen -S mc1 -X stuff 'say Hello^M'

# Server stoppen (außerhalb)
screen -S mc1 -X stuff 'stop^M'

# Screen killen (Notfall!)
screen -X -S mc1 quit
```

### Multi-Screen Setup

```bash
# Mehrere Server:
screen -dmS mc1 ./start-direct.sh    # Server 1
screen -dmS mc2 ./start-direct.sh    # Server 2

# Zwischen Screens wechseln
screen -r mc1    # Zu Server 1
# Strg+A dann D
screen -r mc2    # Zu Server 2
```

---

## 🎮 Server-Befehle

### Im Screen / Server-Console

```bash
# Server stoppen
stop

# Speichern
save-all

# Spieler kicken
kick <player> <reason>

# Whitelist
whitelist add <player>
whitelist remove <player>

# OP geben
op <player>

# World Border
worldborder set 10000

# Plugin reload (Vorsicht!)
/reload confirm
```

---

## 🐛 Troubleshooting

### Server startet nicht

**1. Java-Version prüfen:**
```bash
java -version
# Sollte zeigen: openjdk version "21.x.x"
```

**2. Server-Jar vorhanden?**
```bash
ls -lh mohist-*.jar
```

**3. Logs checken:**
```bash
tail -n 50 logs/latest.log
```

**4. RAM-Problem?**
```bash
# Prüfe verfügbaren RAM
free -h

# Reduziere RAM in start.sh falls nötig
MIN_RAM="4G"
MAX_RAM="8G"
```

### Server crashed / hängt

**Im Screen:**
```bash
# Verbinde zu Screen
screen -r mc1

# Prüfe ob Server reagiert
# Falls frozen: Strg+C (stoppt Server)
```

**Crash-Report:**
```bash
# Letzter Crash-Report
cat crash-reports/$(ls -t crash-reports/ | head -1)
```

### Port bereits belegt

```bash
# Prüfe ob Port 25565 belegt ist
netstat -tulpn | grep 25565

# Prozess killen (Vorsicht!)
sudo kill -9 <PID>
```

### Zu wenig RAM

**Symptome:**
- "OutOfMemoryError" in Logs
- Server friert ein
- Extreme Lag-Spikes

**Lösung:**
```bash
# In start.sh erhöhen:
MAX_RAM="16G"  # War 12G

# System-RAM prüfen:
free -h
# Stelle sicher: MAX_RAM < Gesamt-RAM - 2GB (für OS)
```

---

## 📈 Performance-Monitoring

### Server-Ressourcen überwachen

```bash
# CPU & RAM (aktualisiert jede 2s)
watch -n 2 'ps aux | grep java'

# Detaillierter mit top
top -p $(pgrep -f mohist)

# Mit htop (schöner)
htop -p $(pgrep -f mohist)
```

### Im Spiel (als OP)

```bash
# TPS (Ticks per second) - sollte 20.0 sein
/tps

# Lag-Analyse
/spark profiler start
# Warte 30 Sekunden
/spark profiler stop

# Chunk-Laden
/forge tps
```

---

## 🔄 Auto-Restart Setup

### Cron-Job für automatischen Restart

```bash
# Crontab bearbeiten
crontab -e

# Füge hinzu (Restart jeden Tag um 4:00 Uhr):
0 4 * * * screen -S mc1 -X stuff 'stop^M' && sleep 30 && /pfad/zu/server/start.sh

# Oder mit Backup vor Restart:
0 4 * * * screen -S mc1 -X stuff 'save-all^M' && sleep 10 && /pfad/zu/backup.sh && screen -S mc1 -X stuff 'stop^M' && sleep 30 && /pfad/zu/server/start.sh
```

---

## 🔐 Sicherheit

### Berechtigungen setzen

```bash
# Server-Dateien schützen
chmod 700 start.sh start-direct.sh
chown serveruser:serveruser *

# Plugins & Configs schützen
chmod -R 600 plugins/ config/
```

### Firewall (Linux)

```bash
# Port 25565 öffnen (iptables)
sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT

# Port 25565 öffnen (ufw)
sudo ufw allow 25565/tcp

# Port 25565 öffnen (firewalld)
sudo firewall-cmd --permanent --add-port=25565/tcp
sudo firewall-cmd --reload
```

---

## 📝 Best Practices

### Produktiv-Server

1. ✅ **Nutze start.sh mit screen**
2. ✅ **Regelmäßige Backups**
3. ✅ **Auto-Restart nachts (Cron)**
4. ✅ **Überwache RAM & CPU**
5. ✅ **Logs rotieren** (logrotate)

### Development-Server

1. ✅ **start-direct.sh ist OK**
2. ✅ **Teste neue Mods erst hier**
3. ✅ **Keine wichtigen Daten**

---

## 🆘 Support

### Logs finden

```bash
# Aktueller Log
tail -f logs/latest.log

# Crash-Reports
ls -lth crash-reports/

# Debug-Logs
tail -f logs/debug.log
```

### Nützliche Links

- **Mohist:** https://mohistmc.com/
- **Java 21:** https://adoptium.net/temurin/releases/?version=21
- **Screen Tutorial:** https://www.gnu.org/software/screen/manual/screen.html

---

<div align="center">

**Industrial Colony 2 Server**

Version 2.1.0 | 238 Mods | 17 Plugins

[📋 README](README.md) | [🐛 Bugfixes](docs/BUGFIXES.md) | [🎮 Guides](docs/GUIDES.md)

</div>
