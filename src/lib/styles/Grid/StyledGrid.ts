import styled, { css } from 'styled-components';

import { gridOuterPadding, gridContainerSm, gridContainerMd, gridContainerLg } from '@/utils/selectors';
import { Theme } from '@/utils/theme';

const getWidthContainer = (props: { theme: Theme }) => {
    return css`
        @media only screen and (min-width: 48em) {
            max-width: ${gridContainerSm(props.theme)};
        }

        @media only screen and (min-width: 64em) {
            max-width: ${gridContainerMd(props.theme)};
        }

        @media only screen and (min-width: 75em) {
            max-width: ${gridContainerLg(props.theme)};
        }
    `;
};

const StyledGrid = styled.div<{ $fluid?: boolean; theme: Theme }>`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    ${(props: { $fluid?: boolean; theme: Theme }) =>
        props.$fluid
            ? css`
                  padding-right: ${gridOuterPadding(props.theme)};
                  padding-left: ${gridOuterPadding(props.theme)};
              `
            : getWidthContainer(props)};
`;

export { StyledGrid };
