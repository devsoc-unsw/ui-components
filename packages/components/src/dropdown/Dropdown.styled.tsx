import { createStitches, createTheme } from '@stitches/react';

// Default colors
const { styled } = createStitches({
  theme: {
    colors: {
      dropdownPrimaryBorder: '#DADEE2',
      dropdownFocusBorder: '#59697D',
      dropdownPrimaryBackground: '#F8F8F9',
      dropdownOptionsBackground: '#EDEEF1',
      dropdownPrimaryText: '#323E4D',
      dropdownDisabledText: '#6C798B',
      dropdownErrorBorder: '#EF4444',
      dropdownErrorText: '#EF4444',
    },
  },
});

// Dark theme dropdown colours
export const darkTheme = createTheme({
  colors: {
    dropdownPrimaryBorder: '#404F63',
    dropdownFocusBorder: '#BDC3CB',
    dropdownPrimaryBackground: '#242C37',
    dropdownOptionsBackground: '#323E4D',
    dropdownPrimaryText: '#EEF0F2',
    dropdownDisabledText: '#9BA5B1',
    dropdownErrorBorder: '#F47C7C',
    dropdownErrorText: '#F47C7C',
  },
});

// Entire container
export const DropdownContainer = styled('div', {
  cursor: 'pointer',
  width: 'auto',
  fontFamily: "'Nunito Sans', 'Helvetica Neue', 'Inter', sans-serif",
  display: 'inline-block',
  color: '$dropdownPrimaryText',

  '.dropdown-error-msg': {
    display: 'none',
  },

  variants: {
    error: {
      true: {
        '.dropdown-error-msg': {
          fontSize: '0.9em',
          marginTop: '0.5em',
          color: '$dropdownErrorText',
          display: 'block',
        }
      }
    },
  }
});

// Label Style
export const DropdownLabel = styled('div', {
  display: 'flex', 
  flexDirection: 'row',
  border: '1px solid $dropdownPrimaryBorder',
  backgroundColor: '$dropdownPrimaryBackground',
  '&:focus-within': {
    borderColor: '$dropdownFocusBorder',
  },
  borderRadius: '4px',
  justifyContent: 'space-between',
  padding: '0.5em 1em',
  '.dropdown-error-msg': {
    display: 'none',
  },
  
  variants: {
    disabled: {
      true: {
        color: '$dropdownDisabledText',
        cursor: 'not-allowed',
      }
    },

    error: {
      true: {
        borderColor: '$dropdownErrorBorder',
        color: '$dropdownErrorText',
        cursor: 'pointer',
        '.dropdown-error-msg': {
          display: 'block',
        }
      }
    }
  },
  
  '.chevron-down': {
    height: '1em',
    width: '1em',
    marginLeft: '3em',
    padding: '0',
    fill: '$dropdownPrimaryText',
    opacity: '0.8',
  },

  '.dropdown-label-text': {
    width: '4em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    flex: 1,
  }
}
);

// Children container
export const DropdownChildren = styled('div', {
  width: 'auto',
  minWidth: '10em',
  display: 'inline-block',
  position: 'absolute',
  zIndex: '99',
  border: '1px solid $dropdownPrimaryBorder',
  backgroundColor: '$dropdownPrimaryBackground',
  marginTop:'0.5em',
  borderRadius: '4px',
  justifyContent: 'space-between',
  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
});

export const DropdownItem = styled('div', {
  backgroundColor: '$dropdownPrimaryBackground',
  margin: '0em 0',
  padding: '0.5em 1em',
  cursor: 'pointer',
  width: '100%',
});