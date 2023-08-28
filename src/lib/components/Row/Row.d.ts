import React, { ReactNode } from 'react';
import theme, { Theme } from '../../../../../../../../../src/lib/utils/theme';
export declare const Row: {
    (props: {
        reverse?: boolean;
        alignItems?: string;
        theme: Theme;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        reverse: boolean;
        alignItems: string;
        theme: {
            alert: {
                messageFontSize: string;
                descriptionFontSize: string;
            };
            button: {
                size: {
                    small: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    medium: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    large: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    xlarge: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                };
            };
            heading: {
                fontSize: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
            };
            dataPicker: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            select: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            card: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            switchPeriodComparative: {
                fontSize: string;
            };
            grid: {
                outerPadding: string;
                outerMargin: string;
                gutterWidth: string;
                gutterCompensation: string;
                halfGutterWidth: string;
                breakpoints: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                };
                columns: number;
                screenSm: string;
                screenMd: string;
                screenLg: string;
                containerSm: string;
                containerMd: string;
                containerLg: string;
            };
            pagination: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            paragraph: {
                size: {
                    small: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    medium: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    large: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    xlarge: {
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
            table: {
                fontSize: string;
            };
            tag: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            tab: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            input: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            formControl: {
                messageFontSize: string;
            };
            progress: {
                paddingX: string;
                fontSize: string;
                height: string;
                backgroundColor: string;
            };
            border: string;
            borderRadius: string;
            borderColor: string;
            padding: string;
            fontSize: string;
            fontColor: string;
            fontColorActive: string;
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightSemiBold: number;
            fontWeightBold: number;
            fontFamily: string;
            iconSize: string;
            iconColor: string;
            iconColorActive: string;
            backgroundColor: string;
            backgroundColorSelected: string;
            backgroundColorActive: string;
            backgroundColorHover: string;
            backgroundColorFocused: string;
            backgroundColorDisabled: string;
            boxShadow: string;
            boxShadowHover: string;
            color: {
                teal50: string;
                teal100: string;
                teal200: string;
                teal300: string;
                teal400: string;
                teal500: string;
                teal600: string;
                teal700: string;
                teal800: string;
                teal900: string;
                blue50: string;
                blue100: string;
                blue200: string;
                blue300: string;
                blue400: string;
                blue500: string;
                blue600: string;
                blue700: string;
                blue800: string;
                blue900: string;
                gray50: string;
                gray100: string;
                gray200: string;
                gray300: string;
                gray400: string;
                gray500: string;
                gray600: string;
                gray700: string;
                gray800: string;
                gray900: string;
                teal: string;
                red: string;
                orange: string;
                amber: string;
                green: string;
                cyan: string;
                blueLight: string;
                blue: string;
                irisBlue: string;
                violet: string;
                magenta: string;
                pink: string;
                brown: string;
                gray: string;
                white: string;
                black: string;
            };
            primary: string;
            success: string;
            warning: string;
            error: string;
            info: string;
            heightComponents: number;
            heightElements: string;
        };
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<import("styled-components").ExecutionProps, "as" | "forwardedAs"> & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    reverse?: boolean | undefined;
    alignItems?: string | undefined;
} & React.RefAttributes<{
    (props: {
        reverse?: boolean | undefined;
        alignItems?: string | undefined;
        theme: {
            alert: {
                messageFontSize: string;
                descriptionFontSize: string;
            };
            button: {
                size: {
                    small: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    medium: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    large: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    xlarge: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                };
            };
            heading: {
                fontSize: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
            };
            dataPicker: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            select: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            card: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            switchPeriodComparative: {
                fontSize: string;
            };
            grid: {
                outerPadding: string;
                outerMargin: string;
                gutterWidth: string;
                gutterCompensation: string;
                halfGutterWidth: string;
                breakpoints: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                };
                columns: number;
                screenSm: string;
                screenMd: string;
                screenLg: string;
                containerSm: string;
                containerMd: string;
                containerLg: string;
            };
            pagination: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            paragraph: {
                size: {
                    small: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    medium: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    large: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    xlarge: {
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
            table: {
                fontSize: string;
            };
            tag: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            tab: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            input: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            formControl: {
                messageFontSize: string;
            };
            progress: {
                paddingX: string;
                fontSize: string;
                height: string;
                backgroundColor: string;
            };
            border: string;
            borderRadius: string;
            borderColor: string;
            padding: string;
            fontSize: string;
            fontColor: string;
            fontColorActive: string;
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightSemiBold: number;
            fontWeightBold: number;
            fontFamily: string;
            iconSize: string;
            iconColor: string;
            iconColorActive: string;
            backgroundColor: string;
            backgroundColorSelected: string;
            backgroundColorActive: string;
            backgroundColorHover: string;
            backgroundColorFocused: string;
            backgroundColorDisabled: string;
            boxShadow: string;
            boxShadowHover: string;
            color: {
                teal50: string;
                teal100: string;
                teal200: string;
                teal300: string;
                teal400: string;
                teal500: string;
                teal600: string;
                teal700: string;
                teal800: string;
                teal900: string;
                blue50: string;
                blue100: string;
                blue200: string;
                blue300: string;
                blue400: string;
                blue500: string;
                blue600: string;
                blue700: string;
                blue800: string;
                blue900: string;
                gray50: string;
                gray100: string;
                gray200: string;
                gray300: string;
                gray400: string;
                gray500: string;
                gray600: string;
                gray700: string;
                gray800: string;
                gray900: string;
                teal: string;
                red: string;
                orange: string;
                amber: string;
                green: string;
                cyan: string;
                blueLight: string;
                blue: string;
                irisBlue: string;
                violet: string;
                magenta: string;
                pink: string;
                brown: string;
                gray: string;
                white: string;
                black: string;
            };
            primary: string;
            success: string;
            warning: string;
            error: string;
            info: string;
            heightComponents: number;
            heightElements: string;
        };
        children: React.ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        reverse: boolean;
        alignItems: string;
        theme: {
            alert: {
                messageFontSize: string;
                descriptionFontSize: string;
            };
            button: {
                size: {
                    small: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    medium: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    large: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                    xlarge: {
                        paddingX: string;
                        fontSize: string;
                        height: string;
                    };
                };
            };
            heading: {
                fontSize: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
            };
            dataPicker: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            select: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            card: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            switchPeriodComparative: {
                fontSize: string;
            };
            grid: {
                outerPadding: string;
                outerMargin: string;
                gutterWidth: string;
                gutterCompensation: string;
                halfGutterWidth: string;
                breakpoints: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                };
                columns: number;
                screenSm: string;
                screenMd: string;
                screenLg: string;
                containerSm: string;
                containerMd: string;
                containerLg: string;
            };
            pagination: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            paragraph: {
                size: {
                    small: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    medium: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    large: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    xlarge: {
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
            table: {
                fontSize: string;
            };
            tag: {
                paddingX: string;
                paddingY: string;
                fontSize: string;
                lineHeight: string;
            };
            tab: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            input: {
                paddingX: string;
                fontSize: string;
                height: string;
            };
            formControl: {
                messageFontSize: string;
            };
            progress: {
                paddingX: string;
                fontSize: string;
                height: string;
                backgroundColor: string;
            };
            border: string;
            borderRadius: string;
            borderColor: string;
            padding: string;
            fontSize: string;
            fontColor: string;
            fontColorActive: string;
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightSemiBold: number;
            fontWeightBold: number;
            fontFamily: string;
            iconSize: string;
            iconColor: string;
            iconColorActive: string;
            backgroundColor: string;
            backgroundColorSelected: string;
            backgroundColorActive: string;
            backgroundColorHover: string;
            backgroundColorFocused: string;
            backgroundColorDisabled: string;
            boxShadow: string;
            boxShadowHover: string;
            color: {
                teal50: string;
                teal100: string;
                teal200: string;
                teal300: string;
                teal400: string;
                teal500: string;
                teal600: string;
                teal700: string;
                teal800: string;
                teal900: string;
                blue50: string;
                blue100: string;
                blue200: string;
                blue300: string;
                blue400: string;
                blue500: string;
                blue600: string;
                blue700: string;
                blue800: string;
                blue900: string;
                gray50: string;
                gray100: string;
                gray200: string;
                gray300: string;
                gray400: string;
                gray500: string;
                gray600: string;
                gray700: string;
                gray800: string;
                gray900: string;
                teal: string;
                red: string;
                orange: string;
                amber: string;
                green: string;
                cyan: string;
                blueLight: string;
                blue: string;
                irisBlue: string;
                violet: string;
                magenta: string;
                pink: string;
                brown: string;
                gray: string;
                white: string;
                black: string;
            };
            primary: string;
            success: string;
            warning: string;
            error: string;
            info: string;
            heightComponents: number;
            heightElements: string;
        };
    };
}>> & {};
export default _default;
