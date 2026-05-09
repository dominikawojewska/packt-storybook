import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonCounter } from './ButtonCounter';

const meta = {
  title: 'Counter/ButtonCounter',
  component: ButtonCounter,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ButtonCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me',
    onClick: () => alert('Button clicked!'),
    size: 'large',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    onClick: () => alert('Button clicked!'),
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    onClick: () => alert('Button clicked!'),
    size: 'small',
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Click me",
    onClick: () => alert('Button clicked!'),
    size: "small",
    backgroundColor: "#4fc9a8"
  }
};