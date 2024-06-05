import { ReactElement } from "react";

export type InputProps = {
    placeholder?: string

    theme?: "light" | "dark";

    type?: "default" | "password" | "icon";

    state?: "default" | "disabled"| "error";

    onClick?: () => void;
}