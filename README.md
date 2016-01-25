![Simple Boilerplate](/assets/images/logo.png)

---

A frontend boilerplate to build professional web projects easily and quickly.

### Features

#### Automation
- [Gulp](http://gulpjs.com/) - Task Runner.
- [Bower](http://bower.io/) - Package Manager.
- [Browsersync](http://www.browsersync.io/) - Watch project changes and updates browsers.

#### HTML
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Template Engine.

#### CSS
- [Stylus](http://learnboost.github.io/stylus/) - Preprocessor.
- [Rucksack](https://simplaio.github.io/rucksack/) - Postcss Features.
- [Jeet](http://jeet.gs/) - Grid System.
- [Rupture](http://jenius.github.io/rupture/) - Media Queries.

#### Javascript
- [Browserify](http://browserify.org/) - CommonJS Modules.
- [BabelJS](https://babeljs.io/) - Javascript compiler.
- [Karma](http://karma-runner.github.io/) - Javascript Test Runner.
- [Jasmine](http://jasmine.github.io/) - Javascript Test Framework.

### Instalation

You will need to install [NodeJS](http://nodejs.org/).

```sh
# Clone the repository.
$ git clone https://github.com/mjnr/Simple-Boilerplate.git project
$ cd project

# Install Gulp and Bower, if you haven't already.
$ npm install -g gulp bower

# Installs all the dependencies.
$ npm install

# Installs all packages.
$ bower install

# Start a mini server to view the project and watch their changes on http://localhost:3000/
$ gulp
```

### Folder Structure

Basically the development files are in the src folder and compiled files go directly to assets.

```sh
├── assets
│   ├── css
│   │   ├── main.css
│   ├── fonts
│   ├── images
│   │   ├── favicon
│   │   ├── logo.png
│   ├── javascript
│   │   ├── build.js
├── src
│   ├── images
│   │   ├── favicon
│   │   ├── logo.png
│   ├── scripts
│   │   ├── modules
│   │      ├── my-module.js
│   │   ├── main.js
│   ├── styles
│   │   ├── base
│   │   │   ├── base.styl
│   │   │   ├── fonts.styl
│   │   ├── config
│   │   │   ├── functions.styl
│   │   │   ├── variables.styl
│   │   ├── layout
│   │   │   ├── l-footer.styl
│   │   │   ├── l-header.styl
│   │   ├── modules
│   │   │   ├── animations.styl
│   │   │   ├── container.styl
│   │   │   ├── forms.styl
│   │   ├── vendor
│   │   │   ├── normalize.styl
│   │   ├── main.styl
│   ├── views
|   │   ├── macros
│   │   │   ├── image.html
│   │   │   ├── forms.html
│   │   ├── includes
│   │   │   ├── footer.html
│   │   │   ├── header.html
│   │   │   ├── metatags.html
│   │   │   ├── scripts.html
│   │   │   ├── styles.html
│   │   ├── layouts
│   │   │   ├── default.html
│   │   ├── pages
│   │   │   ├── contact
│   │   │       ├── index.html
│   │   │   ├── index.html
├── tests
│   ├── module.spec.js
├── .csslintrc
├── .editorconfig
├── .gitignore
├── bower.json
├── gulpfile.js
├── karma.conf.js
├── contact
│   ├── index.html
├── index.html
├── package.json
├── README.md
```
### Available Tasks
- `gulp` or `gulp watch` Start watch for changes and server with Browsersync.
- `gulp build` Run all development tasks
- `gulp build --production` Run all development tasks and minify all files for production.
- `gulp build:javascript` Create and lint Javascript bundle.
- `gulp build:styles` Create and lint css files.
- `gulp compile:template` Compile Nunjucks template.
- `gulp compile:styles` Compile Stylus.
- `gulp optimize:images` Optimize all images.
- `gulp lint:javascript` Lint Javascript files.
- `gulp bundle:javascript` Create Javascript bundle.
