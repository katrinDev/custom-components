import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  argTypes: {
    color: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Checkbox',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Checkbox',
  },
};
