# ino-card



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                        | Type      | Default |
| ------------------ | ------------------- | ------------------------------------------------------------------ | --------- | ------- |
| `disableElevation` | `disable-elevation` | Disables the hover effect if true                                  | `boolean` | `false` |
| `selected`         | `selected`          | Selects the card and displays a check mark icon on top of the card | `boolean` | `false` |


## Slots

| Slot        | Description                                                                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"content"` | For card content                                                                                                                                                                                                     |
| `"footer"`  | For the element to be placed in the card footer  The ino-card is a flexible and extensible component. It features a header, content, and footer slot that can be used to fully customize the appearance of the card. |
| `"header"`  | For the element to be placed in the card header                                                                                                                                                                      |


## CSS Custom Properties

| Name                                    | Description                            |
| --------------------------------------- | -------------------------------------- |
| `--ino-card-background-color`           | background color of the card           |
| `--ino-card-background-color--active`   | background color of the card if active |
| `--ino-card-background-color--focus`    | background color of the card on focus  |
| `--ino-card-background-color--hover`    | background color of the card on hover  |
| `--ino-card-border-color`               | border color of the card               |
| `--ino-card-border-thickness`           | thickness of the border                |
| `--ino-card-checkmark-background-color` | background color of the check mark     |
| `--ino-card-checkmark-color`            | check mark color                       |


## Dependencies

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-card --> ino-icon
  style ino-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
