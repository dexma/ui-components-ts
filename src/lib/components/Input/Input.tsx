import React, { useState, forwardRef, ForwardedRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import { StyledInput } from '@styles/Input/StyledInput';
import theme from '@utils/theme';
import { Icon, Spinner } from '@components';
import { withDataId } from '@components/DataId/withDataId';

const defaultProps = {
    dataId: 'input',
};

type InputProps = {
    placeholder?: string;
    id?: string;
    icon?: string;
    label?: string | React.ReactNode;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type?: string;
    name?: string;
    disabled?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataId?: string;
    children?: React.ReactNode;
    className?: string;
};

export const Input = withDataId(
    forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const [focused, setFocused] = useState(false);
        const { icon, isLoading, onFocus, onBlur, children, dataId, className } = props;
        const th = useContext(ThemeContext) || theme;
        const newProps = omit(props, ['placeholder', 'id', 'label', 'value', 'type', 'name', 'onChange', 'onFocus', 'onBlur', 'dataId']);
        const inputProps = omit(props, ['icon', 'isLoading', 'theme', 'children', 'onFocus', 'onBlur', 'dataId']);
        const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setFocused(true);
            onFocus && onFocus(e);
        };
        const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setFocused(false);
            onBlur && onBlur(e);
        };
        return (
            <StyledInput
                data-testid='input'
                $icon={icon}
                $isLoading={isLoading !== undefined ? isLoading : false}
                $focused={focused}
                data-id={dataId}
                theme={th}
                className={className}
                {...newProps}
            >
                {icon && (
                    <div className='icon-container'>
                        <Icon name={icon} size={20} color='gray500' />
                    </div>
                )}
                <input onFocus={handleOnFocus} onBlur={handleOnBlur} {...inputProps} ref={ref} data-testid='input-element' />
                {isLoading && <Spinner size={20} />}
                {children && children}
            </StyledInput>
        );
    })
);

Input.defaultProps = defaultProps;
