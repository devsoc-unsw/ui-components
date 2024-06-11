import { globalStyles } from "@/index.styled";
import { darkTheme, InputFieldWrapper, InputFieldContainer, SmallInputFieldContainer, LargeInputFieldContainer, ErrorMessage, EyeIconContainer, UserIconContainer } from "./Input.styled";
import { type StyledInputProps, InputProps } from "./Input.types";
import { useState } from "react";

// eye-on icons
import eyeOpen from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on.svg';
import eyeOpenErrorLight from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on-error-light.svg';
import eyeOpenErrorDark from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-on-error-dark.svg';

// eye-closed icons
import eyeClosed from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off.svg';
import eyeClosedErrorLight from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off-error-light.svg';
import eyeClosedErrorDark from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/eye-off-error-dark.svg';

import userIcon from '/root/Downloads/ui-components/apps/storybook/src/assets/icons/user.svg';

export const InputField = ({ theme, style, state, onClick }: StyledInputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [PasswordHidden, setPasswordHidden] = useState(false);
    const [eyeState, setEyeState] = useState("default")

    // set eye-open icon depending on input field props
    const errorEyeOpenIcon = theme === "light" ? eyeOpenErrorLight : eyeOpenErrorDark;
    var eyeOpenIcon = state === "error" ? errorEyeOpenIcon : eyeOpen;

    // set eye-closed icon depending on input field props
    const errorEyeClosedIcon = theme === "light" ? eyeClosedErrorLight : eyeClosedErrorDark;
    var eyeClosedIcon = state === "error" ? errorEyeClosedIcon : eyeClosed;

    // revert eye icon back to default state when clicking/focusing on input field
    //

    const handleToggleVisibility = () => {
        setPasswordHidden(!PasswordHidden);
    };

    return (
        <InputFieldWrapper>
            <InputFieldContainer
                onFocus={() => {
                    setIsFocused(true);
                }}

                onClick={() => {
                    state === "disabled" ? () => {} : onClick
                }}

                onBlur={() => {
                    setIsFocused(false)
                    setEyeState("default")
                }}

                placeholder="Enter some text"
                className={theme === "dark" ? darkTheme : ''} 
                state={state}
                style={style}
                type={PasswordHidden ? "password" : "text"}

                disabled={state === "disabled"}
            />
            { style === 'password' && 
                <EyeIconContainer onClick={handleToggleVisibility}>
                    <img src={PasswordHidden ? eyeClosedIcon : eyeOpenIcon} alt="Toggle visibility" />
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

export const SmallInputField = ({ theme, state, onClick }: InputProps) => {

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

export const LargeInputField = ({ theme, state, onClick }: InputProps) => {

    globalStyles();

    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputFieldWrapper>
            <LargeInputFieldContainer
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