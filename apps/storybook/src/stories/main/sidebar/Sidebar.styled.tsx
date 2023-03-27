import { styled } from '@stitches/react';

export const lightTheme = {
  bg: '#F8F8F9',
  text: '#323E4D',
  secondary: '#EDEEF1',
  border: '#DADEE2',
};

export const darkTheme = {
  bg: '#242C37',
  secondary: '#323E4D',
  text: '#EEF0F2',
  border: '#404F63',
};

export const SidebarNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '290px',
  height: '100%',
  '*': {
    margin: 0,
    boxSizing: 'border-box',
  },
  div: {
    width: '100%',
  },
  fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
  backgroundColor: '$$backgroundColor',
  variants: {
    theme: {
      dark: {
        $$backgroundColor: darkTheme.bg,
        $$textColor: darkTheme.text,
        $$hoverBackgroundColor: darkTheme.secondary,
        $$borderColor: darkTheme.border,
        $$filterIcon:
          'brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(34%) hue-rotate(170deg) brightness(108%) contrast(92%)',
      },
      light: {
        $$backgroundColor: lightTheme.bg,
        $$textColor: lightTheme.text,
        $$hoverBackgroundColor: lightTheme.secondary,
        $$borderColor: lightTheme.border,
        $$filterIcon:
          'brightness(0) saturate(100%) invert(21%) sepia(9%) saturate(1606%) hue-rotate(174deg) brightness(93%) contrast(87%)',
      },
    },
  },
});

export const SidebarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.25rem',
  textAlign: 'center',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '$$borderColor',
  '#icon': {
    width: '2rem',
    height: 'auto',
    filter: 'none',
    cursor: 'initial',
  },
  ':first-child': {
    marginRight: 'auto',
  },
  ':last-child': {
    marginLeft: 'auto',
  },
  img: {
    width: '1.5rem',
    aspectRatio: '1 / 1',
    filter: '$$filterIcon',
    cursor: 'pointer',
  },
  h1: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '$$textColor',
  },
});

export const SidebarLinkList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '.5rem 1rem',
});

export const SidebarLink = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  padding: '.75rem',
  border: 'none',
  outline: 'none',
  background: 'none',
  color: '$$textColor',
  cursor: 'pointer',
  '&:hover, &:active, &:focus': {
    borderRadius: '.5rem',
    backgroundColor: '$$hoverBackgroundColor',
  },
  img: {
    width: '1.5rem',
    aspectRatio: '1/1',
    filter: '$$filterIcon',
  },
});

export const SidebarFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1.5rem 1rem',
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
    filter: '$$filterIcon',
  },
});

export const SidebarProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$$textColor',
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
  border: '1px solid $$borderColor',
  outline: 'none',
  color: '$$textColor',
  padding: '.5rem 0',
  cursor: 'pointer',
  img: {
    width: '1.5rem',
    aspectRatio: '1 / 1',
    filter: '$$filterIcon',
  },
});

export const LogoutConfirmation = styled(Logout, {
  background: '#FCDADA',
  color: '#EF4444',
  img: {
    filter:
      'brightness(0) saturate(100%) invert(47%) sepia(71%) saturate(5831%) hue-rotate(340deg) brightness(101%) contrast(88%)',
  },
});

export const TermsAndConditions = styled('p', {
  fontSize: '12px',
  color: '#7A8797',
  lineHeight: '1rem',
  a: {
    color: '#5193F5',
  },
});

export const Copyright = styled('p', {
  fontSize: '12px',
  color: '#7A8797',
});

export const SidebarMini = styled(SidebarNav, {
  width: '87px',
});

export const SidebarLinkMini = styled(SidebarLink, {
  justifyContent: 'center',
  position: 'relative',
  'span::before': {
    content: '',
    width: '.5rem',
    aspectRatio: '1 / 1',
    position: 'absolute',
    // Put arrow on middle
    left: '-.25rem',
    top: 'calc(50% - .25rem)',
    backgroundColor: '$$backgroundColor',
    transform: 'rotate(45deg)',
  },
  span: {
    position: 'absolute',
    left: 'calc(100% + 1.5rem)',
    backgroundColor: '$$backgroundColor',
    padding: '1rem 1.5rem',
    borderRadius: '.5rem',
  },
});

export const SidebarFooterMini = styled(SidebarFooter, {
  gap: '0.5rem',
});

export const LogoutConfirmationMini = styled(LogoutConfirmation, {
  position: 'relative',
  '&:focus::before': {
    content: '',
    position: 'absolute',
    width: '.5rem',
    height: '.5rem',
    left: 'calc(100% + 1.25rem)',
    backgroundColor: '$$backgroundColor',
    transform: 'rotate(45deg)',
  },
  '&:focus::after': {
    content: 'Are you sure?',
    position: 'absolute',
    left: 'calc(100% + 1.5rem)',
    backgroundColor: '$$backgroundColor',
    padding: '1rem 2rem',
    width: 'max-content',
    borderRadius: '.5rem',
    color: '$$textColor',
  },
});
