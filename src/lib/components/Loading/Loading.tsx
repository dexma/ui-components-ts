import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import { Spinner } from '@/components/Spinner/Spinner';
import { StyledLoading } from '@/styles/Loading/StyledLoading';
import theme from '@/utils/theme';

const propTypes = {
    /**
     * Set the color name for the loading, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     */
    color: PropTypes.string,
    /**
     * Size base on the theme
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * The status of the loading
     */
    type: PropTypes.oneOf(['spinner']),
    /**
     * The status of the loading
     */
    isLoading: PropTypes.bool,
};

const defaultProps = {
    size: 24,
    type: 'spinner',
    isLoading: false,
};

type LoadingProps = {
    size: number;
    type: 'spinner';
    isLoading: boolean;
    color?: keyof typeof theme.color;
    children?: React.ReactNode;
};

export const Loading = (props: LoadingProps) => {
    const { color, size, type, isLoading, children } = props;
    const th = useContext(ThemeContext) || theme;
    const loadingProps = omit(props, ['isLoading', 'children', 'size', 'color']);
    return isLoading ? (
        <StyledLoading data-testid='loading' {...loadingProps}>
            {type === 'spinner' && <Spinner color={color} size={size} />}
        </StyledLoading>
    ) : (
        children
    );
};

StyledLoading.displayName = 'StyledLoading';

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
