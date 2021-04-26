import { Meta } from "@storybook/addon-docs/blocks";
import './style.scss';

<Meta title="Docs/Styleguide/Typography" />


# Typography

For typography you should always care about size, spacing and height of the font.

## Lato

This is the default font.

<div class="font font--lato font--lato-example">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
  abcdefghijklmnopqrstuvwxyz<br>
  123456789!"§$%&/()=?
</div>

## Headings

<style>
  .h1 {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #4B4C5B;
    letter-spacing: 0.35px;
    line-height: 36px;
  }

  .h2 {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 500;
    font-size: 28px;
    color: #4B4C5B;
    letter-spacing: 0.35px;
    line-height: 36px;
  }
</style>

```
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
```

<div class="h1">Heading Level 1</div>
<br>
<div class="h2">Heading Level 2</div>

## Inline Elements

### Link

<style>
  .link {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #3D40F5;
    letter-spacing: 0;
  }
</style>

```
<a href="#">This is a link</a>
```

<a class="link" href="#">This is a link</a>

### Strong, bold

<style>
  .strong,
  .bold {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 700;
    text-align: left;
    color: #4B4C5B;
    font-size: 16px;
    letter-spacing: 0.25px;
  }
</style>

```
<strong>This is a strong text</strong> or
<b>This is a bold text</b>
```

<strong class="strong">This is strong text</strong><br>
<b class="bold">This is a bold text</b>

### em

<style>
  .em {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #4B4C5B;
    letter-spacing: 0.25px;
  }
</style>

```
<em>This is an emphasized text</em>
```

<em class="em">This is an emphasized text</em>

### i

<style>
  .i {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #4B4C5B;
    letter-spacing: 0.25px;
  }
</style>

```
<i>This is an italic text</i>
```

<i class="i">This is an italic text</i>

### small

<style>
  .small {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #4B4C5B;
    letter-spacing: 0.25px;
  }
</style>

```
<small>This is a small text</small>
```

<small class="small">This is a small text</small>

### abbr

<style>
  .abbr {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #4B4C5B;
    letter-spacing: 0.25px;
  }
</style>

```
<abbr>This is an abbreviated text</abbr>
```

<abbr class="abbr">This is an abbreviated text</abbr>

### Paragraph

<style>
  .paragraph {
    font-family: 'Lato', Helvetica, Verdana, sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #636477;
    letter-spacing: 0.25px;
    line-height: 28px;
  }
</style>

```
<p>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui...</p>
```

<p class="paragraph">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet quam et libero dictum, vitae dignissim leo eleifend. In in turpis turpis. Quisque justo turpis, vestibulum non enim nec, tempor mollis mi. Sed vel tristique quam.</p>
