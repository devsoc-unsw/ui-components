import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
    title: 'Main/Dropdown',
    component: Dropdown,
    argTypes: {
        theme: { control: 'select', options: ['light', 'dark'] },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Temp nav details
const baseArgs = {
    options: [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
        { name: 'Option 4' },
        { name: 'Option 5' }
    ],
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
    theme: 'dark',
    ...baseArgs,
};

export const LightTheme = Template.bind({});
LightTheme.args = {
    theme: 'light',
    ...baseArgs,
};
