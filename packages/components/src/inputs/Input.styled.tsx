import { createStitches, createTheme } from '@stitches/react';

// Default colors
export const { styled } = createStitches({
    theme: {
        colors: {
            background: '#f8f8f9',
            disabled: '#edeef1',
            unfilledText: '#5f6e82',
            filledText: '#383c4c',
            disabledText: '#dadee2',
            border: '#aeb1b4',
            focusedBorder: '#4b5766',
            error: '#be3a3a',
        },
    },
});

export const darkTheme = createTheme({
    colors: {
        background: '##242c37',
        disabled: '#323e4d',
        unfilledText: '#7a8797',
        filledText: '#eef0f2',
        disabledText: '#404f63',
        border: '#404f63',
        focusedBorder: '#bdc3cb',
        error: '#f47c7c',
    },
});

export const InputFieldContainer = styled('input', {
    borderRadius: 4,
    borderWidth: 0,
    cursor: 'pointer',
    backgroundColor: '$background',
    borderColor: '$border',
    
    variants: {
        type: {
            default: {
                color: '$unfilledText',
                '&:focus': {
                    borderColor: '$focusedBorder',
                },
            },
            filled: {
                color: '$filledText',
                '&:focus': {
                    borderColor: '$focusedBorder',
                }
            },
            error: {
                color: '$error',
                borderColor: '$error',
            },
        },
        disabled: {
            true:{
                backgroundColor: '$disabled',
                color: '$disabledText',
            },
        },
        // error: {
        //     true: {
        //         color: '$error',
        //         borderColor: '$error',
        //     },
        // },
    },

    // if an input field is disabled, this takes priority over if its type is filled or default (unfilled)
    compoundVariants: [
        {
            type: 'filled',
            disabled: true,
            css: {
                borderRadius: 4,
                borderWidth: 0,
                backgroundColor: '$disabled',
                color: '$disabledText',
                cursor: 'not-allowed',
                '&:hover': {
                    backgroundColor: '$disabled',
                }
            }
        },
    ],

    defaultVariants: {
        type: 'default',
        disabled: false,
    },

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    height: 44,
    gap: 6
})
