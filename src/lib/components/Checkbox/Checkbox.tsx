import React, { useContext } from 'react';
import { ThemeContext, withTheme } from 'styled-components';
import { Checkbox as CheckboxAntd, ConfigProvider } from 'antd';
import omit from 'lodash/omit';
import theme from '@/utils/theme';

const defaultProps: CheckboxProps = {};

type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    children?: JSX.Element | JSX.Element[] | string;
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

Checkbox.defaultProps = defaultProps;

export default withTheme(Checkbox);
