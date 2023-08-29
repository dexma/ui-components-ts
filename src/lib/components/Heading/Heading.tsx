import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { StyledHeading } from '@/styles/Heading/StyledHeading';
import theme from '@/utils/theme';

const propTypes = {
    /**
     * Set the color name for the heading, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     */
    color: PropTypes.string,
    /**
     * Set the type of heading
     */
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    /**
     * Set the text of heading
     */
    text: PropTypes.string.isRequired,
};

const defaultProps = {
    color: 'gray900',
    type: 'h3',
};

type HeadingProps = {
    text: string;
    color: string;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: JSX.Element | JSX.Element[] | string;
};

export const Heading = (props: HeadingProps) => {
    const { color, type, text, children } = props;
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledHeading data-testid='heading' as={type} $color={color} theme={th}>
            {text}
            {children && children}
        </StyledHeading>
    );
};

StyledHeading.displayName = 'StyledHeading';

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
