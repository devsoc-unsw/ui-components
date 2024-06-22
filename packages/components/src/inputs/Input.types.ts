export type StyledInputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    style?: "text" | "password" | "icon";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}

export type InputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}