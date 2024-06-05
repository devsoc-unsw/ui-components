import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { InputField, type InputProps } from '@csesoc/ui-components/src/inputs';

const meta: Meta<typeof InputField> = {
    component: InputField,
    title: 'Example/InputField',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Light: Story = (args: InputProps) => <InputField {...args} />;
Light.args = {
    theme: 'light',
    style: 'default',
    state: 'default'
}

export const Disabled: Story = (args: InputProps) => <InputField {...args} />;
Disabled.args = {
    theme: 'light',
    style: 'default',
    state: 'disabled'
}

export const Error: Story = (args: InputProps) => <InputField {...args} />;
Error.args = {
    theme: 'light',
    style: 'default',
    state: 'error'
}

export const Dark: Story = (args: InputProps) => <InputField {...args} />;
Dark.args = {
    theme: 'dark',
    style: 'default',
    state: 'default'
}

export const DisabledDark: Story = (args: InputProps) => <InputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    style: 'default',
    state: 'disabled'
}

export const ErrorDark: Story = (args: InputProps) => <InputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    style: 'default',
    state: 'error'
}