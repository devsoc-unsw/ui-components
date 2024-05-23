
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, type DropdownProps } from '@csesoc/ui-components/src/dropdown';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: 'Example/Dropdown',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

const tempChildren = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];

export const Default: Story = (args: DropdownProps) => <Dropdown {...args} />;
Default.args = {
  label: 'Select...',
  theme: 'light', 
  showingOptions: false, 
  disabled: false, 
  error: false, 
  children: tempChildren, 
};

export const DefaultDark: Story = (args: DropdownProps) => <Dropdown {...args} />;
DefaultDark.args = {
  label: 'Select...',
  theme: 'dark', 
  showingOptions: false, 
  disabled: false, 
  error: false, 
  children: tempChildren, 
};

export const Disabled: Story = (args: DropdownProps) => <Dropdown {...args} />;
Disabled.args = {
  label: 'Disabled...',
  theme: 'light', 
  showingOptions: false, 
  disabled: true, 
  error: false, 
  children: tempChildren, 
};

export const ErrorDropdown: Story = (args: DropdownProps) => <Dropdown {...args} />;
ErrorDropdown.args = {
  label: 'Select...',
  theme: 'light', 
  showingOptions: false, 
  disabled: false, 
  error: true, 
  children: tempChildren, 
};