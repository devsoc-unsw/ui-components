import { globalStyles } from "../index.styled";
import { ButtonContainer, IconWrapper, darkTheme } from "./Button.styled";
import { type ButtonProps } from "./Button.types";

export const Button = ({label, theme, type, icon, disabled, onClick}: ButtonProps) => {

  // Apply global styles
  globalStyles();

  return (
    <ButtonContainer 
      className={theme === "dark" ? darkTheme : ''} 
      type={type} 
      onClick={disabled ? () => {} : onClick} 
      disabled={disabled}
    >
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      {label}
    </ButtonContainer>
  )
}