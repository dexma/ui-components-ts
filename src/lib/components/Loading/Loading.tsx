import React, { CSSProperties, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Spinner } from '@components';
import { StyledLoading } from '@styles/Loading/StyledLoading';

type LoadingProps = {
    size?: number;
    isLoading: boolean;
    color?: typeof theme.color;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const Loading = ({ color, size = 24, isLoading, children, ...props }: LoadingProps) => {
    const th = useContext(ThemeContext) || theme;
    return isLoading ? (
        <StyledLoading data-testid='loading' theme={th} {...props}>
            <Spinner color={color} size={size} />
        </StyledLoading>
    ) : (
        children
    );
};

export default Loading;
