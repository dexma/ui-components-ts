import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, withTheme } from 'styled-components';

import { StyledDivider } from '@/styles/Divider/StyledDivider';
import theme from '@/utils/theme';

const propTypes = {
    /**
     * Show the divider vertical
     */
    vertical: PropTypes.bool,
};

const defaultProps = {
    vertical: false,
};

export const Divider = (props: { vertical: boolean }) => {
    const th = useContext(ThemeContext) || theme;
    return <StyledDivider data-testid='divider' $vertical={props.vertical} theme={th} />;
};

StyledDivider.displayName = 'StyledDivider';

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default withTheme(Divider);
