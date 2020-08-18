[![Netlify Status](https://api.netlify.com/api/v1/badges/f57f32f5-b56e-425b-874f-ab114916b8f1/deploy-status)](https://friendly-cray-96d631.netlify.com/)

This repository is a boilerplate of a blog app. The starter was build using Gatsby and Typescript.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## Installation

### Requirements

You will need to install the Gatsby CLI.

```bash
npm install -g gatsby-cli
```

Use the package manager [yarn](https://yarnpkg.com/lang/en/) to install needed librairies.

```bash
yarn
```

### Configuration

All blog posts can be found under content/markdown/post/
To create a new post, you will just need to create a file with the .md extension under this folder and follow the following schema :

```
---
title: <POST TITLE>
date: <THE PUBLICATION DATE>
description: <POST DESCRIPTION>
featuredImage: <LINK TO THE COVER PICTURE eg: ./imgs/asia-4466113_640.jpg>
---

# Et spatiosumque Quae

## Animum mirum cecidere

Lorem markdownum Medea, preces in tantum, sub tela nec novissima dilapsum.
...
```

## Usage

Start development server.

```bash
gatsby develop
```

You can now visit http://localhost:8000

> Create a production build.

```bash
gatsby build
```

> Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

> Serve the production build locally.

```bash
gatsby serve
```

> Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
