import { ReactElement } from "react";

export type DropdownProps = {
  label?: string;

  theme?: "light" | "dark";

  showingOptions?: boolean;

  disabled?: boolean;

  error?: boolean;

  children?: ReactElement | ReactElement[];
}

