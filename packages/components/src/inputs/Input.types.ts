import { ReactElement } from "react";

export type InputProps = {
    theme?: "light" | "dark";

    type?: "default" | "filled" | "error";

    disabled?: boolean;

    onClick?: () => void;
}