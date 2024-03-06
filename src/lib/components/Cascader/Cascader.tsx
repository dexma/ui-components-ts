import React, { MouseEvent, ReactNode, useContext, useRef, useState } from 'react';
import { Cascader as CascaderAntd, ConfigProvider, CascaderProps as CascaderAntdProps } from 'antd';
import { CascaderRef, DefaultOptionType } from 'antd/es/cascader';
import { DefaultTheme, ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Icon } from '@components/Icon';
import { CascaderOptionStyle, StyledTagSelected } from '@styles/Cascader/StyledCascader';

type Value = (string | number)[];
type CascaderProps<OptionType extends DefaultOptionType> = CascaderAntdProps & {
    open: boolean;
    options: OptionType[];
    onChange?: (value: Value | Value[]) => void;
};

export const tagRender = (theme: DefaultTheme) => (props: { label: ReactNode; value: string; closable: boolean; onClose: () => void }) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <StyledTagSelected onMouseDown={onPreventMouseDown} $closable={closable} style={{ marginRight: 4 }} data-testid={`tag-option-selected-${value}`} theme={theme}>
            {label}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} color={theme.color.white} />}
        </StyledTagSelected>
    );
};

export const Cascader = <OptionType extends DefaultOptionType>(props: CascaderProps<OptionType>) => {
    const { multiple, options, maxTagCount, onChange, open, ...rest } = props;
    const th = useContext(ThemeContext) || theme;
    const [currentOpen, setCurrentOpen] = useState(open || false);
    const ref = useRef<CascaderRef>();

    const handleOnChange = (value: Value | Value[]) => {
        onChange && onChange(value);
        if (!multiple) ref.current?.blur() && setCurrentOpen(false);
    };

    return (
        <>
            <CascaderOptionStyle theme={th} />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: th.primary,
                    },
                }}
            >
                <CascaderAntd
                    data-testid='cascader'
                    multiple={multiple}
                    options={options}
                    onChange={handleOnChange}
                    maxTagCount={maxTagCount}
                    ref={(innerRef) => {
                        if (innerRef) ref.current = innerRef;
                    }}
                    onDropdownVisibleChange={(e) => {
                        if (e !== currentOpen) {
                            setCurrentOpen(e);
                        }
                    }}
                    onFocus={() => {
                        setCurrentOpen(true);
                    }}
                    tagRender={tagRender(theme)}
                    maxTagPlaceholder={(values) => `+${values.length}`}
                    open={currentOpen}
                    {...rest}
                />
            </ConfigProvider>
        </>
    );
};

const defaultProps = {
    open: false,
    multiple: false,
    options: [],
};

Cascader.defaultProps = defaultProps;
