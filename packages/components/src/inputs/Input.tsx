import { globalStyles } from "@/index.styled";
import { darkTheme, InputFieldWrapper, InputFieldContainer, SmallInputFieldContainer, ErrorMessage, EyeIconContainer, UserIconContainer } from "./Input.styled";
import { type InputProps, SmallInputProps } from "./Input.types";
import { useState } from "react";
import eyeOpen from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on.svg';
import eyeClosed from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off.svg';
import userIcon from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/user.svg';

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
                <EyeIconContainer onClick={handleToggleVisibility}>
                    <img src={PasswordHidden ? eyeClosed : eyeOpen} alt="Toggle visibility" />
                </EyeIconContainer>
            }
            { style === 'icon' &&
                <UserIconContainer>
                    <img src={userIcon} alt="User icon"/>
                </UserIconContainer>
            }
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )
}

export const SmallInputField = ({ theme, state, onClick }: SmallInputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputFieldWrapper>
            <SmallInputFieldContainer
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}

                onClick={state === "disabled" ? () => {} : onClick}
                disabled={state === "disabled"}
            />
            {state === "error" && !isFocused && <ErrorMessage>Please try again!</ErrorMessage>}
        </InputFieldWrapper>
    )  
}