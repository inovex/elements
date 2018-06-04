# ino-icon
A light icon component for texts and other components.

### Usage
The component can be used as follows:

```html
<ino-icon ino-icon="<string>"></ino-icon>
```

The component inherits stylings like the text size of the parent element. For custom stylings set css properties on this element.

### Add further icons
The Icons are (so far) hard-coded as svg files in the `ino-icon.tsx`. Thus, new icons have to be added inline. Don't forget to update the `ino-icon` attribute documentation afterwards.



<!-- Auto Generated Below -->


## Properties

#### inoIcon

string

The name of the icon of this element.
Can either be `download3`, `equalizer`, `info`, `question`,
`search`, `user`, `users`, `select-arrows` or `cancel`.


## Attributes

#### ino-icon

string

The name of the icon of this element.
Can either be `download3`, `equalizer`, `info`, `question`,
`search`, `user`, `users`, `select-arrows` or `cancel`.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
