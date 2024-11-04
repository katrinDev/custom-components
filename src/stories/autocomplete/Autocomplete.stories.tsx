import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const countries = [
  "Argentina",
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Norway",
  "Russia",
  "Spain",
  "Sweden",
  "United Kingdom",
  "United States"
];


export const Default: Story = {
    args: {
       options: countries 
    }
}