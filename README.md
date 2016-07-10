# ![Simple Boilerplate](/assets/images/logo.png)

A frontend boilerplate to build professional web projects easily and quickly.

## Features
- [NPM Scripts](https://docs.npmjs.com/misc/scripts) - Build Scripts.
- [Browsersync](http://www.browsersync.io/) - Watch project changes and updates browsers.
- [Pug](http://jade-lang.com/) - Template Engine.
- [Critical](https://github.com/addyosmani/critical) - Add inline critical path css to html pages.
- [Stylus](http://stylus-lang.com/) - Preprocessor.
- [Rucksack](https://simplaio.github.io/rucksack/) - Postcss Features.
- [Jeet](http://jeet.gs/) - Grid System.
- [Rupture](http://jenius.github.io/rupture/) - Media Queries.
- [Webpack](https://webpack.github.io/) - Module Bundler.

## Instalation

You will need to install [NodeJS](http://nodejs.org/).

```sh
# Clone the repository.
$ git clone https://github.com/mjnr/Simple-Boilerplate.git project
$ cd project

# Installs all the dependencies.
$ npm install

# Start a mini server to view the project and watch their changes on http://localhost:3000/
$ npm start
```

## Folder Structure
Basically the development files are in the **dev** folder and compiled files go directly to **dist**.

## View Structure
The view structure is based on Pug Template Engine features and it generate .html files. See more [here](http://jade-lang.com/reference/).

#### Default Layout
Its possible [extends](http://jade-lang.com/reference/extends/) the default [layout]("dev/views/layouts/default.pug") to create pages.

#### Data file
**[options.json]("./options.json")**
```json
{
	"sitename": "Simple Boilerplate",
	"basedir": "./dev/views/",
	"root": "/",
	"analyticsCode": "UA-XXXXX-X",
	"pages": {
		"home": {
			"title": "Simple Boilerplate - Just a simple frontend boilerplate",
			"description": "A simple frontend boilerplate to build professional web projects easily and quickly.",
			"keywords": "boilerplate, node, frontend, pug, stylus, webpack"
		}
	}
}

```

```jade
block vars
	- var page;

doctype html
html(lang="en")
	head
		title #{pages[page].title}
		meta(charset="UTF-8")
		meta(http-equiv="X-UA-Compatible" content="IE=edge")
		meta(name="viewport" content="width=device-width, initial-scale=1.0")
		
		block metatags
			include /includes/metatags

		block styles
			include /includes/styles
	body
		main.main
			.container
				block content

		block scripts
			include /includes/scripts

		block analytics
			include /includes/analytics

```

#### Page
```jade
extends /layouts/default

block vars
	- var page = "home"

block content
	section.content-section
		h1.title
			| Simple Boilerplate

```

## Stylesheet Structure
The style structure is a blend of several CSS architecture concepts, with emphasis on [SMACSS](https://smacss.com/book) and [RSCSS](http://rscss.io/) . Currently, it is divided into:

```stylus
// Config
// -------------------------
@require 'config/*'

// Vendors
// -------------------------
@require 'vendors/*'

// Base
// -------------------------
@require 'base/*'

// Components
// -------------------------
@require 'components/*'

// Layouts
// -------------------------
@require 'jeet'
@require 'layouts/*'
```

## Javascript structure

It is currently possible to create multiple bundles with Browserify and write modules using ES6 features.

#### Module sample
```javascript
export default function() {
	console.log('Simple Boilerplate is working!');
}
```

#### Bundle sample
```javascript
import myModule from './modules/my-module.js';

myModule();
```

## Useful Scripts
- `npm start` Start watch for changes and server with Browsersync.
- `npm run build:dev` Run all dev tasks
- `npm run build:prod` Run all dev tasks and minify all files for production.
- `npm run optimize:images` Optimizes all images.
- `npm run build:views` Compile Pug template to raw html.
- `npm run build:styles` Compile Stylus.
- `npm run lint:styles` Lints Styles.
- `npm run build:scripts` Lint Javascript modules and creates and bundle.
