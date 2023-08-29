import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { headingFontSize } from '@/utils/selectors';
import { Theme } from '@/utils/theme';

const getSizes = (as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', theme: Theme) => {
    const fontSizes = headingFontSize(theme);
    const typeHeading = as;
    return css`
        font-size: ${fontSizes && typeHeading ? fontSizes[typeHeading] : 'inherit'};
    `;
};

const StyledHeading = styled.div<{ as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; $color: string; theme: Theme }>`
    ${(props) => getSizes(props.as, props.theme)};
    color: ${(props) => get(props.theme.color, props.$color)};
`;

export { StyledHeading };
