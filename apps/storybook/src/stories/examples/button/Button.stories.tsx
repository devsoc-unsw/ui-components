import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@csesoc/ui-components/src/button";
import DarkModeIcon from "../../../assets/icons/dark-mode-white.svg"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Example/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: ButtonProps) => (
  <Button data-testId="primary-button" {...args} />
);
Primary.args = {
  label: "Button",
  theme: "light",
  type: "primary",
  disabled: false,
};

export const WithIcon: Story = (args: ButtonProps) => (
  <Button data-testId="with-icon-button" {...args} />
);
WithIcon.args = {
  label: "dark icon",
  theme: "light",
  type: "primary",
  disabled: false,
  icon: <img src={DarkModeIcon} alt="dark mode icon" />
};

export const Disabled: Story = (args: ButtonProps) => (
  <Button data-testId="disabled-button" {...args} />
);
Disabled.args = {
  label: "Disabled button",
  theme: "light",
  type: "primary",
  disabled: true,
};

export const DisabledDarkMode: Story = (args: ButtonProps) => (
  <Button data-testId="disabled-dark-mode-button" {...args} />
);
DisabledDarkMode.args = {
  label: "Dark button",
  theme: "dark",
  type: "primary",
  disabled: true,
};

export const Ghost: Story = (args: ButtonProps) => (
  <Button data-testId="ghost-button" {...args} />
);
Ghost.args = {
  label: "Ghost button",
  theme: "light",
  type: "ghost",
  disabled: false,
};

export const Text: Story = (args: ButtonProps) => (
  <Button data-testId="text-button" {...args} />
);
Text.args = {
  label: "Text button",
  theme: "light",
  type: "text",
  disabled: false,
};
