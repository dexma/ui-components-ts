import React, { HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledDivider } from '@styles/Divider/StyledDivider';

export const Divider = ({ vertical, ...props }: { vertical?: boolean } & HTMLAttributes<HTMLHRElement>) => {
    const th = useContext(ThemeContext) || theme;
    return <StyledDivider data-testid='divider' $vertical={vertical} theme={th} {...props} />;
};
