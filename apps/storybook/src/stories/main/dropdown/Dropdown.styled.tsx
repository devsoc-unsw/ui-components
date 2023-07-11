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
            shadow: '#BDC3CB4D',
            'opened-border': '#59697D',
            'disabled-background': '#F8F8F9',
            'disabled-text': '#6C798B',
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
        shadow: '#59697D4D',
        'opened-border': '#BDC3CB',
        'disabled-background': '#242C37',
        'disabled-text': '#9BA5B1',
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
        color: '$accent',
        textAlign: 'center',
        fontFamily: '$display',
        weight: '500',
        lineHeight: '20px',
        fontSize: '16px',
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
        padding: '5px 12px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '$secondary',
        },
        '&:disabled': {
            backgroundColor: '$disabled-background',
            color: '$disabled-text',
            cursor: 'none',
        },
    },
});

export const DropdownContent = styled('div', {
    width: '161px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
});

export const DropdownBox = styled('button', {
    height: '44px',
    maxWidth: '161px',
    backgroundColor: '$primary',
    justify: 'space-between',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    img: {
        width: '20px',
        height: '20px',
        aspectRatio: '1 / 1',
        filter: '$filter-icon',
        marginLeft: 'auto',
    },
    p: {
        maxWidth: '133px',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
});

export const DropdownBoxClosed = styled(DropdownBox, {
    borderColor: '$tertiary',
});

export const DropdownBoxOpened = styled(DropdownBox, {
    borderColor: '$opened-border',
});

export const DropdownOptionList = styled('div', {
    marginTop: '11px',
    height: 'auto',
    minWidth: 'max-content',
    backgroundColor: '$primary',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    /* idk why but storybook isn't showing
     * boxShadow with $shadow as the colour */
    // FIXME: $shadow
    boxShadow: '0 2px 3px 0px #59697D4D',
    /** Weird stuff on storybook */
    'button + button': {
        marginLeft: '0',
    },
});

export const DropdownOption = styled('button', {
    height: '36px',
    gap: '12px',
    border: 'none',
    outline: 'none',
    background: 'none',
});
