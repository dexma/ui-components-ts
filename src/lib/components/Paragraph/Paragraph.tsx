import React, { type CSSProperties, type ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledParagraph } from '@styles/Paragraph/StyledParagraph';

export type ParagraphProps = { margin?: string; color?: string; size?: 'small' | 'medium' | 'large' | 'xlarge'; children: ReactNode; className?: string; style?: CSSProperties };

export const Paragraph = ({ margin = '0 0 0 0', color = 'gray700', size = 'medium', children, ...props }: ParagraphProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledParagraph $margin={margin} color={color} size={size} theme={th} {...props}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph;
