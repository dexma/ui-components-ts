import React, { CSSProperties, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledRow } from '@styles/Row/StyledRow';

const defaultProps = {
    reverse: false,
    alignItems: 'center',
};

export const Row = (props: { className?: string; reverse?: boolean; alignItems?: string; children: ReactNode; style?: CSSProperties }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledRow className={props.className} style={{ ...props.style }} $alignItems={props.alignItems} $reverse={props.reverse} theme={th}>
            {props.children}
        </StyledRow>
    );
};

StyledRow.displayName = 'StyledRow';

Row.defaultProps = defaultProps;

export default Row;
