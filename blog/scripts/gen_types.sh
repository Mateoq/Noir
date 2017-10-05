#!/bin/bash

#
# Script to generate the types definitions of the third party libraries.
# ----------------------------------------------------------------------
TYPES_FOLDER="types"
LIBRARIES_FOLDER="node_modules/@types"
LIBRARIES=("good" "awesome-typescript-loader" "cssnano" "mdn-polyfills")

# mkdir -p $TYPES_FOLDER

echo "-- Generating types --"
for library in "${LIBRARIES[@]}"
do
  echo "-> Generating types for <$library>"
  #dts-gen -m $library -d $library
  dts-gen -m $library
done

# echo "-- Placing types on @types folder --"
# for library in "${LIBRARIES[@]}"
# do
#   echo "-> Moving <$library>"
#   mv -f $TYPES_FOLDER/$library $LIBRARIES_FOLDER/
# done

echo "-- Done --"
