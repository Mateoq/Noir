#!/bin/sh

echo "-- Config Copies --"
copyConfig() {
  echo "-> Config: <$1> --"
  cp -rf config/$1 build/config/
}

mkdir -p build/config
copyConfig tsconfig.client.json
echo "-- Done all configs --"
