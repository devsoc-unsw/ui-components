import { ReactElement } from "react";

export type ButtonProps = {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Is this button in light or dark mode?
   */
  theme?: "light" | "dark";
  /**
   * What type of button is this?
   */
  type?: "primary" | "ghost" | "text";
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Icon to appear before label
   */
  icon?: ReactElement;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
