import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, type InputProps } from "@csesoc/ui-components/src/input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Example/Input",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args: InputProps) => (
  <Input data-testId="primary-input" {...args} />
);
Primary.args = {
  label: "Input",
  theme: "light",
  type: "primary",
  disabled: false,
};

export const Disabled: Story = (args: InputProps) => (
  <Input data-testId="disabled-input" {...args} />
);
Disabled.args = {
  label: "Disabled Input",
  theme: "light",
  type: "primary",
  disabled: true,
};

export const DisabledDarkMode: Story = (args: InputProps) => (
  <Input data-testId="disabled-dark-mode-input" {...args} />
);
DisabledDarkMode.args = {
  label: "Dark Input",
  theme: "dark",
  type: "primary",
  disabled: true,
};

export const Text: Story = (args: InputProps) => (
  <Input data-testId="text-input" {...args} />
);
Text.args = {
  label: "Text Input",
  theme: "light",
  type: "text",
  disabled: false,
};