#!/bin/bash

cat ~/.vscode/extensions/extensions.json | jq '.[].identifier.id' >extensions
cp ~/.vscode/custom.css .
cp ~/.vscode/indicator.js .

cp ~/.config/Code/User/keybindings.json .
cp ~/.config/Code/User/settings.json .

sed -i "s#$HOME#%HOMEPATH%#g" settings.json

git stage keybindings.json settings.json extensions custom.css indicator.js

git commit -m "update"

git push
