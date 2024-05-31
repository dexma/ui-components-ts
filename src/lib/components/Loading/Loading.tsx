import React, { CSSProperties, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Spinner } from '@components';
import { StyledLoading } from '@styles/Loading/StyledLoading';

const defaultProps = {
    size: 24,
    isLoading: false,
};

type LoadingProps = {
    size: number;
    isLoading: boolean;
    color?: typeof theme.color;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const Loading = (props: LoadingProps) => {
    const { color, size, isLoading, children, ...rest } = props;
    const th = useContext(ThemeContext) || theme;
    return isLoading ? (
        <StyledLoading data-testid='loading' theme={th} {...rest}>
            <Spinner color={color} size={size} />
        </StyledLoading>
    ) : (
        children
    );
};

Loading.defaultProps = defaultProps;

export default Loading;
