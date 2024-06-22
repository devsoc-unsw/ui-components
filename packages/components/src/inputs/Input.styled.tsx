import { createStitches, createTheme } from '@stitches/react';

// Default colors
export const { styled } = createStitches({
    theme: {
        colors: {
            background: '#F8F8F9',
            disabledBackground: '#EDEEF1',
            unfilledText: '#59697D',
            filledText: '#323E4D',
            disabledText: '#DADEE2',
            border: '#DADEE2',
            focusedBorder: '#4b5766',
            error: '#EF4444',
        },
    },
});

export const darkTheme = createTheme({
    colors: {
        background: '#242C37',
        disabledBackground: '#323E4D',
        unfilledText: '#7A8797',
        filledText: '#EEF0F2',
        disabledText: '#404F63',
        border: '#DADEE2',
        focusedBorder: '#BDC3CB',
        error: '#F47C7C',
    },
});

export const InputFieldWrapper = styled('div', {
    position: 'relative',
    width: 354,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
});

export const SmallInputFieldContainer = styled('input', {
    position: 'relative',
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: '$background',
    border: '1.5px solid $border',
    padding: '0px 15px',
    height: 30,
    width: '100%',
    gap: 6,
    color: '$filledText',
    cursor: 'pointer',

    '&:active': {
        borderColor: '$focusedBorder',
    },

    '&::placeholder': {
        color: '$unfilledText',
    },

    variants: {
        state: {
            default: {},
            disabled: {
                cursor: 'not-allowed',
                pointerEvents: 'none',
                backgroundColor: '$disabledBackground',
                '&::placeholder': {
                    color: '$disabledText',
                },
            },
            error: {
                color: '$error',
                cursor: 'pointer',
                borderColor: '$error',
                '&:focus, &:focus-within': {
                    color: '$filledText',
                    '&::placeholder': {
                        color: '$unfilledText',
                    },
                },
                '&::placeholder': {
                    color: '$error',
                },
            },
        },
    },

    defaultVariants: {
        state: 'default',
    },
});

export const InputFieldContainer = styled(SmallInputFieldContainer, {
    position: 'relative',
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: '$background',
    border: '1.5px solid $border',
    padding: '0px 15px',
    height: 45,
    width: '100%',
    gap: 6,
    color: '$filledText',
    cursor: 'pointer',

    '&:active': {
        borderColor: '$focusedBorder',
    },

    '&::placeholder': {
        color: '$unfilledText',
    },

    variants: {
        style: {
            text: {},
            password: {},
            icon: {
                paddingLeft: '49px'
            },
        },
        state: {
            default: {},
            disabled: {
                cursor: 'not-allowed',
                pointerEvents: 'none',
                backgroundColor: '$disabledBackground',
                '&::placeholder': {
                    color: '$disabledText',
                },
            },
            error: {
                color: '$error',
                cursor: 'pointer',
                borderColor: '$error',
                '&:focus, &:focus-within': {
                    color: '$filledText',
                    '&::placeholder': {
                        color: '$unfilledText',
                    },
                },
                '&::placeholder': {
                    color: '$error',
                },
            },
        },
    },

    defaultVariants: {
        style: 'default',
        state: 'default',
    },
});

export const LargeInputFieldContainer = styled(SmallInputFieldContainer, {
    height: 150,
    width: 354,
    justifyContent: 'flex-start',
    '&::placeholder': {
        bottom: 500,
    }
});

export const ErrorMessage = styled('div', {
    fontFamily: 'inherit',
    fontSize: 13.33,
    fontWeight: 500,
    color: '$error',
});

export const EyeIconContainer = styled('span', {
    height: 24,
    cursor: 'pointer',
    aspectRatio: 1,
    position: 'absolute',
    right: 15,
    top: 10,
    display: 'block',
});

export const UserIconContainer = styled('span', {
    height: 24,
    cursor: 'pointer',
    aspectRatio: 1,
    position: 'absolute',
    left: 15,
    top: 10,
    display: 'block',

    variants: {
        error: {
            true: {
                color: '$error',
                '& img': {
                    color: '$error',
                }
            },
        },
    },
});