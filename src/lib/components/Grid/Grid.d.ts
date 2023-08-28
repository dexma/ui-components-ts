/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const Grid: {
    (props: {
        fluid?: boolean;
        children: JSX.Element | JSX.Element[];
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /**
         * Fluid grid means full grid
         */
        fluid: PropTypes.Requireable<boolean>;
    };
};
export default Grid;
