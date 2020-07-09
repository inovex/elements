# Color Codes

These shades will represent the brand in graphical elements, texts, syntax, backgrounds and ui elements.

<style>
  .color-wrapper {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }

  .color-rect {
    height: 48px;
    width: 48px;
  }

  .color-hex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
  }
</style>

## Inovex

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #003C7E"></div>
  <div class="color-hex" style="color: #003C7E">#003C7E</div>
</div>

## Primary

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #3D40F5"></div>
  <div class="color-hex" style="color: #3D40F5">#3D40F5, Base</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #5D60F7"></div>
  <div class="color-hex" style="color: #5D60F7">#5D60F7, Light</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #0D10F3"></div>
  <div class="color-hex" style="color: #0D10F3">#0D10F3, Dark</div>
</div>

## Secondary

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #9CCD00"></div>
  <div class="color-hex" style="color: #9CCD00">#9CCD00, Base</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #BBD962"></div>
  <div class="color-hex" style="color: #BBD962">#BBD962, Light</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #93BF00"></div>
  <div class="color-hex" style="color: #93BF00">#93BF00, Dark</div>
</div>

## Error
<div class="color-wrapper">
  <div class="color-rect" style="background-color: #E00051"></div>
  <div class="color-hex" style="color: #E00051">#E00051</div>
</div>

## Light
<div class="color-wrapper">
  <div class="color-rect" style="background-color: #C1C1C1"></div>
  <div class="color-hex" style="color: #C1C1C1">#C1C1C1</div>
</div>

## Dark
<div class="color-wrapper">
  <div class="color-rect" style="background-color: #777777"></div>
  <div class="color-hex" style="color: #777777">#777777</div>
</div>

## SASS Variables

```scss
$inovex: #003c7e;

$primary: #3d40f5;
$primary-light: #5d60f7;
$primary-dark: #0d10f3;
$primary-contrast: #fff;

$secondary: #9ccd00;
$secondary-light: #bbd962;
$secondary-dark: #93bf00;
$secondary-contrast: #fff;

$error: #eb003b;

$light: #c1c1c1;
$dark: #777777;
```
