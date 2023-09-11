import { ReactElement } from "react";

export type InputProps = {
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Is this button in light or dark mode?
   */
  theme?: "light" | "dark";
  /**
   * What size input is this?
   */
  size?: "default" | "small";
  /**
   * Is the input field disabled?
   */
  disabled?: boolean;
  /**
   * Is there an error in the input?
   */
  error?: boolean;
  /**
   * Icon to appear before label
   */
  icon?: ReactElement;
  /**
   * Is the input field a password field?
   */
  password?: boolean;
}