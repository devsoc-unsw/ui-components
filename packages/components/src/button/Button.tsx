import { globalStyles } from '@/index.styled';
import { ButtonContainer, IconWrapper, LabelWrapper, darkTheme } from '@/button/Button.styled';
import { type ButtonProps } from '@/button/Button.types';

export const Button = ({ label, theme, type, icon, disabled, onClick }: ButtonProps) => {
  // Apply global styles
  globalStyles();

  return (
    <ButtonContainer
      className={theme === 'dark' ? darkTheme : ''}
      type={type}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <LabelWrapper>{label}</LabelWrapper>
    </ButtonContainer>
  );
};
