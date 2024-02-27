import React, { useState } from 'react';

import { Toast, ToastType } from '@components/Toaster/Toast';
import ToasterContext from '@components/Toaster/ToasterContext';

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
    const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout>();

    const showToast = ({ text, type }: ToastConfig) => {
        timeoutState ? clearTimeout(timeoutState) : undefined;
        setVisible(true);
        setToastConfig({ text: text, type: type });
        setTimeoutState(
            setTimeout(() => {
                setVisible(true);
            }, 5000)
        );
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

export default Toaster;
