import React, { ReactNode, useContext } from 'react';
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
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    ['data-testid']?: string;
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
            style={props.style}
            onClick={props.onClick}
            data-testid={props['data-testid'] ?? 'cell'}
        >
            {props.children}
        </StyledCell>
    );
};

StyledCell.displayName = 'StyledCell';
