import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { StyledParagraph } from '@/styles/Paragraph/StyledParagraph';
import theme from '@/utils/theme';

const propTypes = {
    /**
     * Set the color name for the paragraph, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     */
    color: PropTypes.string,
    /**
     * Set margin like css
     */
    margin: PropTypes.string,
    /**
     * Set the size of button
     */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

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

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
