import React, { CSSProperties, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledRow } from '@styles/Row/StyledRow';

export const Row = ({
    className,
    style,
    alignItems = 'center',
    reverse,
    children,
    ...props
}: {
    className?: string;
    reverse?: boolean;
    alignItems?: string;
    children: ReactNode;
    style?: CSSProperties;
}) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledRow className={className} style={{ ...style }} $alignItems={alignItems} $reverse={reverse} theme={th} {...props}>
            {children}
        </StyledRow>
    );
};

StyledRow.displayName = 'StyledRow';

export default Row;
