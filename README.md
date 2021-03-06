# Latest News 

This document repository's content for Chinese docs has been deprecated. The new Chinese documentation for Octopus is [Rancher 2x](https://github.com/cnrancher/docs-rancher2), redirect to **/docs/octopus** for the latest Chinese doc.


# Website
[![Build Status](http://drone-pandaria.cnrancher.com/api/badges/cnrancher/docs-octopus/status.svg)](http://drone-pandaria.cnrancher.com/cnrancher/docs-octopus)

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
