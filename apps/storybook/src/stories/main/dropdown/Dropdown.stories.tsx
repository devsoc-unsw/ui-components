import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, type DropdownProps } from '@csesoc/ui-components/src/dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Main/Dropdown',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

const tempChildren = ['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((str: string) => ({
  label: str,
  value: str,
}));

export const Default: Story = (args: DropdownProps) => <Dropdown {...args} />;
Default.args = {
  placeholder: 'Select...',
  theme: 'light',
  expand: false,
  disabled: false,
  error: false,
  options: tempChildren,
  onSelect: (option: string) => console.log(`Dropdown select: ${option}`),
};

export const DefaultDark: Story = (args: DropdownProps) => <Dropdown {...args} />;
DefaultDark.args = {
  placeholder: 'Select...',
  theme: 'dark',
  expand: false,
  disabled: false,
  error: false,
  options: tempChildren,
  onSelect: (option: string) => console.log(`Dropdown select: ${option}`),
};

export const Disabled: Story = (args: DropdownProps) => <Dropdown {...args} />;
Disabled.args = {
  placeholder: 'Disabled...',
  theme: 'light',
  expand: false,
  disabled: true,
  error: false,
  options: tempChildren,
  onSelect: (option: string) => console.log(`Dropdown select: ${option}`),
};

export const ErrorDropdown: Story = (args: DropdownProps) => <Dropdown {...args} />;
ErrorDropdown.args = {
  placeholder: 'Select...',
  theme: 'light',
  expand: false,
  disabled: false,
  error: true,
  options: tempChildren,
  onSelect: (option: string) => console.log(`Dropdown select: ${option}`),
};
