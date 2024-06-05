import { globalStyles } from "@/index.styled";
import { darkTheme, InputFieldWrapper, InputFieldContainer, SmallInputFieldContainer, ErrorMessage, IconContainer } from "./Input.styled";
import { type InputProps } from "./Input.types";
import { useState } from "react";
import eyeOpen from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on.png';
import eyeClosed from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off.png';


export const InputField = ({ theme, style, state, onClick }: InputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [PasswordHidden, setPasswordHidden] = useState(false);

    const handleToggleVisibility = () => {
        setPasswordHidden(!PasswordHidden);
    };

    return (
        <InputFieldWrapper>
            <InputFieldContainer
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}
                style={style}
                type={PasswordHidden ? "password" : "text"}

                onClick={state === "disabled" ? () => {} : onClick}
                disabled={state === "disabled"}
            />
            { style === 'password' && 
                <IconContainer onClick={handleToggleVisibility}>
                    <img src={PasswordHidden ? eyeClosed : eyeOpen} alt="Toggle visibility" />
                </IconContainer>
            }
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )
}

export const SmallInputField = ({ theme, style, state, onClick }: InputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [PasswordHidden, setPasswordHidden] = useState(false);

    const handleToggleVisibility = () => {
        setPasswordHidden(!PasswordHidden);
    };

    return (
        <InputFieldWrapper>
            <SmallInputFieldContainer
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}
                style={style}

                onClick={state === "disabled" ? () => {} : onClick}
                disabled={state === "disabled"}
            />
            { style === 'password' && 
                <IconContainer onClick={handleToggleVisibility}>
                    <img src={PasswordHidden ? eyeClosed : eyeOpen} alt="Toggle visibility" />
                </IconContainer>
            }
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )  
}