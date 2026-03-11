# Contributing to inovex Elements

Hello, nice to meet you 👋

Thanks for your interest in contributing to this project to make it even better. This guide will help you understand how to get started quickly and jump right into coding.

## Quick Start

We use [`mise`](https://mise.jdx.dev/) for managing Node.js and package manager versions.

1. **Setup Environment**:

   ```bash
   # Make sure you have `mise` installed on your machine
   mise install
   ```

2. **Install Dependencies**:

   ```bash
   pnpm install
   ```

3. **Start Development Server**:
   ```bash
   pnpm start:storybook
   ```
   _This starts both the core components build in watch mode and the local Storybook documentation playground._

## Documentation & Architecture

To understand how our repository is structured and the rules we follow when developing components, please read our local documentation files:

- 🏗 [High Level Overview & Architecture](docs/architecture.md)
- 🚀 [Detailed Quick Start](docs/quick-start.md)
- 💻 [Developing Components Guide](docs/developing-components.md)
- 📝 [Commit Message Format](docs/commit-message-format.md)
- 📦 [Publishing & Versioning](docs/releasing.md)

## Submitting changes

Once your code is ready, ensure it meets our quality standards by running the quality control script:

```bash
pnpm qc
```

This will run linting, formatting, build, and tests.
If everything passes, you're ready to open a Pull Request!
