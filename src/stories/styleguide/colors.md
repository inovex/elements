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

## Primary

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #003C7E"></div>
  <div class="color-hex" style="color: #003C7E">#003C7E, Base</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #004A9C"></div>
  <div class="color-hex" style="color: #004A9C">#004A9C, Light</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #002E62"></div>
  <div class="color-hex" style="color: #004A9C">#002E62, Dark</div>
</div>

## Secondary

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #9CCD00"></div>
  <div class="color-hex" style="color: #9CCD00">#9CCD00, Base</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #BFF020"></div>
  <div class="color-hex" style="color: #BFF020">#BFF020, Light</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #2E7D32"></div>
  <div class="color-hex" style="color: #2E7D32">#2E7D32, Dark</div>
</div>

## Tertiary

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #00B0F0"></div>
  <div class="color-hex" style="color: #00B0F0">#00B0F0, Base</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #10BCFE"></div>
  <div class="color-hex" style="color: #10BCFE">#10BCFE, Light</div>
</div>

<div class="color-wrapper">
  <div class="color-rect" style="background-color: #006A92"></div>
  <div class="color-hex" style="color: #006A92">#006A92, Dark</div>
</div>


## SASS Variables

```scss
$primary:           #003C7E;
$primary-light:     #004A9C;
$primary-dark:      #002E62;

$secondary:         #9CCD00;
$secondary-light:   #BFF020;
$secondary-dark:    #2E7D32;

$tertiary:          #00B0F0;
$tertiary-light:    #10BCFE;
$tertiary-dark:     #006A92;

$sucess:            $secondary;
$warning:           #FFDE03;
$error:             #E00051;

$light:             #c1c1c1;
$dark:              #777;
 ```
