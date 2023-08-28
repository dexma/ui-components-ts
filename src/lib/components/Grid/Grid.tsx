import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import theme, { Theme } from '@/utils/theme';
import { StyledGrid } from '@/styles/Grid/StyledGrid';

const propTypes = {
    /**
     * Fluid grid means full grid
     */
    fluid: PropTypes.bool,
};

export const Grid = (props: { fluid?: boolean; children: JSX.Element | JSX.Element[] }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledGrid $fluid={props.fluid} theme={th}>
            {props.children}
        </StyledGrid>
    );
};

StyledGrid.displayName = 'StyledGrid';

Grid.propTypes = propTypes;

export default Grid;
