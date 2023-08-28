/// <reference types="react" />
import { Theme } from '../../../../../../../../../src/lib/utils/theme';
export declare const getSpinnerWhite: () => import("styled-components").RuleSet<object>;
export declare const getButtonBase: (theme: Theme) => import("styled-components").RuleSet<object>;
type ButtonSizeProps = {
    size: string;
    paddingX: string;
    fontSize: string;
    height: string;
    theme: Theme;
};
export declare const getButtonSize: (props: ButtonSizeProps) => import("styled-components").RuleSet<object>;
export declare const getIconSize: (props: StyledButtonProps) => import("styled-components").RuleSet<object>;
type ButtonVariantProps = {
    theme: Theme;
    disabled: boolean;
    isLoading: boolean;
    iconColor: string;
};
export declare const getButtonVariantPrimary: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantSecondary: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantOutline: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantDestructive: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantLink: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantIcon: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantIconSecondary: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonVariantIconOutline: (props: ButtonVariantProps) => import("styled-components").RuleSet<object>;
export declare const getButtonExpanded: () => import("styled-components").RuleSet<object>;
export declare const getButtonDisabled: () => import("styled-components").RuleSet<object>;
export declare const getButtonLoading: (props: StyledButtonProps) => import("styled-components").RuleSet<object>;
export declare const getButtonCircle: (props: any) => import("styled-components").RuleSet<object>;
type StyledButtonProps = {
    size: string;
    variant: string;
    disabled: boolean;
    isCircle: boolean;
    isExpanded: boolean;
    isLoading: boolean;
    iconColor: string;
    iconAfter: string;
    text: string;
    paddingX: string;
    fontSize: string;
    height: string;
    theme: Theme;
};
declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledButtonProps>>;
export { StyledButton };
