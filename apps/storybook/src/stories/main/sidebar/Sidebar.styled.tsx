import { createStitches, createTheme, defaultThemeMap, globalCss } from '@stitches/react';

// Default colors aka Light Theme
const { styled } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    filter: 'filters',
  },
  theme: {
    colors: {
      primary: '#F8F8F9',
      secondary: '#EDEEF1',
      tertiary: '#DADEE2',
      accent: '#323E4D',
      'warning-background': '#FCDADA',
      'warning-text': '#EF4444',
      'terms-and-copyright': '#7A8797',
      link: '#5193F5',
    },
    fonts: {
      display: 'TT Commons Pro Variable, Segoe UI, Arial, sans-serif',
    },
    filters: {
      'filter-icon':
        'brightness(0) saturate(100%) invert(21%) sepia(9%) saturate(1606%) hue-rotate(174deg) brightness(93%) contrast(87%)',
      'filter-red':
        'brightness(0) saturate(100%) invert(47%) sepia(71%) saturate(5831%) hue-rotate(340deg) brightness(101%) contrast(88%)',
    },
  },
});

// Dark Theme
export const darkTheme = createTheme('dark', {
  colors: {
    primary: '#242C37',
    secondary: '#323E4D',
    tertiary: '#404F63',
    accent: '#EEF0F2',
  },
  filters: {
    'filter-icon':
      'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(34%) hue-rotate(170deg) brightness(108%) contrast(92%)',
  },
});

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

export const SidebarNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '290px',
  minHeight: '100%',
  maxHeight: '100vh',
  backgroundColor: '$primary',
});

export const SidebarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.25rem',
  textAlign: 'center',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '$tertiary',
  img: {
    width: '1.5rem',
    aspectRatio: '1 / 1',
    cursor: 'pointer',
    filter: '$filter-icon',
  },
  '#icon': {
    width: '2rem',
    height: 'auto',
    cursor: 'initial',
    filter: 'none',
  },
  ':first-child': {
    marginRight: 'auto',
  },
  ':last-child': {
    marginLeft: 'auto',
  },
  h1: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '$accent',
    margin: 0,
    textAlign: 'center',
  },
});

export const SidebarLinkList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '.5rem 1rem',
  overflowY: 'auto',
  /** Weird stuff on storybook */
  'button + button': {
    marginLeft: '0',
  },
});

export const SidebarLink = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  padding: '.75rem',
  border: 'none',
  outline: 'none',
  background: 'none',
  color: '$accent',
  cursor: 'pointer',
  '&:hover, &:active, &:focus': {
    borderRadius: '.5rem',
    outline: 'none',
    backgroundColor: '$secondary',
  },
  img: {
    width: '1.5rem',
    aspectRatio: '1/1',
    filter: '$filter-icon',
  },
});

export const SidebarFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1.5rem 1.25rem',
  margin: 'auto 0 0',
  textAlign: 'left',
  '#sidebar-profile-picture': {
    width: '2rem',
    aspectRatio: '1 / 1',
    borderRadius: '100%',
    filter: 'none',
  },
  img: {
    width: '1.5rem',
    filter: '$filter-icon',
  },
});

export const SidebarProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$accent',
  gap: '.75rem',
  '& > div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
  },
});

export const Logout = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '.75rem',
  borderRadius: '.5rem',
  background: 'none',
  border: '1px solid $tertiary',
  outline: 'none',
  color: '$accent',
  padding: '.625rem 0',
  cursor: 'pointer',
  img: {
    width: '1.5rem',
    aspectRatio: '1 / 1',
    filter: '$filter-icon',
  },
});

export const LogoutConfirmation = styled(Logout, {
  background: '$warning-background',
  color: '$warning-text',
  img: {
    filter: '$filter-red',
  },
});

export const TermsAndConditions = styled('p', {
  fontSize: '12px',
  color: '$terms-and-copyright',
  lineHeight: '1rem',
  a: {
    color: '$link',
  },
});

export const Copyright = styled('p', {
  fontSize: '12px',
  color: '$terms-and-copyright',
});

export const SidebarMini = styled(SidebarNav, {
  width: '87px',
});

export const SidebarLinkMini = styled(SidebarLink, {
  justifyContent: 'center',
  position: 'relative',
});

export const SidebarFooterMini = styled(SidebarFooter, {
  gap: '0.5rem',
  /** Weird stuff on storybook */
  'button + button': {
    marginLeft: '0',
  },
});

export const LogoutConfirmationMini = styled(LogoutConfirmation, {
  position: 'relative',
  '&:focus::before': {
    content: '',
    position: 'absolute',
    width: '.5rem',
    aspectRatio: '1 / 1',
    left: 'calc(100% + 1.25rem)',
    backgroundColor: '$primary',
    transform: 'rotate(45deg)',
  },
  '&:focus::after': {
    content: 'Are you sure?',
    position: 'absolute',
    left: 'calc(100% + 1.5rem)',
    backgroundColor: '$primary',
    padding: '1rem 2rem',
    width: 'max-content',
    borderRadius: '.5rem',
    color: '$accent',
  },
});
