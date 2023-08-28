/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const Paragraph: {
    (props: {
        margin: string;
        color: string;
        size: 'small' | 'medium' | 'large' | 'xlarge';
        children: JSX.Element | JSX.Element[] | string;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /**
         * Set the color name for the paragraph, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
         */
        color: PropTypes.Requireable<string>;
        /**
         * Set margin like css
         */
        margin: PropTypes.Requireable<string>;
        /**
         * Set the size of button
         */
        size: PropTypes.Validator<string>;
    };
    defaultProps: {
        color: string;
        margin: string;
        size: string;
    };
};
export default Paragraph;
