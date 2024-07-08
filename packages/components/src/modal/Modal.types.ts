import { ReactElement } from "react";

export type ModalProps = {
  /**
   * Title contents
   */
  title: string;
  /**
   * Text contents
   */
  children: ReactElement;
  /**
   * Is this modal in light or dark mode?
   */
  theme?: "light" | "dark";
  /**
   * Is this an option modal?
   */
  option?: boolean;
  /**
   * Is this modal open?
   */
  open: boolean;
  /**
   * The content of the button that opens the modal
   */
  buttonContent: string;
}
