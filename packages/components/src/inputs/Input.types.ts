import { ReactElement } from "react";

export type InputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    style?: "default" | "password" | "icon";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}