import { createStitches, createTheme } from '@stitches/react';

// Default colors
const { styled } = createStitches({
  theme: {
    colors: {
      backgroundColor: '#FFFFFF',
      titleText: '#323E4D',
      contentText: '#59697D',
    },
  },
});

// Dark theme colours
export const darkTheme = createTheme({
  colors: {
    backgroundColor: '#242C37',
    titleText: '#EEF0F2',
    contentText: '#7A8797',
  },
});

export const ModalContainer = styled('div', {
  variants: {
    option: {
      true: {
        paddingTop: 20,
        paddingBottom: 25,
        gap: 20,
      },
      false: {
        paddingTop: 20,
        paddingBottom: 20,
        gap: 15,
      }
    },
    open: {
      true: {
        display: 'flex'
      },
      false: {
        display: 'none'
      }
    }
  },

  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: 48,
  paddingRight: 48,
  backgroundColor: '$backgroundColor',
  width: 450,
  borderRadius: 8,
})

export const HeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '$titleText'
})

export const BodyWrapper = styled('div', {
  fontSize: '1rem',
  color: '$contentText'
})

export const ButtonsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: 20
}) 
