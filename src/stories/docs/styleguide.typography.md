# Typography

For typography you should always care about size, spacing and height of the font.

<style>
  @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700|Source+Code+Pro:400,500|Source+Sans+Pro:400,600');

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .font {
    font-weight: 400;
    color: #4B4C5B;
  }

  .font--dosis {
    font-family: 'Dosis', sans-serif;
  }

  .font--dosis-example {
    font-size: 32px;
    letter-spacing: 4.92px;
    line-height: 40px;
  }

  .font--sans {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .font--sans-example {
    font-size: 17px;
    letter-spacing: 2.62px;
    line-height: 24px;
  }

  .font--code {
    font-family: 'Source Code Pro', monospace;
  }

  .font--code-example {
    font-size: 14px;
    letter-spacing: 2.15px;
    line-height: 24px;
  }
</style>

## Dosis

Use for headlines, taglines, on buttons, links and navigation elements.

<div class="font font--dosis font--dosis-example">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
  abcdefghijklmnopqrstuvwxyz<br>
  123456789!"§$%&/()=?
</div>

## Source Sans Pro

Use for body text, descriptions and as default.

<div class="font font--sans font--sans-example">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
  abcdefghijklmnopqrstuvwxyz<br>
  123456789!"§$%&/()=?
</div>

## Source Code Pro

Use for code samples and technical values.

<div class="font font--code font--code-example">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
  abcdefghijklmnopqrstuvwxyz<br>
  123456789!"§$%&/()=?
</div>

## Headings

<style>
  .h1 {
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #4B4C5B;
    letter-spacing: 0.35px;
    line-height: 36px;
  }

  .h2 {
    font-family: 'Dosis', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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
    font-family: 'Source Sans Pro', sans-serif;
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

## SASS Mixins / Styles

```css
// @import 'colors.scss'; -> "Styleguide" -> "Colors"

@import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700|Source+Code+Pro:400,500|Source+Sans+Pro:400,600,700');

@mixin fontSmooting() {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@mixin font-SourceSansPro {
  @include fontSmooting();
  font-family: 'Source Sans Pro', sans-serif;
}

@mixin font-Dosis {
  @include fontSmooting();
  font-family: 'Dosis', sans-serif;
}

@mixin font-SourceCodePro {
  @include fontSmooting();
  font-family: 'Source Code Pro', monospace;
}

//
// Use these font mixins only
//
@mixin font-SourceSansPro-Regular {
  @include font-SourceSansPro();
  font-weight: 400;
}

@mixin font-SourceSansPro-SemiBold {
  @include font-SourceSansPro();
  font-weight: 600;
}

@mixin font-SourceSansPro-Bold {
  @include font-SourceSansPro();
  font-weight: 700;
}

@mixin font-Dosis-Light {
  @include font-Dosis();
  font-weight: 300;
}

@mixin font-Dosis-Regular {
  @include font-Dosis();
  font-weight: 400;
}

@mixin font-Dosis-Medium {
  @include font-Dosis();
  font-weight: 500;
}

@mixin font-Dosis-SemiBold {
  @include font-Dosis();
  font-weight: 600;
}

@mixin font-Dosis-Bold {
  @include font-Dosis();
  font-weight: 700;
}

@mixin font-SourceCodePro-Regular {
  @include font-SourceCodePro();
  font-weight: 400;
}

@mixin font-SourceCodePro-Medium {
  @include font-SourceCodePro();
  font-weight: 500;
}

//
// Headings
//
h1,
h2 {
  color: $dark;
  letter-spacing: 0.35px;
  line-height: 36px;
}

h1 {
  @include font-Dosis-Regular();
  font-size: 36px;
}

h2 {
  @include font-Dosis-Medium();
  font-size: 28px;
}

//
// Text, paragraphs, ...
//
p,
a,
em,
i,
small,
abbr,
code {
  @include font-SourceSansPro-Regular();
}

p,
strong,
b,
em,
i,
small,
abbr {
  letter-spacing: 0.25px;
}

strong,
b,
em,
i,
small,
abbr,
code {
  color: $dark;
}

p {
  font-size: 17px;
  color: $body-phrase;
  line-height: 28px;
}

a {
  font-size: 16px;
  color: $tertiary;
  letter-spacing: 0;
}

strong,
b {
  @include font-SourceSansPro-Bold();
  font-size: 16px;
}

em {
  font-size: 16px;
}

i {
  font-size: 16px;
}

small {
  font-size: 13px;
}

abbr {
  font-size: 16px;
}

code {
  font-size: 16px;
  letter-spacing: 0;
}
```
