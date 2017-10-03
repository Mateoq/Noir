#!/bin/bash

#
# Script to generate the types definitions of the third party libraries.
# ----------------------------------------------------------------------
TYPES_FOLDER="types"
LIBRARIES_FOLDER="node_modules/@types"
LIBRARIES=("good" "awesome-typescript-loader")

# mkdir -p $TYPES_FOLDER

echo "-- Generating types --"
for library in "${LIBRARIES[@]}"
do
  echo "-> Generating types for <$library>"
  dts-gen -m $library -d $library
done

echo "-- Placing types on @types folder --"
mv -f $TYPES_FOLDER/* $LIBRARIES_FOLDER/
# rm -rf $TYPES_FOLDER

echo "-- Done --"
