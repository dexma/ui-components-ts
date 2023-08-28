import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { StyledCell } from '@/styles/Cell/StyledCell';
import theme from '@/utils/theme';
import { ThemeContext } from 'styled-components';

const propTypes = {
    /**
     * Responsive extra small size
     */
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
    /**
     * Responsive small size
     */
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
    /**
     * Responsive medium size
     */
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
    /**
     * Responsive large size
     */
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    first: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    last: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

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

export const Cell = (props: CellProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledCell
            $xs={props.xs}
            $sm={props.sm}
            $md={props.md}
            $lg={props.lg}
            $xsOffset={props.xsOffset}
            $smOffset={props.smOffset}
            $mdOffset={props.mdOffset}
            $lgOffset={props.lgOffset}
            $direction={props.direction}
            className={props.className}
            theme={th}
        >
            {props.children}
        </StyledCell>
    );
};

StyledCell.displayName = 'StyledCell';

Cell.propTypes = propTypes;

export default Cell;
