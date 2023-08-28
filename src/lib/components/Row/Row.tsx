import React, { ReactNode, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, withTheme } from 'styled-components';

import theme, { Theme } from '@/utils/theme';
import { StyledRow } from '@/styles/Row/StyledRow';

const defaultProps = {
    reverse: false,
    alignItems: 'center',
    theme: theme,
};

export const Row = (props: { reverse?: boolean; alignItems?: string; theme: Theme; children: ReactNode }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledRow $alignItems={props.alignItems} $reverse={props.reverse}>
            {props.children}
        </StyledRow>
    );
};

StyledRow.displayName = 'StyledRow';

Row.defaultProps = defaultProps;

export default withTheme(Row);
