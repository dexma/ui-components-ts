import React, { ForwardedRef, forwardRef, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import {
    StyledColorPanel,
    StyledColorPickerInput,
    StyledColorPickerLayout,
    StyledColorPickerPopover,
    StyledColorPickerSwatch,
    StyledSketchPicker,
    StyledSpinnerColorPicker,
} from '@styles/ColorPicker/StyledColorPicker';
import withDataId from '@components/DataId/withDataId';

type ColorPickerProps = {
    dataId?: string;
    isLoading?: boolean;
    placeholder?: string;
    presetColors?: string[];
    onChangePicker?: (color: any) => void;
    onChangeInput?: (e: any) => void;
    showInput?: boolean;
    value?: string;
};

export const ColorPicker = withDataId(
    forwardRef((props: ColorPickerProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { dataId, isLoading, placeholder, presetColors, onChangePicker, onChangeInput, showInput, value } = props;
        const th = useContext(ThemeContext) || theme;
        const [showColorPicker, setShowColorPicker] = useState(false);
        const [color, setColor] = useState(value);

        useEffect(() => {
            setColor(value);
        }, [value]);

        const handleClick = () => {
            setShowColorPicker((status) => !status);
        };
        const handleClose = () => {
            setShowColorPicker(false);
        };

        const handleChangePicker = (color: { hex: string }) => {
            setColor(color.hex);
            onChangePicker && onChangePicker(color);
        };
        const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value);
            onChangeInput && onChangeInput(e);
        };

        return (
            <>
                <StyledColorPickerLayout>
                    <StyledColorPanel data-testid='color-picker' data-id={dataId} color={color} onClick={handleClick} />
                    {showInput && (
                        <StyledColorPickerInput
                            data-testid='input-color-picker'
                            value={!isLoading ? color : ''}
                            ref={ref}
                            placeholder={!isLoading ? placeholder : ''}
                            onChange={handleChangeInput}
                        />
                    )}
                    {isLoading && <StyledSpinnerColorPicker $showInput={showInput !== undefined ? showInput : false} size={20} theme={th} />}
                </StyledColorPickerLayout>
                {showColorPicker && (
                    <StyledColorPickerPopover data-testid='popover-color-picker'>
                        <StyledColorPickerSwatch onClick={handleClose} />
                        <StyledSketchPicker color={color} onChangeComplete={handleChangePicker} presetColors={presetColors} disableAlpha />
                    </StyledColorPickerPopover>
                )}
            </>
        );
    })
);

ColorPicker.defaultProps = {
    dataId: 'colorpicker',
    value: '#FFFFFF',
    placeholder: '#FFFFFF',
    presetColors: [],
};
