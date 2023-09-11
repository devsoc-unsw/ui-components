import { styled } from '../index.styled';

export const InputContainer = styled('div', {
  // TODO: move variants up into here
  // Split apart the icon and eye toggle etc stuff to the inputField itself
})

export const InputField = styled('input', {
  variants: {
    size: {
      default: {
        height: 45
      },
      small: {
        height: 30
      },
    },
    disabled: {
      true: {
        color: '$textDisabled',
        cursor: 'not-allowed',
      },
    },
    error: {
      true: {
        borderColor: '$error',
        color: '$error',
      }
    },
  },

  defaultVariants: {
    size: 'default',
    disabled: false,
    error: false,
  },

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'flex-start',
  fontSize: '$bodyLarge',
  paddingLeft: 15,
  paddingRight: 15,
  gap: 6,
  border: '1px solid $border',
  '&:focus': {
    outline: 'none',
    border: '1px solid $borderFocused',
    color: '$textPrimary'
  },
  borderRadius: 4,
  color: '$textPrimary', // TODO: change placeholder colour
  transition: '0.3s',
  // TODO: include icon
})

export const IconWrapper = styled('div', {
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  width: 'min-content'
})