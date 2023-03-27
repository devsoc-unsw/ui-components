import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'Main/Sidebar',
  component: Sidebar,
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
    project: { control: 'select', options: ['uni-lectives'] },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: 'dark',
  project: 'uni-lectives',
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  theme: 'light',
  project: 'uni-lectives',
};
