import React, { ReactNode, useContext } from 'react';
import { Checkbox as CheckboxAntd, ConfigProvider } from 'antd';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';

export type CheckboxProps = {
    dataId?: string;
    checked?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
    onChange?: () => void;
};

export const Checkbox = withDataId(({ checked, disabled, dataId, children, ...props }: CheckboxProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <CheckboxAntd disabled={disabled} checked={checked} {...props}>
                {children && <span data-id={dataId}>{children}</span>}
            </CheckboxAntd>
        </ConfigProvider>
    );
}, 'checkbox');
