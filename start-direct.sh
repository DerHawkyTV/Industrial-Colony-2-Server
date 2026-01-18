#!/bin/bash
# Industrial Colony 2 Server - Direct Start
# Version: 2.1.0

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

REQUIRED_JAVA_VERSION=21
MIN_RAM="6G"
MAX_RAM="12G"
SERVER_JAR="mohist-1.20.1-1003-server.jar"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Industrial Colony 2 Server (Direct Mode)${NC}"
echo -e "${BLUE}  Minecraft 1.20.1 | 238 Mods${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

echo -e "${YELLOW}Prüfe Java...${NC}"
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
    if [ "$JAVA_VERSION" = "1" ]; then
        JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f2)
    fi

    if [ $JAVA_VERSION -lt $REQUIRED_JAVA_VERSION ]; then
        echo -e "${RED}Java $REQUIRED_JAVA_VERSION benötigt! Aktuell: Java $JAVA_VERSION${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Java $JAVA_VERSION OK${NC}"
else
    echo -e "${RED}Java nicht gefunden!${NC}"
    exit 1
fi

if [ ! -f "$SERVER_JAR" ]; then
    echo -e "${RED}$SERVER_JAR nicht gefunden!${NC}"
    exit 1
fi

if [ ! -f "eula.txt" ]; then
    echo "eula=true" > eula.txt
    echo -e "${GREEN}✅ eula.txt erstellt${NC}"
fi

echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}Starting Server (Direct Mode)...${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo "  RAM:      $MIN_RAM - $MAX_RAM"
echo "  Server:   $SERVER_JAR"
echo ""
echo -e "${YELLOW}  Zum Stoppen: ${GREEN}stop${NC}"
echo ""
echo -e "${BLUE}================================================${NC}"
echo ""

java -Xms$MIN_RAM -Xmx$MAX_RAM \
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
