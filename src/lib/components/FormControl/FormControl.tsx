import React, { ForwardedRef, ReactNode, forwardRef, useContext } from 'react';
import find from 'lodash/find';
import omit from 'lodash/omit';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Input } from '@components/Input';
import { Checkbox } from '@components/Checkbox';
import { DatePicker } from '@components/AntdPicker';
import { ColorPicker } from '@components/ColorPicker';
import { AntdSelect } from '@components/AntdSelect';
import { withDataId } from '@components/DataId/withDataId';
import { StyledFormControl } from '@styles/FromControl/StyledFormControl';

type FormControlProps = {
    dataId?: string;
    control: 'Input' | 'Checkbox' | 'Textarea' | 'Select' | 'ColorPicker' | 'DatePicker';
    name?: string;
    error?: boolean;
    success?: boolean;
    message?: string;
    options?: any[];
    value?: any;
    children?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    checked?: boolean;
    type?: 'range' | 'date';
    showInput?: boolean;
    format?: string;
    onChange?: any;
    onFocus?: any;
    onBlur?: any;
    onChangeInput?: any;
    onDatesChange?: any;
    initialColor?: string;
    placeholder?: string;
};

export const FormControl = withDataId(
    forwardRef((props: FormControlProps, ref: ForwardedRef<HTMLElement>) => {
        const { control, value, error, success, message, options, type } = props;
        const newProps = omit(props, ['control', 'error', 'success', 'helper', 'type']);
        const th = useContext(ThemeContext) || theme;
        return (
            <StyledFormControl theme={th} $error={error} $success={success}>
                {control === 'Input' && <Input type='text' className='form-control-input' title={value as string} ref={ref} {...newProps} />}
                {control === 'Checkbox' && <Checkbox className='form-control-checkbox' {...newProps} />}
                {control === 'Textarea' && <textarea rows={2} className='form-control-textarea' {...newProps} />}
                {control === 'Select' && <AntdSelect className='form-control-select' ref={ref} {...newProps} value={find(options, { value })} />}
                {control === 'DatePicker' && <DatePicker className='form-control-date-picker' type={type ?? 'date'} {...newProps} />}
                {control === 'ColorPicker' && <ColorPicker ref={ref} {...newProps} />}
                {message && <span className='form-control-message'>{message}</span>}
            </StyledFormControl>
        );
    }), 'form-control'
);

StyledFormControl.displayName = 'StyledFormControl';
