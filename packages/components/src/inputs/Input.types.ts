export type InputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    style?: "text" | "password" | "icon";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}