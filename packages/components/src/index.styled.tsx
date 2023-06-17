import { globalCss } from '@stitches/react';

// Global styles
export const globalStyles = globalCss({
  '@font-face': {
    fontStyle: 'normal',
    fontFamily: 'TT Commons Pro Variable',
    fontDisplay: 'optional',
    src: "url('apps/storybook/src/assets/fonts/TT_Commons_Pro_Variable.woff2') format('woff2')",
  },
  html: {
    fontFamily: '$display',
  },
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  div: {
    width: '100%',
  },
  button: {
    cursor: 'pointer',
    fontSize: '16px',
  },
});