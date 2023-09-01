import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import theme from '@/utils/theme';
import { StyledTagGroup } from '@/styles/TagGroup/StyledTagGroup';

export const TagGroup = (props: { children: React.ReactNode }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledTagGroup data-testid='tag-group' theme={th}>
            {props.children}
        </StyledTagGroup>
    );
};

StyledTagGroup.displayName = 'StyledTagGroup';

export default TagGroup;
