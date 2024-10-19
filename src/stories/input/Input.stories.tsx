import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  argTypes: {
    color: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
    generalSize: { control: { type: 'radio' }, options: ['medium', 'small'] },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledInput(args: Omit<InputProps, 'value' | 'onChange'>) {
  const [value, setValue] = useState<string>('');

  return (
    <Input value={value} onChange={(e) => setValue(e.target.value)} {...args} />
  );
}

export const Primary: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Primary Input',
    color: 'primary',
  },
};

export const Secondary: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Secondary Input',
    color: 'secondary',
  },
};

export const Small: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Small Input',
    genSize: 'small',
  },
};

export const Medium: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Medium Input',
    genSize: 'medium',
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Disabled Input',
    disabled: true,
  },
};

export const Error: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Error Input',
    error: true,
    helperText: 'Incorrect entry.',
  },
};
