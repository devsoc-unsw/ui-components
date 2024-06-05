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

// DEFAULT INPUT FIELDS
export const Light: Story = (args: InputProps) => <InputField {...args} />;
Light.args = {
    theme: 'light',
    style: 'text',
    state: 'default'
}

export const Disabled: Story = (args: InputProps) => <InputField {...args} />;
Disabled.args = {
    theme: 'light',
    style: 'text',
    state: 'disabled'
}

export const Error: Story = (args: InputProps) => <InputField {...args} />;
Error.args = {
    theme: 'light',
    style: 'text',
    state: 'error'
}

export const Dark: Story = (args: InputProps) => <InputField {...args} />;
Dark.args = {
    theme: 'dark',
    style: 'text',
    state: 'default'
}

export const DisabledDark: Story = (args: InputProps) => <InputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    style: 'text',
    state: 'disabled'
}

export const ErrorDark: Story = (args: InputProps) => <InputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    style: 'text',
    state: 'error'
}

// PASSWORD INPUT FIELDS
export const PasswordLight: Story = (args: InputProps) => <InputField {...args} />;
PasswordLight.args = {
    theme: 'light',
    style: 'password',
    state: 'default'
}

export const PasswordDisabled: Story = (args: InputProps) => <InputField {...args} />;
PasswordDisabled.args = {
    theme: 'light',
    style: 'password',
    state: 'disabled'
}

export const PasswordError: Story = (args: InputProps) => <InputField {...args} />;
PasswordError.args = {
    theme: 'light',
    style: 'password',
    state: 'error'
}

export const PasswordDark: Story = (args: InputProps) => <InputField {...args} />;
PasswordDark.args = {
    theme: 'dark',
    style: 'password',
    state: 'default'
}

export const PasswordDisabledDark: Story = (args: InputProps) => <InputField {...args} />;
PasswordDisabledDark.args = {
    theme: 'dark',
    style: 'password',
    state: 'disabled'
}

export const PasswordErrorDark: Story = (args: InputProps) => <InputField {...args} />;
PasswordErrorDark.args = {
    theme: 'dark',
    style: 'password',
    state: 'error'
}

// ICON INPUT FIELDS
export const IconLight: Story = (args: InputProps) => <InputField {...args} />;
IconLight.args = {
    theme: 'light',
    style: 'icon',
    state: 'default'
}

export const IconDisabled: Story = (args: InputProps) => <InputField {...args} />;
IconDisabled.args = {
    theme: 'light',
    style: 'icon',
    state: 'disabled'
}

export const IconError: Story = (args: InputProps) => <InputField {...args} />;
IconError.args = {
    theme: 'light',
    style: 'icon',
    state: 'error'
}

export const IconDark: Story = (args: InputProps) => <InputField {...args} />;
IconDark.args = {
    theme: 'dark',
    style: 'icon',
    state: 'default'
}

export const IconDisabledDark: Story = (args: InputProps) => <InputField {...args} />;
IconDisabledDark.args = {
    theme: 'dark',
    style: 'icon',
    state: 'disabled'
}

export const IconErrorDark: Story = (args: InputProps) => <InputField {...args} />;
IconErrorDark.args = {
    theme: 'dark',
    style: 'icon',
    state: 'error'
}