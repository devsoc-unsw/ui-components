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
    type: 'default',
    state: 'default'
}

export const Disabled: Story = (args: InputProps) => <InputField {...args} />;
Disabled.args = {
    theme: 'light',
    type: 'default',
    state: 'default'
}

export const Error: Story = (args: InputProps) => <InputField {...args} />;
Error.args = {
    theme: 'light',
    type: 'default',
    state: 'error'
}

export const Dark: Story = (args: InputProps) => <InputField {...args} />;
Dark.args = {
    theme: 'dark',
    type: 'default',
    state: 'default'
}

export const DisabledDark: Story = (args: InputProps) => <InputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    type: 'default',
    state: 'disabled'
}

export const ErrorDark: Story = (args: InputProps) => <InputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    type: 'default',
    state: 'error'
}