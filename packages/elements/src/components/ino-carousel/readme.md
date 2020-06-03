# ino-carousel



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                         | Type      | Default     |
| ---------------------- | ------------------------ | ------------------------------------------------------------------- | --------- | ----------- |
| `inoAutoplay`          | `ino-autoplay`           | Enables autoplay which causes slides to be changed automatically    | `boolean` | `false`     |
| `inoDisableAnimation`  | `ino-disable-animation`  | Disables the slide animation                                        | `boolean` | `false`     |
| `inoHideButtons`       | `ino-hide-buttons`       | Hides the arrow buttons                                             | `boolean` | `false`     |
| `inoInfinite`          | `ino-infinite`           | Restarts playback from the first slide upon reaching the last slide | `boolean` | `false`     |
| `inoInterludeDuration` | `ino-interlude-duration` | Sets the intermission between two slides (Unit: ms)                 | `number`  | `5000`      |
| `inoReversePlayback`   | `ino-reverse-playback`   | Enables reverse playback of the slides                              | `boolean` | `false`     |
| `value`                | `value`                  | Optional group value to manually manage the displayed slide         | `any`     | `undefined` |


## CSS Custom Properties

| Name                                | Description                                |
| ----------------------------------- | ------------------------------------------ |
| `--ino-carousel-animation-duration` | sets the duration of the animation (in ms) |
| `--ino-carousel-icon-color`         | sets the color of the navigation buttons   |


## Dependencies

### Depends on

- [ino-icon-button](../ino-icon-button)

### Graph
```mermaid
graph TD;
  ino-carousel --> ino-icon-button
  ino-icon-button --> ino-icon
  style ino-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
