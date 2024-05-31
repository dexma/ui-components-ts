import React, { CSSProperties, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledParagraph } from '@styles/Paragraph/StyledParagraph';

const defaultProps = {
    color: 'gray700',
    margin: '0 0 0 0',
    size: 'medium',
};

type ParagraphProps = { margin: string; color: string; size: 'small' | 'medium' | 'large' | 'xlarge'; children: ReactNode; className?: string; style?: CSSProperties };

export const Paragraph = (props: ParagraphProps) => {
    const { margin, color, size, children, ...rest } = props;
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledParagraph $margin={margin} color={color} size={size} theme={th} {...rest}>
            {children}
        </StyledParagraph>
    );
};

Paragraph.defaultProps = defaultProps;

export default Paragraph;
