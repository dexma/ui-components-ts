/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        (props: {
            margin: string;
            color: string;
            size: "medium" | "large" | "small" | "xlarge";
            children: string | JSX.Element | JSX.Element[];
        }): import("react/jsx-runtime").JSX.Element;
        propTypes: {
            color: import("prop-types").Requireable<string>;
            margin: import("prop-types").Requireable<string>;
            size: import("prop-types").Validator<string>;
        };
        defaultProps: {
            color: string;
            margin: string;
            size: string;
        };
    };
};
export default _default;
export declare const paragraph: () => import("react/jsx-runtime").JSX.Element;
