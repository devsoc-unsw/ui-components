export type ModalProps = {
  /**
   * Title contents
   */
  title: string;
  /**
   * Text contents
   */
  text: string;
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
}
