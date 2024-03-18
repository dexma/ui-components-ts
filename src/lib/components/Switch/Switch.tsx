import React, { useContext } from 'react';
import { omit } from 'lodash';
import { Switch as SwitchAntDesign } from 'antd';
import { SwitchProps as AntdSwitchProps, SwitchSize } from 'antd/es/switch';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledSwitch } from '@styles/Switch/StyledSwitch';

const defaultProps = {
    disabled: false,
    size: 'default' as SwitchSize,
    dataId: 'switch',
};

type SwitchProps = {
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    onChange?: () => void;
    onClick?: () => void;
} & AntdSwitchProps;

export const Switch = withDataId((props: SwitchProps) => {
    const { disabled, size, onChange, onClick, dataId } = props;
    const switchProps = omit(props, ['dataId']);
    const th = useContext(ThemeContext) || theme;

    return (
        <StyledSwitch {...switchProps} theme={th}>
            <SwitchAntDesign {...switchProps} data-testid='switch' disabled={disabled} onChange={onChange} onClick={onClick} size={size} data-id={dataId} />
        </StyledSwitch>
    );
});

Switch.defaultProps = defaultProps;
