import React from 'react';
import { ConfigProvider, DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';

import defaultTheme, { Theme } from '@utils/theme';
import { Icon } from '@components/Icon';
import { withDataId } from '@components/DataId/withDataId';
import { DropdownDatePickerStyles, StyledAntdDatePicker, StyledAntdRangePicker } from '@styles/AntdPicker/StyledAntdPicker';
import * as datePickerUtils from './datePickerUtils';

type CommonProps = {
    lang?: 'en' | 'bg' | 'br' | 'be' | 'ca' | 'da' | 'de' | 'el' | 'es' | 'fi' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'sl' | 'sv' | 'tr' | 'us' | 'zh';
    dataId?: string;
    'data-testid'?: string;
    theme?: Theme;
};

type AntdDatePickerProps = DatePickerProps & CommonProps;

export const AntdDatePicker = withDataId((props: AntdDatePickerProps) => {
    const { lang, theme, dataId } = props;
    const th = theme ?? defaultTheme;

    return (
        <ConfigProvider
            locale={datePickerUtils.getLocale(lang ?? 'en')}
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <DropdownDatePickerStyles theme={th} />
            <StyledAntdDatePicker
                {...props}
                data-id={dataId}
                data-testid='antd-date-picker'
                nextIcon={<Icon name='chevron_right_l' size={10} color='gray600' />}
                prevIcon={<Icon name='chevron_left_l' size={10} color='gray600' />}
                suffixIcon={<Icon name='calendar_blank' size={18} color='gray600' />}
            />
        </ConfigProvider>
    );
});

AntdDatePicker.defaultProps = {
    theme: defaultTheme,
    dataId: 'datepicker',
    lang: 'en',
};

export type AntdRangePickerProps = RangePickerProps & CommonProps;

export const AntdRangePicker = withDataId((props: AntdRangePickerProps) => {
    const { dataId, lang, theme, ...rest } = props; // Antd Props
    const th = theme ?? defaultTheme;

    return (
        <ConfigProvider
            locale={datePickerUtils.getLocale(lang ?? 'en')}
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <DropdownDatePickerStyles theme={th} />
            <StyledAntdRangePicker
                {...rest}
                data-id={dataId}
                data-testid='antd-range-picker'
                separator={<Icon name='arrow_right' size={18} color='gray600' />}
                suffixIcon={<Icon name='calendar_range' size={18} color='gray600' />}
                theme={defaultTheme}
            />
        </ConfigProvider>
    );
});

AntdRangePicker.defaultProps = {
    theme: defaultTheme,
    dataId: 'rangepicker',
    lang: 'en',
};

type DatePicker = { type: 'date' | 'range' } & (AntdDatePickerProps | AntdRangePickerProps);

export const DatePicker = (props: DatePicker) => {
    const { type, ...rest } = props;
    if (type === 'range') {
        return <AntdRangePicker {...(rest as AntdRangePickerProps)} />;
    }
    return <AntdDatePicker {...(rest as AntdDatePickerProps)} />;
};
