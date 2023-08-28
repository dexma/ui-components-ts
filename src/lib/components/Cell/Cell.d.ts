/// <reference types="react" />
import PropTypes from 'prop-types';
type CellProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    direction?: string;
    children?: JSX.Element | JSX.Element[];
    className?: string;
};
export declare const Cell: {
    (props: CellProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /**
         * Responsive extra small size
         */
        xs: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        /**
         * Responsive small size
         */
        sm: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        /**
         * Responsive medium size
         */
        md: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        /**
         * Responsive large size
         */
        lg: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        xsOffset: PropTypes.Requireable<number>;
        smOffset: PropTypes.Requireable<number>;
        mdOffset: PropTypes.Requireable<number>;
        lgOffset: PropTypes.Requireable<number>;
        first: PropTypes.Requireable<string>;
        last: PropTypes.Requireable<string>;
    };
};
export default Cell;
