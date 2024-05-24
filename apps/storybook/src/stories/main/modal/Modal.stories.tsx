import { Meta, StoryObj } from '@storybook/react';
import { Modal, type ModalProps } from '@csesoc/ui-components/src/modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Example/Modal',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const NoOption: Story = (args: ModalProps) => <Modal {...args} />;
NoOption.args = {
  title: 'This is Modal with no option',
  text: 'Here is the text section',
  theme: 'light',
  option: false,
};

export const NoOptionDark: Story = (args: ModalProps) => <Modal {...args} />;
NoOptionDark.args = {
  title: 'This is Modal with no option',
  text: 'Here is the text section',
  theme: 'dark',
  option: false,
};

export const Option: Story = (args: ModalProps) => <Modal {...args} />
Option.args = {
  title: 'This is Modal with an option',
  text: 'Here is the text section',
  theme: 'light',
  option: true,
};

export const OptionDark: Story = (args: ModalProps) => <Modal {...args} />
OptionDark.args = {
  title: 'This is Modal with an option',
  text: 'Here is the text section',
  theme: 'dark',
  option: true,
};