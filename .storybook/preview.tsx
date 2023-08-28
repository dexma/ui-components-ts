import React from 'react';
import type { Preview } from '@storybook/react';
import theme from '../src/lib/utils/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, StorybookStyles } from '../src/lib/utils/global';

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
                <>
                    <GlobalStyle />
                    <StorybookStyles />
                    <ThemeProvider theme={theme}>
                        <Story />
                    </ThemeProvider>
                </>
            );
        },
    ],
};

export default preview;
