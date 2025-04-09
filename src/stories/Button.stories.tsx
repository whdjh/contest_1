import { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/common/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  argTypes: {
    type: { control: 'radio', options: ['chat', 'send', 'hide'] },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    showPassword: { control: 'boolean' },
    onSubmit: { action: 'clicked' },
    onToggle: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ChatButton: Story = {
  args: {
    type: 'chat',
    disabled: false,
  },
};

export const SendButton: Story = {
  args: {
    type: 'send',
    value: 'Send',
    disabled: false,
  },
};

export const HideButton: Story = {
  args: {
    type: 'hide',
    showPassword: false,
  },
};
