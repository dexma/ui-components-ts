import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledHeading } from '@styles/Heading/StyledHeading';

const defaultProps = {
    color: 'gray900',
    type: 'h3',
};

type HeadingProps = {
    text: string;
    color: string;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
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

Heading.defaultProps = defaultProps;

export default Heading;
