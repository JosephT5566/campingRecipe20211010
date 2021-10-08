[Deploy NEXT.JS App to GitHub Pages](https://www.linkedin.com/pulse/deploy-nextjs-app-github-pages-federico-antu%C3%B1a/)
[Invalid images config](https://nextjs.org/docs/messages/invalid-images-config)
[Custom loaders are not recognized by next export](https://github.com/vercel/next.js/issues/21079)

```yml
name: Deploy gh-pages

on:
    push:
        branches:
            - main

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        env:
          NEXT_PUBLIC_BASE_PATH: campingRecipe20211010
        steps:
            - name: Checkout
              uses: actions/checkout@v2.3.1

            - name: Install and Build
              run: |
                  yarn install && yarn build && yarn export
            - name: Add .nojekyll file
              run: touch ./out/.nojekyll
            - name: Deploy
              uses: JamesIves/github-pages-deploy-action@4.1.1
              with:
                  branch: gh-pages
                  folder: out
```