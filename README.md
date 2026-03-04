![](/src/assets/media/img/logo.png)

# Nakas UI by GlitchKids

[![Release v0.8.0](https://img.shields.io/badge/release-v0.2.0-white)](https://github.com/IkramMbz/nakas-ui/blob/main/README.md#installation) [![Nakas Suite](src/assets/media/img/nakas-suite.svg)](https://mbechezi.fr/#nakas-suite) [![Glitch Kids](https://img.shields.io/badge/glitch-kids-black)](https://glitchkids.space/) [![License](src/assets/media/img/license-mit.svg)](https://github.com/IkramMbz/nakas-ui/blob/main/LICENSE) [![Node.js](src/assets/media/img/nodejs.svg)](https://nodejs.org/) [![TypeScript](https://img.shields.io/badge/frontend-typescript-blue)](https://www.typescriptlang.org/) [![Frontend React](src/assets/media/img/react.svg)](https://reactjs.org/) [![Frontend Svelte](https://img.shields.io/badge/frontend-svelte-ff3e00)](https://svelte.dev/) [![Design System](src/assets/media/img/design-system.svg)](https://ui.nakas.fr/) [![Accessibility](src/assets/media/img/accessibility.svg)](https://www.w3.org/WAI/)

**Nakas UI** is a lightweight UI library for building consistent, accessible, modular, and consistent interfaces aligned with the Nakas design system. The suite supports multiple frameworks: **React** and **Svelte**.

🟣**Note:** Nakas UI is currently in the testing phase and is not yet available on npm. It will be released soon.

For full documentation, examples, and installation guides, see: [Official Documentation](https://ui.nakas.fr)

## Table of Contents

- [Projects and Usage](#projects-and-submodules)
- [Key Features](#key-features)
- [Installation](#installation)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)

## Projects and Usage

The Nakas UI Suite is structured across multiple repositories to manage each framework separately:

| Repository                                                         | Description                        | Documentation                                                    |
| ------------------------------------------------------------------ | ---------------------------------- | ---------------------------------------------------------------- |
| **[nakas-ui](https://github.com/IkramMbz/nakas-ui)**               | Wrapper and components for React.  | [React Docs](https://ui.nakas.fr/?path=/story/hello-page--main)  |
| **[nakas-ui-svelte](https://github.com/IkramMbz/nakas-ui-svelte)** | Wrapper and components for Svelte. | [Svelte Docs](https://ui.nakas.fr/?path=/story/hello-page--main) |

Each sub-project exposes the same components, adapted to its framework. The API remains consistent for easier multi-framework adoption.

## Key Features

- Reusable and modular UI components
- Consistent, configurable visual themes
- Lightweight and customizable
- Built for React and TypeScript
- Full TypeScript support with type declarations
- Code Quality & Linting (ESLint & Prettier tested)
- Detailed documentation and examples

For more details, see the full documentation: [https://ui.nakas.fr](https://ui.nakas.fr)

## Installation

To use Nakas UI in your project, your environment must meet the following minimum requirements:

- **Node.js** ≥ 18 (for full ESM support and modern module resolution)
- **Package Manager:** `pnpm` ≥ 7 (or `npm` / `yarn`, scripts are tested with pnpm)

Initialize your project if you haven't already:

```bash
npm init -y
```

Then install the library directly from GitHub (since it's not yet published on npm):

```bash
pnpm add -D IkramMbz/nakas-ui#path:/dist/unocss
```

## Storybook

This repository includes the **full Storybook setup**, which documents every component for all supported frameworks (React, Svelte, Vue).

Storybook can be used to:

- **Visualize components interactively** in a local environment
- **Deploy your own online version** of the component library (fully open-source)

Start Storybook locally

```bash
pnpm storybook
```

Build static Storybook for deployment

```bash
pnpm build-storybook
```

## Contributing

All components and features are under active development and may change. External contributions are not open at this time, but we plan to welcome community contributions in the future.

## License

Nakas UI is licensed under the [MIT License](https://github.com/IkramMbz/nakas-ui/blob/main/LICENSE).
