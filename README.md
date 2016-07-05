# PostCSS Filter Tint [![Build Status][ci-img]][ci]

[PostCSS] plugin to add tint filter to element.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/alexlibby/postcss-filter-tint.svg
[ci]:      https://travis-ci.org/alexlibby/postcss-filter-tint

```css
Input:
.foo {
    filter: tint(1, 200);
}
```

```css
Output:
.foo {
  filter: sepia(1) hue-rotate(200deg);
}
```

## Usage

```js
postcss([ require('postcss-filter-tint') ])
```
It is recommended that you use Autoprefixer to add vendor prefixes.

See [PostCSS] docs for examples for your environment.
