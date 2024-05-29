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

export const Default: Story = (args: InputProps) => <InputField {...args} />;
Default.args = {
    theme: 'light',
    type: 'default',
    disabled: false,
}

export const Disabled: Story = (args: InputProps) => <InputField {...args} />;
Disabled.args = {
    theme: 'light',
    type: 'default',
    disabled: true
}

// export const Error: Story = (args: InputProps) => <InputField {...args} />;
// Error.args = {
//     theme: 'light',
//     type: 'error',
//     disabled: false
// }

export const Dark: Story = (args: InputProps) => <InputField {...args} />;
Dark.args = {
    theme: 'dark',
    type: 'default',
    disabled: false,
}

export const DisabledDark: Story = (args: InputProps) => <InputField {...args} />;
DisabledDark.args = {
    theme: 'dark',
    type: 'default',
    disabled: true
}