export type DropdownProps = {
  placeholder?: string;

  theme?: 'light' | 'dark';

  expand?: boolean;

  disabled?: boolean;

  error?: boolean;

  options?: { value: string; label: string }[];

  selected?: string;

  onSelect?: (selectedOption: string) => void;
};
