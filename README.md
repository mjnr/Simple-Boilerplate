# ![Simple Boilerplate](/assets/images/logo.png)

A frontend boilerplate to build professional web projects easily and quickly.

## Features

#### Automation
- [Gulp](http://gulpjs.com/) - Task Runner.
- [Bower](http://bower.io/) - Package Manager.
- [Browsersync](http://www.browsersync.io/) - Watch project changes and updates browsers.

#### HTML
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Template Engine.

#### CSS
- [Stylus](http://stylus-lang.com/) - Preprocessor.
- [Rucksack](https://simplaio.github.io/rucksack/) - Postcss Features.
- [Jeet](http://jeet.gs/) - Grid System.
- [Rupture](http://jenius.github.io/rupture/) - Media Queries.

#### Javascript
- [Browserify](http://browserify.org/) - CommonJS Modules.
- [BabelJS](https://babeljs.io/) - Javascript compiler.
- [Karma](http://karma-runner.github.io/) - Javascript Test Runner.
- [Jasmine](http://jasmine.github.io/) - Javascript Test Framework.

## Instalation

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

## Folder Structure
Basically the development files are in the **src** folder and compiled files go directly to **assets**.

## View Structure
The view structure is based on Nunjucks Template Engine features and it generate .html files. See more [here](https://mozilla.github.io/nunjucks/templating.html).

#### Default Layout
Its possible [extends](https://mozilla.github.io/nunjucks/templating.html#extends) the default [layout]("src/views/layouts/default.html") to create pages.
```html
{# Variables #}
{% block variables %}

	{% set host = "http://localhost:3000" %}
	{% set page = "" %}
	{% set assets = "/assets/" %}
	{% set title = "Home page" %}
	{% set description = "Lorem ipsum dolor sit amet, consectetur." %}
	{% set keywords = "lorem, ipsum, dolor" %}
	{% set scripts = [] %}

{% endblock %}

{# Imports #}
{% import "macros/forms.html"	as form %}
{% from "macros/image.html"	import img %}

<!DOCTYPE html><!--[if IE 8]><html class="ie8" lang="pt-br"><![endif]-->
<!--[if IE 9]><html lang="pt-br" class="ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="pt-br"><!--<![endif]-->

	<head>

		<title>{{ title }} | Simple Boilerplate</title>

		<!-- [ Includes metatags ]-->
		{% include "includes/metatags.html" %}

		<!-- [ Includes CSS files ]-->
		{% include "includes/styles.html" %}

		<!-- [ Includes Javascript files ]-->
		{% include "includes/scripts.html" %}

	</head>

<body>

	<!-- [ Includes Header ]-->
	{% include "includes/header.html" %}

	<!-- [ Includes Content ]-->
	{% block content %}{% endblock %}

	<!-- [ Includes Footer ]-->
	{% include "includes/footer.html" %}

</body>
</html>

```

#### Page
```html
{% extends "layouts/default.html" %}

{% block variables %}

	{{ super() }}

	{% set title = "Home Page" %}
	{% set description = "Lorem ipsum dolor sit amet, consectetur." %}
	{% set keywords = "lorem, ipsum, dolor" %}

	{%
		set scripts = ["home"]
	%}

{% endblock %}

{% block content %}

	<main role="main" class="content container">
    <!-- content -->
	</main>

{% endblock %}
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

#### Config
- **[variables](src/styles/config/variables.styl)**<br/>
  File to define project variables, alias and breakpoints. See more [here](http://stylus-lang.com/docs/variables.html).

- **[functions](src/styles/config/functions.styl)**<br/>
  Stylus functions. See more [here](http://stylus-lang.com/docs/functions.html).

---

#### Vendors
- **[normalize](src/styles/vendors/normalize.styl)**

---

#### Base
- **[base](src/styles/base/base.styl)**<br/>
  Base style rules. See more [here](https://smacss.com/book/type-base).

- **[fonts](src/styles/base/fonts.styl)**<br/>
  File to define project @font-face. See more [here](http://simplaio.github.io/rucksack/docs/#font-src).

- **[helpers](src/styles/base/helpers.styl)**<br/>
  Classes used to override values ​​when necessary. See more
  [here](http://rscss.io/helpers.html)

---

#### Components
- **[button](src/styles/components/button.styl)**
- **[navigation](src/styles/components/navigation.styl)**
- **[content-block](src/styles/components/content-block.styl)**

Inspired by [RSCSS Components](http://rscss.io/components.html)

## Javascript structure

It is currently possible to create multiple bundles with Browserify and write modules using ES6 features.

#### Module sample
```javascript
/*
* Class sample
*/

class ZodiacSaint {

	constructor(name, cloth) {
		this._name = name;
		this._cloth = cloth;
	}

	sayName() {
		return `My name is ${this._name} and I am the ${this._cloth} saint`;
	}

}

class BronzeSaint extends ZodiacSaint {

	constructor(name, cloth) {
		super(name, `Bronze ${cloth}`);
	}

	sayName() {
		return super.sayName();
	}

}

export { ZodiacSaint, BronzeSaint }
```

#### Bundle sample
```javascript
import { ZodiacSaint, BronzeSaint } from "./modules/my-module";

let saintIkki = new BronzeSaint("Ikki", "Phoenix");
saintIkki.sayName();
// My name is Ikki and I am the Bronze Phoenix saint

```

## Available Tasks
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
