import { globalStyles } from "@/index.styled";
import { InputFieldContainer, darkTheme } from "./Input.styled";
import { type InputProps } from "./Input.types";

export const InputField = ({theme, type, disabled}: InputProps) => {

    globalStyles();

    return (
        <InputFieldContainer
            className={theme === "dark" ? darkTheme : ''}
            type={type}
            onClick={disabled ? () => {} : onclick}
            disabled={disabled}
        >
        </InputFieldContainer>
    )
}