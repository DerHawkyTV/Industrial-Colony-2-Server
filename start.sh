#!/bin/bash
# Industrial Colony 2 Server Startup Script
# Version: 2.1.0

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

REQUIRED_JAVA_VERSION=21
MIN_RAM="6G"
MAX_RAM="12G"
SCREEN_NAME="mc1"
SERVER_JAR="mohist-1.20.1-1003-server.jar"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Industrial Colony 2 Server${NC}"
echo -e "${BLUE}  Minecraft 1.20.1 | 238 Mods | 17 Plugins${NC}"
echo -e "${BLUE}  Version 2.1.0${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

echo -e "${YELLOW}[1/4] Prüfe Java Version...${NC}"

if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
    if [ "$JAVA_VERSION" = "1" ]; then
        JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f2)
    fi
    echo "      Gefunden: Java $JAVA_VERSION"

    if [ $JAVA_VERSION -lt $REQUIRED_JAVA_VERSION ]; then
        echo -e "${RED}      Java $REQUIRED_JAVA_VERSION benötigt! Aktuell: Java $JAVA_VERSION${NC}"
        echo "      Installiere Java 21:"
        echo "      Debian/Ubuntu: sudo apt-get install openjdk-21-jdk-headless"
        echo "      RHEL/Fedora:   sudo dnf install java-21-openjdk-headless"
        exit 1
    fi
    echo -e "${GREEN}      ✅ Java $JAVA_VERSION OK${NC}"
else
    echo -e "${RED}      Java nicht gefunden!${NC}"
    echo "      Installiere Java 21:"
    echo "      Debian/Ubuntu: sudo apt-get install openjdk-21-jdk-headless"
    exit 1
fi

echo -e "${YELLOW}[2/4] Prüfe screen...${NC}"
if ! command -v screen &> /dev/null; then
    echo -e "${RED}      screen nicht installiert!${NC}"
    echo "      Installiere: sudo apt-get install screen"
    exit 1
fi
echo -e "${GREEN}      ✅ screen verfügbar${NC}"

echo -e "${YELLOW}[3/4] Prüfe Server Jar...${NC}"
if [ ! -f "$SERVER_JAR" ]; then
    echo -e "${RED}      $SERVER_JAR nicht gefunden!${NC}"
    exit 1
fi
JAR_SIZE=$(du -h "$SERVER_JAR" | cut -f1)
echo -e "${GREEN}      ✅ $SERVER_JAR gefunden ($JAR_SIZE)${NC}"

echo -e "${YELLOW}[4/4] Prüfe bestehende Server-Session...${NC}"
if screen -list | grep -q "$SCREEN_NAME"; then
    echo -e "${RED}      Server läuft bereits in screen '$SCREEN_NAME'!${NC}"
    echo ""
    echo "      Zum Server verbinden: screen -r $SCREEN_NAME"
    echo "      Server stoppen:       screen -S $SCREEN_NAME -X stuff 'stop^M'"
    echo "      Screen killen:        screen -X -S $SCREEN_NAME quit"
    echo ""
    read -p "      Server stoppen und neu starten? (j/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[JjYy]$ ]]; then
        echo -e "${YELLOW}      Stoppe Server...${NC}"
        screen -S $SCREEN_NAME -X stuff 'stop^M'
        echo "      Warte 15 Sekunden..."
        sleep 15
        if screen -list | grep -q "$SCREEN_NAME"; then
            echo -e "${YELLOW}      Erzwinge Beendigung...${NC}"
            screen -X -S $SCREEN_NAME quit
            sleep 2
        fi
    else
        echo -e "${YELLOW}      Start abgebrochen.${NC}"
        exit 0
    fi
fi
echo -e "${GREEN}      ✅ Keine bestehende Session${NC}"

echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}Starting Server...${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo "  RAM:      $MIN_RAM - $MAX_RAM"
echo "  Java:     $(java -version 2>&1 | head -n 1)"
echo "  Screen:   $SCREEN_NAME"
echo "  Server:   $SERVER_JAR"
echo ""
echo -e "${YELLOW}  Zum Server verbinden: ${GREEN}screen -r $SCREEN_NAME${NC}"
echo -e "${YELLOW}  Von Screen trennen:   ${GREEN}Strg+A dann D${NC}"
echo -e "${YELLOW}  Server stoppen:       ${GREEN}stop (im Screen)${NC}"
echo ""
echo -e "${BLUE}================================================${NC}"
echo ""

sleep 2

if [ ! -f "eula.txt" ]; then
    echo "eula=true" > eula.txt
    echo -e "${GREEN}✅ eula.txt erstellt${NC}"
fi

screen -dmS $SCREEN_NAME java -Xms$MIN_RAM -Xmx$MAX_RAM \
    -XX:+UseG1GC \
    -XX:+ParallelRefProcEnabled \
    -XX:MaxGCPauseMillis=200 \
    -XX:+UnlockExperimentalVMOptions \
    -XX:+DisableExplicitGC \
    -XX:+AlwaysPreTouch \
    -XX:G1NewSizePercent=30 \
    -XX:G1MaxNewSizePercent=40 \
    -XX:G1HeapRegionSize=8M \
    -XX:G1ReservePercent=20 \
    -XX:G1HeapWastePercent=5 \
    -XX:G1MixedGCCountTarget=4 \
    -XX:InitiatingHeapOccupancyPercent=15 \
    -XX:G1MixedGCLiveThresholdPercent=90 \
    -XX:G1RSetUpdatingPauseTimePercent=5 \
    -XX:SurvivorRatio=32 \
    -XX:+PerfDisableSharedMem \
    -XX:MaxTenuringThreshold=1 \
    -Dusing.aikars.flags=https://mcflags.emc.gs \
    -Daikars.new.flags=true \
    -jar $SERVER_JAR nogui

sleep 2

if screen -list | grep -q "$SCREEN_NAME"; then
    echo -e "${GREEN}================================================${NC}"
    echo -e "${GREEN}  ✅ Server erfolgreich gestartet!${NC}"
    echo -e "${GREEN}================================================${NC}"
    echo ""
    echo -e "${GREEN}Verbinde mit: ${YELLOW}screen -r $SCREEN_NAME${NC}"
    echo -e "${GREEN}Trennen mit:  ${YELLOW}Strg+A dann D${NC}"
    echo ""
    screen -list
else
    echo -e "${RED}================================================${NC}"
    echo -e "${RED}  ❌ Server Start fehlgeschlagen!${NC}"
    echo -e "${RED}================================================${NC}"
    echo ""
    echo "Prüfe logs/latest.log für Details"
    exit 1
fi
