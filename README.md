**Looking for SASS-based `vui-dropdown`?** It's [over here](https://github.com/Brightspace/valence-ui-dropdown/tree/sass).

# d2l-dropdown
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/dropdown)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org)-based web component for dropdown/flyouts.

## Installation

`d2l-dropdown` can be installed from [Bower][bower-url]:
```shell
bower install d2l-dropdown
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the opener and content components as needed:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
</head>
```

### Dropdown Openers

#### Generic Opener

`d2l-dropdown` is a generic opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`) enabling alternate opener implementation using existing elements/components. Provide and indicate your own opener element with the class attribute value `d2l-dropdown-opener`.  Wire-up is automatic.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown>
  <button class="d2l-dropdown-opener">Open!</button>
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown>
```

If the dropdown is initially empty when it's opened, the dropdown pointer will not be positioned correctly.  In such cases, the `no-auto-open` attribute may be added to the opener, enabling you to take control of when the dropdown is actually opened:

```html
<d2l-dropdown no-auto-open>
  ...
</d2l-dropdown>
```

```javascript
dropdown.addEventListener('click', function() {
  // fetch some content
  ...
  // take control of when the dropdown is actually opened
  dropdown.toggleOpen();
});
```

#### Button Opener

`d2l-dropdown-button` is a `d2l-button` opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for the button and content component as needed.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-button.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-button {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-button text="Open!" primary>
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown-button>
```

* `primary` - optionally render button as primary button

#### Subtle Button Opener

`d2l-dropdown-button-subtle` is a `d2l-button-subtle` opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for the button and content component as needed.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-button-subtle.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-button-subtle {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-button-subtle text="Open!">
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown-button-subtle>
```

#### Context Menu Opener

`d2l-dropdown-context-menu` is a simple/minimal opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for accessibility and content component as needed.  Optionally, specify the `translucent` attribute for busy/rich backgrounds.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-context-menu.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-context-menu {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-context-menu text="Open!">
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown-context-menu>
```

#### More Opener

`d2l-dropdown-more` is a simple/minimal opener for dropdown content (`d2l-dropdown-content` or `d2l-dropdown-menu`).  Provide `text` for accessibility and content component as needed.  Optionally, specify the `translucent` attribute for busy/rich backgrounds.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-more.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-more {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-more text="Open!">
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown-more>
```

#### Visible on Ancestor Behavior

For busy/rich backgrounds, the `d2l-dropdown-more` and `d2l-dropdown-context-menu` openers support the [VisibleOnAncestorBehavior](https://github.com/Brightspace/d2l-polymer-behaviors-ui) that can be enabled by specifying the `visible-on-ancestor` attribute.  See [VisibleOnAncestorBehavior](https://github.com/Brightspace/d2l-polymer-behaviors-ui) for more details on configuring that behavior.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-more.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-more {
        margin-left: 15px;
      }
      .translucent-container {
        position: relative;
        height: 150px;
      }
      .translucent-container > img {
        border-radius: 6px;
        height: 100%;
        max-width: 400px;
        position: absolute;
        width: 100%;
      }
      .translucent-container > d2l-dropdown-context-menu,
      .translucent-container > d2l-dropdown-more {
        padding-right: 0;
        margin-top: 12px;
        margin-left: 12px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '180px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<div class="translucent-container d2l-visible-on-ancestor-target">
  <img alt="" src="https://s.brightspace.com/course-images/images/e4fbb461-4cd9-4512-8304-44f2c2b741f1/tile-low-density-max-size.jpg"/>
  <d2l-dropdown-more text="Open!" translucent visible-on-ancestor>
    <d2l-dropdown-content>
      Some content...
    </d2l-dropdown-content>
  </d2l-dropdown-more>
</div>
```


### Dropdown Contents

#### Generic Content

`d2l-dropdown-content` is a generic container for dropdown content.  It provides behavior such as sizing,  positioning, and managing focus gain/loss.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dropdown-button.html">
    <link rel="import" href="d2l-dropdown-content.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-button {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '210px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-button text="Open!" primary>
  <d2l-dropdown-content min-width="150" max-width="400">
    <a href="https://www.google.com">Google</a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="http://www.desire2learn.com">D2L</a>
  </d2l-dropdown-content>
</d2l-dropdown-button>
```

* `min-width` (number) - optionally override default min-width
* `max-width` (number) - optionally override default max-width
* `no-auto-fit` - optionally opt out of auto-sizing
* `no-padding` - optionally render with no padding
* `no-pointer` - optionally render without a pointer
* `render-content` - optionally stamp contents into DOM immediately
* `vertical-offset` - optionally provide custom offset, positive or negative
* `align` (enum) - optionally align dropdown. Valid values are "start","end". If not set, the dropdown will attempt be centred
* `boundary` (object) - optionally provide boundaries to where the dropdown will appear. Valid properties are "above", "below", "left", "right"

```javascript
// triggered when dropdown opened
content.addEventListener('d2l-dropdown-open', () => { ... });

// triggered when dropdown closed
content.addEventListener('d2l-dropdown-close', () => { ... });
```

#### Menu Content

`d2l-dropdown-menu` is a container for a [d2l-menu](https://github.com/Brightspace/d2l-menu-ui) component.  It provides behavior in addition to the basic behavior of `d2l-dropdown-content` such as closing the menu when menu items are selected, resetting to the root of nested menus when reopening, etc.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="../d2l-menu/d2l-menu.html">
    <link rel="import" href="d2l-dropdown-button.html">
    <link rel="import" href="d2l-dropdown-menu.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-dropdown-button {
        margin-left: 15px;
      }
    </style>
    <script>
      document.body.addEventListener('d2l-dropdown-open', function() { document.body.style.height = '320px'; });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-dropdown-button text="Open!" primary>
  <d2l-dropdown-menu id="dropdown">
    <d2l-menu label="Astronomy">
      <d2l-menu-item text="Introduction" id="first-item" ></d2l-menu-item>
      <d2l-menu-item text="Searching for the Heavens "></d2l-menu-item>
      <d2l-menu-item text="The Solar System">
        <d2l-menu>
          <d2l-menu-item text="Formation"></d2l-menu-item>
          <d2l-menu-item text="Modern Solar System"></d2l-menu-item>
          <d2l-menu-item text="Future Solar System"></d2l-menu-item>
          <d2l-menu-item text="The Planets"></d2l-menu-item>
          <d2l-menu-item text="The Sun"></d2l-menu-item>
          <d2l-menu-item text="Solar &amp; Lunar Eclipses"></d2l-menu-item>
          <d2l-menu-item text="Meteors &amp; Meteorites"></d2l-menu-item>
          <d2l-menu-item text="Asteroids"></d2l-menu-item>
          <d2l-menu-item text="Comets"></d2l-menu-item>
        </d2l-menu>
      </d2l-menu-item>
      <d2l-menu-item text="Stars &amp; Galaxies"></d2l-menu-item>
      <d2l-menu-item text="The Night Sky"></d2l-menu-item>
      <d2l-menu-item text="The Universe" id="last-item"></d2l-menu-item>
    </d2l-menu>
  </d2l-dropdown-menu>
</d2l-dropdown-button>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-dropdown
[bower-image]: https://badge.fury.io/bo/d2l-dropdown.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/dropdown
[ci-image]: https://travis-ci.org/BrightspaceUI/dropdown.svg?branch=master

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.
