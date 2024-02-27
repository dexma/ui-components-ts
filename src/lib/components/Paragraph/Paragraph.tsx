import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledParagraph } from '@styles/Paragraph/StyledParagraph';

const defaultProps = {
    color: 'gray700',
    margin: '0 0 0 0',
    size: 'medium',
};

export const Paragraph = (props: { margin: string; color: string; size: 'small' | 'medium' | 'large' | 'xlarge'; children: JSX.Element | JSX.Element[] | string }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledParagraph $margin={props.margin} color={props.color} size={props.size} theme={th}>
            {props.children}
        </StyledParagraph>
    );
};

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.defaultProps = defaultProps;

export default Paragraph;
