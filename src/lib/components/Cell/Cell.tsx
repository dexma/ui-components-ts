import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledCell } from '@styles/Cell/StyledCell';

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
    style?: React.CSSProperties;
};

export const Cell = (props: CellProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledCell
            data-testid='cell'
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
            style={props.style}
        >
            {props.children}
        </StyledCell>
    );
};

StyledCell.displayName = 'StyledCell';
