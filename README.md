# linaria-shorthands

## Installation

```sh
npm install --save-dev linaria-shorthands
# or
yarn add --dev linaria-shorthands
# or
pnpm add --save-dev linaria-shorthands
```

## Introduction

When using `@linaria/atomic`
you should always use
CSS Longhand Properties.
This Package provides a set of functions to
write them easy.

### Typescript

This package provides full typescript support with [`csstype`](https://github.com/frenic/csstype).

```ts
import {css} from '@linaria/atomic';
import {borderColor} from 'linaria-shorthands';

const style = css`
  ${borderColor(0)}
  :x: Argument of type '0' is not assignable to parameter of type 'BorderColor'.
`;
```

### Available Shorthands

1. [`margin`](#margin)
2. [`padding`](#padding)
3. [`border`](#border)
4. [`borderBottom`](#borderbottom)
5. [`borderTop`](#bordertop)
6. [`borderLeft`](#borderleft)
7. [`borderRight`](#borderright)
8. [`borderStyle`](#borderstyle)
9. [`borderColor`](#bordercolor)
10. [`borderWidth`](#borderwidth)

## Examples

> **Note**
> The following examples are using the `css` tag but they also
> work with the `styled` tag.

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

### `border`

```ts
import {css} from '@linaria/atomic';
import {border} from 'linaria-shorthands';

const style = css`
  ${border('1px', 'solid', 'red')}
  ${border('1px', 'solid')}
  ${border('1px')}
`;
```

### `borderBottom`

```ts
import {css} from '@linaria/atomic';
import {borderBottom} from 'linaria-shorthands';

const style = css`
  ${borderBottom('1px', 'solid', 'red')}
  ${borderBottom('1px', 'solid')}
  ${borderBottom('1px')}
`;
```

### `borderTop`

```ts
import {css} from '@linaria/atomic';
import {borderTop} from 'linaria-shorthands';

const style = css`
  ${borderTop('1px', 'solid', 'red')}
  ${borderTop('1px', 'solid')}
  ${borderTop('1px')}
`;
```

### `borderLeft`

```ts
import {css} from '@linaria/atomic';
import {borderLeft} from 'linaria-shorthands';

const style = css`
  ${borderLeft('1px', 'solid', 'red')}
  ${borderLeft('1px', 'solid')}
  ${borderLeft('1px')}
`;
```

### `borderRight`

```ts
import {css} from '@linaria/atomic';
import {borderRight} from 'linaria-shorthands';

const style = css`
  ${borderRight('1px', 'solid', 'red')}
  ${borderRight('1px', 'solid')}
  ${borderRight('1px')}
`;
```

### `borderStyle`

```ts
import {css} from '@linaria/atomic';
import {borderStyle} from 'linaria-shorthands';

const style = css`
  ${borderStyle('solid', 'dashed', 'dotted', 'double')}
  ${borderStyle('solid', 'dashed', 'dotted')}
  ${borderStyle('solid', 'dashed')}
  ${borderStyle('solid')}
`;
```

### `borderColor`

```ts
import {css} from '@linaria/atomic';
import {borderColor} from 'linaria-shorthands';

const style = css`
  ${borderColor('red', 'blue', 'green', 'yellow')}
  ${borderColor('red', 'blue', 'green')}
  ${borderColor('red', 'blue')}
  ${borderColor('red')}
`;
```

### `borderWidth`

```ts
import {css} from '@linaria/atomic';
import {borderWidth} from 'linaria-shorthands';

const style = css`
  ${borderWidth('1px', 'blue', 'green', 'yellow')}
  ${borderWidth('1px', 'blue', 'green')}
  ${borderWidth('1px', 'blue')}
  ${borderWidth('1px')}
`;
```

## Credits

This Package is highly inspired by the `shorthands` functions from [griffel](https://griffel.js.org/).
