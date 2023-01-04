git reset --hard

git pull

if [[ $(uname) == "Linux" ]]; then
	sed -i "s#%HOMEPATH%#$HOME#g" settings.json
else
	gsed -i "s#%HOMEPATH%#$HOME#g" settings.json
fi
