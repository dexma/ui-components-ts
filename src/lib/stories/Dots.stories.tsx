import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Dots } from '../components/Dots/Dots';
import theme from '../utils/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Dots',
    component: Dots,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'number' },
        steps: { control: 'number' },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={{ ...theme, iconColor: '#AAFFFF' }}>
                <Story />
            </ThemeProvider>
        ),
    ],
} satisfies Meta<typeof Dots>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        size: 8,
        steps: 3,
    },
};
