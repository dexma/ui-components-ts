import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { TagProps } from '@components';
import { StyledTagGroup } from '@styles/TagGroup/StyledTagGroup';

export const TagGroup = (props: { children: React.ReactElement<TagProps> | React.ReactElement<TagProps>[] }) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledTagGroup data-testid='tag-group' theme={th}>
            {props.children}
        </StyledTagGroup>
    );
};

StyledTagGroup.displayName = 'StyledTagGroup';

export default TagGroup;
