import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';

export const Theme = ({ children, options }: { children?: React.ReactNode; theme: DefaultTheme; options?: DefaultTheme }) => {
    if (!children) return null;
    const defaultTheme = theme;
    let themeProviderOptions;
    if (options === undefined || (options && Object.entries(options).length === 0)) {
        themeProviderOptions = defaultTheme;
    } else {
        themeProviderOptions = {
            ...defaultTheme,
            ...options,
            backgroundColorActive: options.backgroundColor ? options.backgroundColor : options.primary,
        };
    }
    return <ThemeProvider theme={themeProviderOptions}>{children}</ThemeProvider>;
};

export default Theme;
