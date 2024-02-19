/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { Alert } from '../Alert';
import theme, { Theme } from '@/utils/theme';
import { StyledToast } from '@/styles/Toast/StyledToast';

export enum ToastType {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
}

const alertType: { [key in ToastType]: 'info' | 'success' | 'error' | 'warning' } = {
    [ToastType.INFO]: 'info',
    [ToastType.SUCCESS]: 'success',
    [ToastType.WARNING]: 'warning',
    [ToastType.ERROR]: 'error',
};

const propTypes = {
    theme: PropTypes.shape({}),
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(ToastType)).isRequired,
};

const defaultProps = {
    theme: theme,
};

type ToastProps = {
    text: string;
    theme?: Theme;
    type: ToastType;
};

export const Toast = ({ text, type, theme }: ToastProps) => {
    const alertTypeValue = alertType[type];

    return (
        <StyledToast theme={theme}>
            <Alert type={alertTypeValue} description={text} showIcon />
        </StyledToast>
    );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default withTheme(Toast);
