#!/bin/bash

cat ~/.vscode/extensions/extensions.json | jq '.[].identifier.id' >extensions

cp ~/.config/Code/User/keybindings.json .
cp ~/.config/Code/User/settings.json .

git stage keybindings.json settings.json extensions

git commit -m "update"

git push
