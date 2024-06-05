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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
})

export const InputFieldContainer = styled('input', {  
    position: 'relative',
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: '$background',
    border: '1.5px solid $border',
    padding: '0px 15px 0px 15px',
    height: 45,
    width: 354,
    gap: 6,

    '&::placeholder': {
        color: '$unfilledText',
    },

    variants: {
        type: {
            default: {
                color: '$filledText',
                cursor: 'pointer',
                '&:active': {
                    borderColor: '$focusedBorder',
                },
            },
            password: {
                color: '$filledText',
                cursor: 'pointer',
                '&:active': {
                    borderColor: '$focusedBorder',
                },
            },
            icon: {
                color: '$filledText',
                cursor: 'pointer',
                '&:active': {
                    borderColor: '$focusedBorder',
                },
            }
        },
        state: {
            default: {},
            disabled: {
                cursor: 'not-allowed',          // currently doesnt show
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
        type: 'default',
        state: 'default',
    },
})

export const SmallInputFieldContainer = styled(InputFieldContainer, {
    height: 30,  
});

export const ErrorMessage = styled('div', {
    fontFamily: 'inherit',
    fontSize: '13.33px',
    fontWeight: 500,
    color: '$error',
})

export const IconContainer = styled('span', {
    position: 'absolute',
    right: '500px', /* Adjust to your preference */
    cursor: 'pointer',
})