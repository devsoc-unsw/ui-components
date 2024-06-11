import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { LargeInputField, type InputProps } from '@csesoc/ui-components/src/inputs';

const meta: Meta<typeof LargeInputField> = {
    component: LargeInputField,
    title: 'Example/LargeInputField',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof LargeInputField>;

export const Light: Story = (args: InputProps) => <LargeInputField {...args} />;
Light.args = {
    theme: 'light',
    state: 'default'
};

export const Disabled: Story = (args: InputProps) => <LargeInputField {...args} />;
Disabled.args = {
    theme: 'light',
    state: 'disabled'
};

export const Error: Story = (args: InputProps) => <LargeInputField {...args} />;
Error.args = {
    theme: 'light',
    state: 'error'
};

export const Dark: Story = (args: InputProps) => <LargeInputField {...args} />;
Dark.args = {
    theme: 'dark',
    state: 'default'
};

export const DisabledDark: Story = (args: InputProps) => <LargeInputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    state: 'disabled'
};

export const ErrorDark: Story = (args: InputProps) => <LargeInputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    state: 'error'
};