import { createStitches, createTheme, globalCss, styled } from '@stitches/react';

interface SidebarProps {
  theme?: 'dark' | 'light';
}

const lightTheme = {
  bg: '#F8F8F9',
  text: '#323E4D',
  secondary: '#EDEEF1',
};

const darkTheme = {
  bg: '#242C37',
  secondary: '#323E4D',
  text: '#EEF0F2',
};

const SidebarNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem 1.5rem',
  gap: '1rem',
  width: '290px',
  height: '1024px',
  '*': {
    boxSizing: 'border-box',
  },
  '#icon': {
    height: '2rem',
  },
  svg: {
    height: '1.25rem',
    aspectRatio: '1 / 1',
  },
  div: {
    width: '100%',
  },
  fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
  variants: {
    theme: {
      dark: {
        backgroundColor: darkTheme.bg,
        color: darkTheme.text,
        stroke: darkTheme.text,
        $$hoverBackground: darkTheme.secondary,
      },
      light: {
        backgroundColor: lightTheme.bg,
        color: lightTheme.text,
        stroke: lightTheme.text,
        $$hoverBackground: lightTheme.secondary,
      },
    },
  },
});

const SidebarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 0',
  /** Make sure that text is always in the center
   * despite logo and svg having different width
   */
  '*': {
    display: 'flex',
    flex: '0 1 1',
    justifyContent: 'center',
    margin: '0',
  },
  ':first-child': {
    marginRight: 'auto',
  },
  ':last-child': {
    marginLeft: 'auto',
  },
  svg: {
    width: '1.25rem',
    aspectRatio: '1 / 1',
  },
});

const SidebarLinkList = styled('div', {});

const SidebarLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  padding: '.5rem .75rem',
  svg: {
    width: '1.5rem',
    aspectRatio: '1 / 1',
  },
  '&:hover': {
    borderRadius: '.5rem',
    backgroundColor: '$$hoverBackground'
  },
});

export const Sidebar = ({ theme }: SidebarProps) => {
  return (
    <SidebarNav theme={theme}>
      <SidebarHeader>
        <img id='icon' src='src/assets/cselectives-icon.png' alt='icon' />
        <h3>Uni-lectives</h3>
        <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path d='M7 1V19' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>
      </SidebarHeader>
      <SidebarLinkList>
        <SidebarLink>
          <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <p>Browse Courses</p>
        </SidebarLink>
      </SidebarLinkList>
    </SidebarNav>
  );
};
