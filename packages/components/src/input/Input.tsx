import { darkTheme, globalStyles } from "../index.styled";
import { InputField } from "./Input.styled";
import { type InputProps } from "./Input.types";

export const Input = ({placeholder, theme, size, disabled, error, icon, password}: InputProps) => {

  // Apply global styles
  globalStyles();

  return (
    <InputField
      type={password ? "password" : "text"}
      className={theme === "dark" ? darkTheme : ''} 
      size={size} 
      disabled={disabled}
      error={error}
      placeholder={placeholder}
    />
  )
  
}