import React from 'react';
import type { Preview } from '@storybook/react';
import theme from '../src/lib/utils/theme';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story: any) => {
            return (
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
