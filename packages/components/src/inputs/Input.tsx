import { globalStyles } from "@/index.styled";
import { darkTheme, InputFieldWrapper, InputFieldContainer, SmallInputFieldContainer, ErrorMessage, IconContainer } from "./Input.styled";
import { type InputProps } from "./Input.types";
import { useState } from "react";
import eyeOpen from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on.png';
import eyeClosed from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off.png';


export const InputField = ({ theme, type, state, onClick }: InputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <InputFieldWrapper>
            <InputFieldContainer
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}
                type={type}

                onClick={state === "disabled" ? () => {} : onClick}
                disabled={state === "disabled"}
            />
            { type === 'password' && 
                <IconContainer onClick={handleToggleVisibility}>
                    <img src={isPasswordVisible ? eyeClosed : eyeOpen} alt="Toggle visibility" />
                </IconContainer>
            }
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )
}

export const SmallInputField = ({ theme, type, state, onClick }: InputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <InputFieldWrapper>
            <SmallInputFieldContainer
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}
                type={type}

                onClick={state === "disabled" ? () => {} : onClick}
                disabled={state === "disabled"}
            />
            { type === 'password' && 
                <IconContainer onClick={handleToggleVisibility}>
                    <img src={isPasswordVisible ? eyeClosed : eyeOpen} alt="Toggle visibility" />
                </IconContainer>
            }
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )  
}