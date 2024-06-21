import React, { ReactNode, useContext } from 'react';
import omit from 'lodash/omit';
import { Checkbox as CheckboxAntd, ConfigProvider } from 'antd';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';

type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
    onChange?: () => void;
};

export const Checkbox = (props: CheckboxProps) => {
    const { checked, disabled, className, children } = props;
    const th = useContext(ThemeContext) || theme;
    const checkboxProps = omit(props, ['children', 'disabled', 'checked', 'className']);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <CheckboxAntd disabled={disabled} checked={checked} className={className} {...checkboxProps}>
                {children && <span>{children}</span>}
            </CheckboxAntd>
        </ConfigProvider>
    );
};