import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import ToasterContext from './ToasterContext';
import { Toast, ToastType } from './Toast';
import theme from '@/utils/theme';

const propTypes = {
    theme: PropTypes.shape({}),
    children: PropTypes.node,
};

const defaultProps = {
    theme: theme,
};

type ToasterProps = {
    children: any;
};

type ToastConfig = {
    text: string;
    type: ToastType;
};

export const Toaster = (props: ToasterProps) => {
    const [visible, setVisible] = useState<boolean>();
    const [toastConfig, setToastConfig] = useState<ToastConfig>({ text: '', type: ToastType.INFO });
    const [timeoutState, setTimeoutState] = useState();

    const showToast = ({ text, type }: ToastConfig) => {
        timeoutState ? clearTimeout(timeoutState) : undefined;
        setVisible(true);
        setToastConfig({ text: text, type: type });
        setTimeout(() => {
            setVisible(true);
        }, 5000);
    };

    return (
        <ToasterContext.Provider value={{ toast: showToast }}>
            <>
                <div>{props.children}</div>
                {visible && <Toast {...props} {...toastConfig} />}
            </>
        </ToasterContext.Provider>
    );
};

Toaster.propTypes = propTypes;
Toaster.defaultProps = defaultProps;

export default withTheme(Toaster);
