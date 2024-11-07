import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: { layout: 'centered' },
  argTypes: {
    color: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const countries = [
  { id: 1, label: 'Argentina' },
  { id: 2, label: 'Australia' },
  { id: 3, label: 'Brazil' },
  { id: 4, label: 'Canada' },
  { id: 5, label: 'China' },
  { id: 6, label: 'Denmark' },
  { id: 7, label: 'Egypt' },
  { id: 8, label: 'France' },
  { id: 9, label: 'Germany' },
  { id: 10, label: 'India' },
  { id: 11, label: 'Italy' },
  { id: 12, label: 'Japan' },
  { id: 13, label: 'Mexico' },
  { id: 14, label: 'Netherlands' },
  { id: 15, label: 'Norway' },
  { id: 16, label: 'Russia' },
  { id: 17, label: 'Spain' },
  { id: 18, label: 'Sweden' },
  { id: 19, label: 'United Kingdom' },
  { id: 20, label: 'United States' },
];

export const Default: Story = {
  args: {
    options: countries,
  },
};
