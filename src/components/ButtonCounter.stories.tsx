import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonCounter } from './ButtonCounter';

const meta = {
  title: 'Counter/ButtonCounter',
  component: ButtonCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    version: {
      control: 'select',
      options: [1, 2],
      description: 'Version of the button style',
      table: {
        defaultValue: { summary: '1' },
      }
    },
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the button',
      table: {
        defaultValue: { summary: '#295cbe' },
      } 
    },
    label: {
      description: 'Text displayed on the button',
      table: {
        defaultValue: { summary: 'Click me' },
      }
    },
    onClick: {
      action: 'clicked',
    },
    size: {
      description: 'Size of the button',
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      table: {
        defaultValue: { summary: 'medium' },
      }
    },
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
  parameters: {
    docs: {
      description: {
        story: 'This is the default state of the ButtonCounter component.',
      },
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Click me",
    size: "small",
    backgroundColor: "#4fc9a8"
  }
};