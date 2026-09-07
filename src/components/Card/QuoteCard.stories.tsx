import type { Meta, StoryObj } from '@storybook/react';
import QuoteCard from './QuoteCard'; // Make sure this path points to your component

const meta = {
  title: 'Sections/QuoteCard', // This is how it will be organized in the sidebar
  component: QuoteCard,
  parameters: {
    layout: 'fullscreen', // Good for full-page sections
  },
} satisfies Meta<typeof QuoteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// This creates the actual preview of your component
export const Default: Story = {
  args: {
    title: "Inspirational Quote",
    description: "The only limit to our realization of tomorrow is our doubts of today."
  }
};