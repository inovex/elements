# Integrate with JavaScript (as Web Components)

> We set up a demo project for a plain setup only working with native browser APIs to show you how to integrate the components into any website. Scroll down to see the Stackblitz.

## 0) Prepare your project

First of all you should make sure your current setup without the inovex elements work properly.
If that's the case you can proceed.

## 1) Install or Integrate `@inovex/elements`

> Hint: The components provided in this package work out-of-the box shipped with a preloader, you don't need to import the components manually. The preloader will lazy load components you use. So if you only use `<ino-button>`, the loader only requests the portions of the package which are needed to render the button.

There are two ways to add the inovex elements to your project. By loading them via a `script` tag from a central server or by downloading them via npm and adding them to your build process. You've the choice whether you want to use a package manager or the the `script` tag.

There are some rule of thumb if you don't know which option better fits for your project.

Use the `script` tag if...

* ... you just want to play around with our elements.
* ... you have a small website which doesn't use any library or framework.

Use the npm package manager if...

* ... you already started building a single page application.
* ... you plan to migrate a static website to a single page application.
* ... you plan to start a new project.

### a) Install the package

We're not yet on npm, so you need to set a npm config before you can install the package. The following command
will update your local npm config to always request `@inovex` prefixed packages from our private registry and not
from npmjs.org. To do so, copy the following command into your terminal and execute it:

```sh
$ npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the package `@inovex/elements` to your project using `yarn` or `npm`:

#### Instructions for npm:

```sh
$ npm install @inovex/elements --save
```

#### Instructions for Yarn:

```sh
$ yarn add @inovex/elements
```

### b) Integrate via script tag

> Hint: As soon as we're open source, we need to add links to [JSDlv](https://www.jsdelivr.com/)

To load the components at runtime, you need to insert the following line of code. Make sure that the script tag is set on each web page the user can visit on your web site. For the most of the web sites it should be enough to put this in `index.html`:

```
<script src="https://elements.inovex.io/dist/v0.15.1/inovex-elements.js"></script>
```

Before we proceed, we need to clarify what's going on here:

#### Why don't we need a `type="module"` / ES6 Module import?

We do not need this import, because the bootstrap script within the provided scripts already contains two versions to an ES5 script bundle and an ES6 Module. It depends on the clients browser if the browser understands the new ES6 Module or only the old ES5 script. So in short: The browser loads ES6 Module if he can understand ES6 Module and if not he'll fall back to the ES5 bundle. ES6 Module allows you to write import statements inside of your web pages JavaScript code. Read more about [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

#### I don't want to pin to a concrete version, do you provide a link to the latest release?

Yes, we provide a link to our latest release. But we strongly encourage you to not use this links for production. Anything at anytime can break. It's always a good thing to pin to a version number to ensure that nothing unexpectedly breaks.

> Things always break in times when you don't expect it. So please pin to a specific version number.

But if you just play around with the elements or want to test things, you can always replace the version number with `latest`:

* `https://elements.inovex.io/dist/latest/inovex-elements.js`

### 2) Use the Components

> A hint on icons: The elements loader automatically imports the icons. You don't have to import
> them manually.

You can now use the components on your web site the same way as you would use any native HTML element. To help you getting started, we created a simple todo app where you can get in touch and play around:

<iframe width="100%" height="600px" src="https://stackblitz.com/edit/ino-elements-js-example?embed=1&file=index.js" />
