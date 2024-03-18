import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import theme from '@utils/theme';
import { Spinner } from '@components';
import { StyledLoading } from '@styles/Loading/StyledLoading';

const defaultProps = {
    size: 24,
    type: 'spinner',
    isLoading: false,
};

type LoadingProps = {
    size: number;
    type: 'spinner';
    isLoading: boolean;
    color?: typeof theme.color;
    children?: React.ReactNode;
};

export const Loading = (props: LoadingProps) => {
    const { color, size, type, isLoading, children } = props;
    const th = useContext(ThemeContext) || theme;
    const loadingProps = omit(props, ['isLoading', 'children', 'size', 'color']);
    return isLoading ? (
        <StyledLoading data-testid='loading' theme={th} {...loadingProps}>
            {type === 'spinner' && <Spinner color={color} size={size} />}
        </StyledLoading>
    ) : (
        children
    );
};

Loading.defaultProps = defaultProps;

export default Loading;
