# linaria-shorthands

## Installation

```js
npm install --dev linaria-shorthands
// or
yarn add --dev linaria-shorthands
// or
pnpm add --dev linaria-shorthands
```

## Introduction

When using `@linaria/atomic`
you should always use
CSS Longhand Properties.
This Package provides a set of functions to
write them easy.

The following Shorthands are available:

1. [`margin`](#margin)
2. [`padding`](#padding)

## Examples

The following examples are using the `css` tag but they also
work with the `styled` tag.

> **Note**
> You can also use the default export provided by `@theisso/shorthands`

```ts
import {css} from '@linaria/atomic';
import shorthands from 'linaria-shorthands';

const style = css`
  ${shorthands.margin('1px', '2px', '3px', '4px')}
  ${shorthands.padding('1px', '2px', '3px', '4px')}
`;
```

### `margin`

```ts
import {css} from '@linaria/atomic';
import {margin} from 'linaria-shorthands';

const style = css`
  ${margin('1px', '2px', '3px', '4px')}
  ${margin('1px', '2px', '3px')}
  ${margin('1px', '2px')}
  ${margin('1px')}
`;
```

### `padding`

```ts
import {css} from '@linaria/atomic';
import {padding} from 'linaria-shorthands';

const style = css`
  ${padding('1px', '2px', '3px', '4px')}
  ${padding('1px', '2px', '3px')}
  ${padding('1px', '2px')}
  ${padding('1px')}
`;
```

## Credits

This Package is highly inspired by the `shorthands` functions from [griffel](https://griffel.js.org/).
