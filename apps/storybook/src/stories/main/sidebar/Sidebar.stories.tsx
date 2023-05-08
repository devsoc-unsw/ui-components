import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'Main/Sidebar',
  component: Sidebar,
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

// Temp nav details
const baseArgs = {
  name: 'Uni-lectives',
  icon: 'src/assets/icons/cselectives-icon.png',
  onClick: () => {},
  onLogout: () => {},
  content: [
    {
      name: 'Browse Courses',
      icon: 'src/assets/icons/book-open.svg',
      onClick: () => {},
    },
    {
      name: 'My Reviews',
      icon: 'src/assets/icons/edit.svg',
      onClick: () => {},
    },
    {
      name: 'Terms and Conditions',
      icon: 'src/assets/icons/terms-and-conditions.svg',
      onClick: () => {},
    },
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
