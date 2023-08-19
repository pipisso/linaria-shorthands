# Contribution Guidelines

## Prerequisites

- Make sure you have `Node` installed.
  If not get it [here](https://nodejs.org/de/download).

- This project uses `pnpm` as its package manager. Install it if you haven't already:

  ```sh
  npm install -g pnpm
  ```

## Fork, Clone & Install

Start by forking this [package](https://github.com/pipisso/linaria-shorthands) to your GitHub account. Then clone your fork and install dependencies:

```sh
git clone https://github.com/<github name>/linaria-shorthands.git
cd linaria-shorthand
pnpm install
```

## Implement your changes

1. Create a branch for your Contribution

   ```bash
   git checkout -b <branch name>
   ```

2. Implement your changes

3. Check that your code follows the project's style guidelines by running:

   ```bash
   pnpm lint
   ```

   ```bash
   pnpm format:check
   ```

   ```bash
   pnpm test
   ```

4. Push your new feature

   ```bash
   git push
   ```

5. Now open a pull request with a clear title and description.
