1. Set `base` to `REPOSITORY_NAME` in `config.js`
2. Create `deploy.sh` in root folder

``` js
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:robertleroy/REPOSITORY_NAME.git master:gh-pages

cd -
```