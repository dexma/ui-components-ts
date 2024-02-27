import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledDivider } from '@styles/Divider/StyledDivider';

const defaultProps = {
    vertical: false,
};

export const Divider = (props: { vertical: boolean }) => {
    const th = useContext(ThemeContext) || theme;
    return <StyledDivider data-testid='divider' $vertical={props.vertical} theme={th} />;
};

StyledDivider.displayName = 'StyledDivider';

Divider.defaultProps = defaultProps;
