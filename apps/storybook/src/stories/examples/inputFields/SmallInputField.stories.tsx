import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { SmallInputField, type InputProps } from '@csesoc/ui-components/src/inputs';

const meta: Meta<typeof SmallInputField> = {
    component: SmallInputField,
    title: 'Example/SmallInputField',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SmallInputField>;

export const Light: Story = (args: InputProps) => <SmallInputField {...args} />;
Light.args = {
    theme: 'light',
    style: 'default',
    state: 'default'
};

export const Disabled: Story = (args: InputProps) => <SmallInputField {...args} />;
Disabled.args = {
    theme: 'light',
    style: 'default',
    state: 'disabled'
};

export const Error: Story = (args: InputProps) => <SmallInputField {...args} />;
Error.args = {
    theme: 'light',
    style: 'default',
    state: 'error'
};

export const Dark: Story = (args: InputProps) => <SmallInputField {...args} />;
Dark.args = {
    theme: 'dark',
    style: 'default',
    state: 'default'
};

export const DisabledDark: Story = (args: InputProps) => <SmallInputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    style: 'default',
    state: 'disabled'
};

export const ErrorDark: Story = (args: InputProps) => <SmallInputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    style: 'default',
    state: 'error'
};