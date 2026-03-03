import type { Preview } from '@storybook/html-vite';

import "../src/assets/styles/index.css";
import "../src/assets/styles/global.css";
import "../src/assets/styles/storybook.css";

window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  document.documentElement.classList.toggle('dark', e.matches);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Hello !", "Installation", "Theme", "Commons", "Layout", "Typography", "UI"],
      },
    },
    a11y: {
      test: 'todo',
    },
    darkMode: {
      current: 'system',
    },
  },
};

export default preview;
