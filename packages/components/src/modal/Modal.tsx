import { Button } from '@/button';
import { ButtonContainer, IconWrapper, darkTheme as buttonDarkTheme } from '@/button/Button.styled';
import { type ButtonProps } from '@/button/Button.types';

import { globalStyles } from '@/index.styled';
import {
  darkTheme,
  ModalContainer,
  HeaderWrapper,
  BodyWrapper,
  ButtonsWrapper,
} from '@/modal/Modal.styled';
import { type ModalProps } from '@/modal/Modal.types';
import { useState } from 'react';
import { X } from 'lucide-react';

const CrossButton = ({ type, theme, icon, onClick }: ButtonProps) => {
  // Apply global styles
  globalStyles();

  return (
    <ButtonContainer
      className={theme === 'dark' ? buttonDarkTheme : ''}
      onClick={onClick}
      type={type}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </ButtonContainer>
  );
};

export const Modal = ({ title, children, theme, option, open, buttonContent }: ModalProps) => {
  // Apply global styles
  globalStyles();

  const [isOpen, setOpen] = useState(open);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      {!isOpen && (
        <Button
          onClick={openModal}
          label={buttonContent}
          theme={theme === 'dark' ? theme : 'light'}
        />
      )}
      <ModalContainer className={theme === 'dark' ? darkTheme : ''} option={option} open={isOpen}>
        <HeaderWrapper>
          {title}
          <CrossButton
            type='text'
            theme={theme === 'dark' ? theme : 'light'}
            icon={<X color={theme === 'dark' ? '#EEF0F2' : '#323E4D'} onClick={closeModal} />}
          />
        </HeaderWrapper>
        <BodyWrapper>{children}</BodyWrapper>
        {option && (
          <ButtonsWrapper>
            <Button
              label='Cancel'
              theme={theme === 'dark' ? theme : 'light'}
              type='text'
              onClick={closeModal}
            />
            <Button label='Continue' theme='light' />
          </ButtonsWrapper>
        )}
      </ModalContainer>
    </div>
  );
};
