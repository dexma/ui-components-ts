import React, { type ForwardedRef, type ReactNode, forwardRef, useContext } from 'react';
import find from 'lodash/find';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Input } from '@components/Input';
import { Checkbox } from '@components/Checkbox';
import { DatePicker } from '@components/DatePicker';
import { ColorPicker } from '@components/ColorPicker';
import { Select } from '@components/Select';
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
    forwardRef(({ control, value, error, success, message, options, type, ...props }: FormControlProps, ref: ForwardedRef<HTMLElement>) => {
        const th = useContext(ThemeContext) || defaultTheme;
        return (
            <StyledFormControl theme={th} $error={error} $success={success}>
                {control === 'Input' && <Input type='text' className='form-control-input' title={value as string} ref={ref} {...props} />}
                {control === 'Checkbox' && <Checkbox className='form-control-checkbox' {...props} />}
                {control === 'Textarea' && <textarea rows={2} className='form-control-textarea' {...props} />}
                {control === 'Select' && <Select className='form-control-select' ref={ref} {...props} value={find(options, { value })} />}
                {control === 'DatePicker' && <DatePicker className='form-control-date-picker' type={type ?? 'date'} {...props} />}
                {control === 'ColorPicker' && <ColorPicker ref={ref} {...props} />}
                {message && <span className='form-control-message'>{message}</span>}
            </StyledFormControl>
        );
    }),
    'form-control'
);

StyledFormControl.displayName = 'StyledFormControl';
