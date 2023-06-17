import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../../../../../../packages/components/src/button";
import DarkMode from "../../../assets/icons/dark-mode.svg"

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
  icon: <img src={DarkMode} alt="dark mode icon" />
};

export const Disabled: Story = (args: ButtonProps) => (
  <Button data-testId="disabled-button" {...args} />
);
Disabled.args = {
  label: "Button",
  theme: "light",
  type: "primary",
  disabled: true,
};
