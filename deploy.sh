#!/usr/bin/env sh

set -e 

npm run build 

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/sklimbu2/happy-project.git master:gh-pages

cd -
