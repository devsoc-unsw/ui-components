import { createStitches, createTheme, globalCss } from '@stitches/react';

// Default colors
export const { styled } = createStitches({
  theme: {
    colors: {
      // Background colours
      background: '#F8F8F9',
      backgroundDocument: '#EDEEF1',
      // Text colours
      textPrimary: '#323E4D',
      textSecondary: '#59697D',
      textDisabled: '#6C798B',
      textDisabledSofter: '#DADEE2',
      // Border colours
      border: '#DADEE2',
      borderFocused: '#59697D',
      // Button colours
      buttonPrimary: '#3A76F8',
      buttonHovered: '#346ADF',
      buttonFocused: '#2953AE',
      buttonDisabled: '#EDEEF1',
      buttonText: '#F8F8F9',
      // Error colours
      error: '#EF4444',
      // Link colours
      link: '#3A76F8',
      linkHovered: '#2953AE',
      // Animation colours
      animationLoadingPrimary: '#6C798B',
      animationLoadingSecondary: '#EDEEF1',
    },

    fontSizes: {
      display: '57.3px',
      // Heading
      heading1Large: '47.8px',
      heading1Small: '39.8px',
      heading2Large: '39.8px',
      heading2Small: '33.2px',
      heading3Large: '33.2px',
      heading3Small: '27.6px',
      heading4Large: '27.6px',
      heading4Small: '23px',
      heading5Large: '23px',
      heading5Small: '19.2px',
      heading6Large: '19.2px',
      heading6Small: '16px',
      // Body
      bodyLarge: '16px',
      bodySmall: '13.3px',
      // Captions
      captionLarge: '13.33px',
      captionSmall: '12px',
      // Footer
      footer: '12px',
    },

    fontWeights: {
      display: '700',
      // Heading
      heading1: '785.44',
      headingOther: '700',
      // Body, caption and footer
      medium: '500',
      regular: '400',
    },
  },
});

// Dark theme button colours
export const darkTheme = createTheme({
  colors: {
    // Background colours
    background: '#242C37',
    backgroundDocument: '#323E4D',
    // Text colours
    textPrimary: '#EEF0F2',
    textSecondary: '#7A8797',
    textDisabled: '#9BA5B1',
    textDisabledSofter: '#404F63',
    // Border colours
    border: '#404F63',
    borderFocused: '#BDC3CB',
    // Button colours
    buttonDisabled: '#323E4D',
    // Error colours
    error: '#F47C7C',
    // Link colours
    link: '#5193F5',
    // Animation colours
    animationLoadingPrimary: '#9BA5B1',
    animationLoadingSecondary: '#323E4D',
  },
});

// Global styles
export const globalStyles = globalCss({
  '@font-face': {
    fontStyle: 'normal',
    fontFamily: 'TT Commons Pro Variable',
    fontDisplay: 'optional',
    src: 'url("apps/storybook/src/assets/fonts/TT_Commons_Pro_Variable.woff2") format("woff2")',
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
