# Quick Start - Clone and try the Project

If you know what is going on or just want to see how the project runs on your local machine, checkout the repo, and start your local copy of it.

## Prerequisites

We use [`mise`](https://mise.jdx.dev/) to manage the local environment dependencies such as Node.js and `pnpm`.

1. Install `mise` according to its [official documentation](https://mise.jdx.dev/getting-started.html).
2. Install the necessary tools defined in the project:
   ```bash
   mise install
   ```
   _Note: Ensure `mise` is properly hooked into your shell so `node` and `pnpm` are available in your PATH._

## Getting Started

1. Open a terminal and switch into a folder where you want to copy the project code in.
2. Clone the project:
   ```bash
   git clone https://github.com/inovex/elements.git
   ```
3. Switch into the project root folder:
   ```bash
   cd elements
   ```
4. Install all dependencies:
   ```bash
   pnpm install
   ```
5. Start the Storybook playground and component dev server:
   ```bash
   pnpm start:storybook
   ```
6. You have successfully started the project 🎉

Now open the button component in the IDE of your choice. This is the file `packages/elements/src/components/ino-button/ino-button.tsx`. Edit something within the `render` method on the lower part of the file. Save your changes and switch back to your browser. Select the `ino-button` entry from within the side panel. You will see your changes.

Happy coding!
