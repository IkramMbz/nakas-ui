![](/assets/media/img/logo.png)

# Nakas UI

[![Release v0.2.0](https://img.shields.io/badge/release-v0.2.0-white)](https://github.com/IkramMbz/nakas-ui/blob/main/README.md#installation) [![Nakas Suite](assets/media/img/nakas-suite.svg)](https://mbechezi.fr/#nakas-suite) [![Nakas Suite](assets/media/img/license-mit.svg)](https://github.com/IkramMbz/nakas-ui/blob/main/LICENSE) [![Node.js](assets/media/img/nodejs.svg)](https://nodejs.org/) [![TypeScript](assets/media/img/typescript.svg)](https://www.typescriptlang.org/) [![Frontend Next](assets/media/img/nextjs.svg)](https://nextjs.org/) [![Frontend React](assets/media/img/react.svg)](https://reactjs.org/) [![Design System](assets/media/img/design-system.svg)](https://ui.nakas.fr/) [![Accessibility](assets/media/img/accessibility.svg)](https://www.w3.org/WAI/)

**Nakas UI** is a lightweight UI library for building consistent, accessible, and themeable interfaces aligned with the Nakas design system.

🟣**Note:** Nakas UI is currently in the testing phase and is not yet available on npm. It will be released soon.

For more details, see the full documentation: [https://ui.nakas.fr](https://ui.nakas.fr)

## Table of Contents
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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
npm install https://github.com/IkramMbz/nakas-ui
```

## Usage

Import components into your React/Next project like:

```tsx
import { Button } from "nakas-ui";

export default function App() {
  return <Button>Welcome to Nakas UI</Button>;
}
```

## Contributing

All components and features are under active development and may change. External contributions are not open at this time, but we plan to welcome community contributions in the future.  

## License

Nakas UI is licensed under the [MIT License](https://github.com/IkramMbz/nakas-ui/blob/main/LICENSE).
