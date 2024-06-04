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
    const { xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, direction, children, onClick, className, style, ...rest} = props;
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledCell
            $xs={xs}
            $sm={sm}
            $md={md}
            $lg={lg}
            $xsOffset={xsOffset}
            $smOffset={smOffset}
            $mdOffset={mdOffset}
            $lgOffset={lgOffset}
            $direction={direction}
            className={className}
            theme={th}
            style={style}
            onClick={onClick}
            {...rest}
            data-testid={props['data-testid'] ?? 'cell'}
        >
            {children}
        </StyledCell>
    );
};

StyledCell.displayName = 'StyledCell';
