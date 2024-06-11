import { ReactElement } from "react";

export type DropdownProps = {
  label?: string;

  theme?: "light" | "dark";

  expand?: boolean;

  disabled?: boolean;

  error?: boolean;

  children?: ReactElement | ReactElement[];
}

