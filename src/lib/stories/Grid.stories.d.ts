/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        (props: {
            fluid?: boolean | undefined;
            children: JSX.Element | JSX.Element[];
        }): import("react/jsx-runtime").JSX.Element;
        propTypes: {
            fluid: import("prop-types").Requireable<boolean>;
        };
    };
};
export default _default;
export declare const grid: () => import("react/jsx-runtime").JSX.Element;
export declare const auto: () => import("react/jsx-runtime").JSX.Element;
export declare const offset: () => import("react/jsx-runtime").JSX.Element;
