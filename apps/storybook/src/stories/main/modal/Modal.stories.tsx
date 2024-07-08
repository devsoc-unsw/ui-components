import { Meta, StoryObj } from '@storybook/react';
import { Modal, type ModalProps } from '@csesoc/ui-components/src/modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Main/Modal',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const NoOption: Story = (args: ModalProps) => <Modal {...args} />;
NoOption.args = {
  title: 'This is Modal with no option',
  children: <p>'Here is the content section'</p>,
  theme: 'light',
  option: false,
  open: false,
  buttonContent: 'Open Modal',
};

export const NoOptionDark: Story = (args: ModalProps) => <Modal {...args} />;
NoOptionDark.args = {
  title: 'This is Modal with no option',
  children: <p>'Here is the content section'</p>,
  theme: 'dark',
  option: false,
  open: false,
  buttonContent: 'Open Modal',
};

export const Option: Story = (args: ModalProps) => <Modal {...args} />;
Option.args = {
  title: 'This is Modal with an option',
  children: <p>'Here is the content section'</p>,
  theme: 'light',
  option: true,
  open: true,
  buttonContent: 'Open Modal',
};

export const OptionDark: Story = (args: ModalProps) => <Modal {...args} />;
OptionDark.args = {
  title: 'This is Modal with an option',
  children: <p>'Here is the content section'</p>,
  theme: 'dark',
  option: true,
  open: true,
  buttonContent: 'Open Modal',
};
