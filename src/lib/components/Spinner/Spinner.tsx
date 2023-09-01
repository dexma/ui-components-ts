import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { StyledSpinner } from '@/styles/Spinner/StyledSpinner';
import theme from '@/utils/theme';

const propTypes = {
    /**
     * Set the color name for the spinner, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     */
    color: PropTypes.string,
    /**
     * Size base on the theme
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
    color: 'gray400',
    size: 24,
};

export const Spinner = (props: { color: keyof typeof theme.color; size: number }) => {
    const th = useContext(ThemeContext) || theme;
    return <StyledSpinner data-testid='spinner' $size={props.size} color={props.color} theme={th} />;
};

StyledSpinner.displayName = 'StyledSpinner';

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
