---
title: "Migrating from webpack to esbuild"
description: "The simplicity and efficiency of esbuild is unparalleled"
pubDate: 2024-11-22
tags: ["js"]
heroImage: "https://u.cubeupload.com/serenevoid/x78oOS.jpg"
---
## Pre-Bundlers Era
In earlier days, when web was simpler and light, javascript was inlined with the
web pages or was imported as a monolithic file. This was perfect for pages with
small logics or minimal moving parts.

As web became more complex, people started importing dependencies to the script
and imported them prior to importing their custom scripts on the web page. This
was the beginning of heavier websites. Importing more dependencies created code
clashes and managing all dependencies by manual intervention was becoming tedious.

As the web complexity started increasing with more and more, it was time to find
a solution to manage web dependencies and scripts in an easier way. 

## Enter JS Bundlers
Javascript Bundlers are tools that takes an entry point script, maps all dependencies
as provided in the script and then generate a single js script that can be then
deployed with your web page. JS Bundlers combined with CSS Preprocessors and other
plugins made the web what it is today.

### [Browserify](https://browserify.org/)
![browserify-logo](https://github.com/browserify/browserify/blob/master/assets/logo.png)
One of the first popular bundlers that is still being used today in some legacy projects
is browserify. It took the modular JS files and transpiled them to be compatible with
the browser. It is an old project and is not used in modern projects. With browserify,
developers made workflow scripts with [gulp.js](https://gulpjs.com/) to bundle and generate
all the files necessary to deploy a project.

### [Webpack](https://webpack.js.org/)
![webpack-logo](https://webpack.js.org/assets/icon-square-big.svg)
Webpack is a more developed build system that has been under use for a long time now.
It overthrowed Browserify + Gulp build system with it's rich plugin ecosystem.
There are over hundreds of webpack plugins (Official and community plugins) that
are available for use.

### [Esbuild](https://esbuild.github.io/)
![esbuild-logo](https://github.com/evanw/esbuild/raw/main/images/wordmark-dark.svg)
Even though webpack was a very efficient build tool that sped up javascript bundling,
it was slow with larger projects. This was mostly because webpack was written in
javascript. So an attempt was made to create a bundler with a faster programming
language and esbuild was born.

Esbuild is developed with the Go programming language and is focused on speed of
javascript transpiling. It does not provide type checking but we can use typescript
compiler along with esbuild for typescript projects. Esbuild is well known for it's
use in Vite build system.

### Other bundlers
Many other bundlers are still being created to rival esbuild. Some of the notable ones
are [Turbo](https://turbo.build/), [Rspack](https://rspack.dev/) and [swc](https://swc.rs/).

## Testing esbuild in an old repository with legacy code
The performance gains advertised by esbuild was so unreal to me. So I decided to
use it on a proprietary legacy codebase at work. We were planning to upgrade the
node version anyway. With my mentor's permission, we decided to try out esbuild
for bundling the project. This project had two repositories. One used webpack and the
other was bundled with gulp and browserify. I changed both repositories' bundlers
to esbuild.

The process took a few weeks to complete but the final performance comparison
blew me off. The change in bundling time was drastically reduced by using esbuild.
And configuring esbuild was so much easier when compared with the old implementation.

### Performance Results
#### Development

|       |    project1|  project2|
|-------|------------|----------|
|webpack|  1m 28.617s|   34.653s|
|esbuild|      4.743s|    2.250s|

#### Production

|       |    project1|  project2|
|-------|------------|----------|
|webpack|  2m 17.917s|   31.486s|
|esbuild|      2.148s|    1.774s|

### Observations

1. The build time of the projects are reduced significantly with the new esbuild
environment.
2. The Production builds take even less time to build than Development builds with esbuild while in case of webpack, Production builds take longer to build that Development. This could be due to generation of source maps in esbuild's case.


Overall, it was fun to play with JS bundlers and learning how complex JS projects are
bundled.
