import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import theme from '@utils/theme';
import { StyledSpinner } from '@styles/Spinner/StyledSpinner';

const defaultProps = {
    color: 'gray400',
    size: 24,
};

export const Spinner = (props: { color?: string; size: number }) => {
    const th = useContext(ThemeContext) ?? theme;
    const gridProps = omit(props, ['size', 'color']);
    return <StyledSpinner data-testid='spinner' $size={props.size} color={props.color || 'gray400'} theme={th} {...gridProps} />;
};

StyledSpinner.displayName = 'StyledSpinner';

Spinner.defaultProps = defaultProps;
