import React, { ReactNode, useContext } from 'react';
import omit from 'lodash/omit';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledGrid } from '@styles/Grid/StyledGrid';

export const Grid = (props: { fluid?: boolean; className?: string; children: ReactNode | ReactNode[] | string }) => {
    const gridProps = omit(props, ['fluid', 'children']);
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledGrid data-testid='grid' $fluid={props.fluid} theme={th} {...gridProps}>
            {props.children}
        </StyledGrid>
    );
};
