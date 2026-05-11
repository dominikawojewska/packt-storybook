import type {Meta, StoryObj} from '@storybook/react-vite';
import { Counter } from './Counter';
import { within, userEvent, expect } from 'storybook/test';

const meta = {
  title: 'Counter/Page',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default version of the counter component.',
      },
    }
  }
};

export const IncrementByTwo: Story = {
    args: {
        label: 'Increment by 2',
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        
        // find the button
        const button = canvas.getByRole('button', {name: /Increment by 2/i});
        
        // click twice
        await userEvent.click(button);
        await userEvent.click(button);

        //VERIFY: check if the count is 2
        const countDisplay = canvas.getByTestId('counter-display'); // or use class
        await expect(countDisplay).toHaveTextContent('2');
    },
    parameters: {
        docs: {
            description: {
                story: 'This version of the counter increments the count by 2.',
            },
        }
    }
}