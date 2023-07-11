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
            border: '#59697D',
            shadow: '#BDC3CB4D',
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
        border: '#BDC3CB',
        shadow: '#59697D4D',
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
    p: {
        fontFamily: '$display',
        weight: '500',
        lineHeight: '20px',
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
    width: '161px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
});

export const DropdownHeader = styled('button', {
    height: '44px',
    maxWidth: '161px',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    justify: 'space-between',
    padding: '5px 12px',
    backgroundColor: '$primary',
    display: 'flex',
    alignItems: 'center',
    img: {
        width: '20px',
        height: '20px',
        aspectRatio: '1 / 1',
        filter: '$filter-icon',
        marginLeft: 'auto',
    },
    p: {
        color: '$accent',
        margin: 0,
        textAlign: 'center',
        maxWidth: '133px',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    '&:hover': {
        backgroundColor: '$secondary',
    },
});

export const DropdownHeaderClosed = styled(DropdownHeader, {
    borderColor: '$tertiary',
});


export const DropdownHeaderOpened = styled(DropdownHeader, {
    borderColor: '$border',
});

export const DropdownOptionList = styled('div', {
    minWidth: 'max-content',
    marginTop: '11px',
    height: 'auto',
    borderRadius: '4px',
    backgroundColor: '$primary',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    boxShadow: '0 2px 3px 0px $shadow',
    /** Weird stuff on storybook */
    'button + button': {
        marginLeft: '0',
    },
});

export const DropdownOption = styled('button', {
    height: '36px',
    padding: '5px 12px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    background: 'none',
    cursor: 'pointer',
    p: {
        color: '$accent',
        textAlign: 'center',
        fontFamily: '$display',
    },
    '&:hover': {
        backgroundColor: '$secondary',
    },
});
