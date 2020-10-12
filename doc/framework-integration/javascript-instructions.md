# Integrate with JavaScript (as Web Components)

> We set up a demo project to show you how to integrate the components into any website. Scroll down to see the Stackblitz.

## 0) Prepare your Project

Before using `@inovex.de/elements`, you should make sure that your current setup works and boots properly.
If this is the case, proceed to the next step.

## 1) Install or Integrate `@inovex.de/elements`

> Hint: The components provided in this package work out-of-the box and are shipped with a preloader. You do not have to import the components manually as the preloader will lazy load the components you use. Hence, if you for instance only use `<ino-button>`, the loader only requests the portions of the package which are needed to render the button.

There are two ways to add the inovex elements to your project. Either by loading them via a `script` tag from a central server or by downloading them via npm and adding them to your build process. It is your choice whether you want to use a package manager or the `script` tag.

There are some rules of thumb if you do not know which option better suits your project.

Use the `script` tag if...

* ... you just want to play around with our elements.
* ... you have a small website which does not use any library or framework.

Use the npm package manager if...

* ... you already started building a single page application.
* ... you plan to migrate a static website to a single page application.
* ... you plan to start a new project.

### a) Install the Package

Add the package `@inovex.de/elements` to your project using `yarn` or `npm`:

#### Instructions for npm:

```sh
$ npm install @inovex.de/elements --save
```

#### Instructions for Yarn:

```sh
$ yarn add @inovex.de/elements
```

### b) Integrate via script tag

> Hint: As soon as we're open source, you have to add the links to [JSDlv](https://www.jsdelivr.com/)

To load the components at runtime, you need to insert the following code fragment. Make sure that the script tag is set on each web page the user can visit on your website. For most of the websites it should be sufficient to add the tag to the `index.html` file:


```html
<!-- Modern Browsers -->
<script type="module" src="https://elements.inovex.de/dist/v1.0.0/inovex-elements/inovex-elements.esm.js"></script>

<!-- Older Browsers -->
<script nomodule="" src="https://elements.inovex.de/dist/v1.0.0/inovex-elements/inovex-elements.js"></script>
```

#### I do not want to pin to a concrete version, do you provide a link to the latest release?

Yes, we provide a link to our latest release, but we strongly recommend to not use these links in production since the application can easily break at any time. It is a best practice to pin to a version number to ensure that the application does not break unexpectedly.

> Things always break when you do not expect them to. Hence, we strongly recommend to pin to a specific version number.

However, for testing purposes, and if you just want to play around with the elements, you can always replace the version number with `latest`:

```html
<script type="module" src="https://elements.inovex.de/dist/latest/inovex-elements/inovex-elements.esm.js"></script>
```

### 2) Use the Components

> A hint on the icons: The elements loader automatically imports the icons. You do not have to import
> them manually.

You can now use the components on your website in the same way as you would use any native HTML element. To help you getting started, we created a [simple todo app](https://stackblitz.com/edit/ino-elements-js-example?embed=1&file=index.js) for you to play around with.
