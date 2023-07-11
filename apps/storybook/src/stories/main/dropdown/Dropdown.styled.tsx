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

export const DropdownContent = styled('nav', {
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    // position: 'fixed',
    top: 0,
    left: 0,
    width: '175px',
    minHeight: 'auto',
});

export const DropdownHeader = styled('div', {
    border: '1px grey solid',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.75rem',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '$primary',
    img: {
        width: '1.5rem',
        aspectRatio: '1 / 1',
        filter: '$filter-icon',
    },
    ':first-child': {
        marginRight: 'auto',
    },
    ':last-child': {
        marginLeft: 'auto',
    },
    p: {
        color: '$accent',
        margin: 0,
        textAlign: 'center',
        cursor: 'pointer',
    },
    '&:hover, &:active, &:focus': {
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '$secondary',
        border: '1px $accent solid',
    },
});

export const DropdownOptionList = styled('div', {
    marginTop: '11px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    backgroundColor: '$primary',
    borderRadius: '4px',
    boxShadow: '0 2px 1px .5px #9E9E9E',
    p: {
        color: '$accent',
        margin: 0,
        textAlign: 'center',
        cursor: 'pointer',
    },
    /** Weird stuff on storybook */
    'button + button': {
        marginLeft: '0',
    },
});

export const DropdownOption = styled('button', {
    display: 'flex',
    alignItems: 'center',
    padding: '.75rem',
    border: 'none',
    outline: 'none',
    background: 'none',
    color: '$accent',
    cursor: 'pointer',
    p: {
        color: '$accent',
        margin: 0,
        textAlign: 'center',
        cursor: 'pointer',
    },
    '&:hover, &:active, &:focus': {
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '$secondary',
    },
});
