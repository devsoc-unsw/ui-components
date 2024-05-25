import { createStitches, createTheme } from '@stitches/react';

// Default colors
export const { styled } = createStitches({
    theme: {
        colors: {
            primaryBackground: '#f8f8f9',
            disabledBackground: '#edeef1',
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
        primaryBackground: '##242c37',
        disabledBackground: '#323e4d',
        unfilledText: '#7a8797',
        filledText: '#eef0f2',
        disabledText: '#404f63',
        border: '#404f63',
        focusedBorder: '#bdc3cb',
        error: '#f47c7c',
    },
});

export const InputFieldContainer = styled('input', {
    variants: {
        type: {
            default: {
                borderRadius: 4,
                borderWidth: 0,
                backgroundColor: '$primaryBackground',
                color: '$unfilledText',
                borderColor: '',
                cursor: 'pointer',
                '&:hover': {
                    
                }
            },

        }
    }
})