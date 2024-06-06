export type InputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}