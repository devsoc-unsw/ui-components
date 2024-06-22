import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { SmallInputField, type SmallInputProps } from '@csesoc/ui-components/src/inputs';

const meta: Meta<typeof SmallInputField> = {
    component: SmallInputField,
    title: 'Example/SmallInputField',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SmallInputField>;

export const Light: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
Light.args = {
    theme: 'light',
    state: 'default'
};

export const Disabled: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
Disabled.args = {
    theme: 'light',
    state: 'disabled'
};

export const Error: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
Error.args = {
    theme: 'light',
    state: 'error'
};

export const Dark: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
Dark.args = {
    theme: 'dark',
    state: 'default'
};

export const DisabledDark: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    state: 'disabled'
};

export const ErrorDark: Story = (args: SmallInputProps) => <SmallInputField {...args} />;
ErrorDark.args = {
    theme: 'dark',
    state: 'error'
};