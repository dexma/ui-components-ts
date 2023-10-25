/* eslint-disable react/button-has-type */
import React from 'react';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Switch as SwitchAntDesign } from 'antd';

import theme from '@/utils/theme';
import withDataId from '@/components/DataId/withDataId';
import { StyledSwitch } from '@/styles/Switch/StyledSwitch';
import { SwitchProps as AntdSwitchProps, SwitchSize } from 'antd/es/switch';

const propTypes = {
    /**
     * Set default value
     */
    defaultChecked: PropTypes.bool,
    /**
     * Set the switch to disabled
     */
    disabled: PropTypes.bool,
    /**
     * Set the size of switch
     */
    size: PropTypes.oneOf(['default', 'small']),
    /**
     * Callback onChange
     */
    onChange: PropTypes.func,
    /**
     * Callback onClick
     */
    onClick: PropTypes.func,
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
    /**
     * data-id attribute to identfy the element in DOM
     */
    dataId: PropTypes.string,
};

const defaultProps = {
    disabled: false,
    size: 'default',
    theme: theme,
    dataId: 'switch',
};

type SwitchProps = {
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    onChange?: () => void;
    onClick?: () => void;
} & AntdSwitchProps;
export const Switch = (props: SwitchProps) => {
    const { disabled, size, onChange, onClick, dataId } = props;
    const switchProps = omit(props, ['dataId']);

    return (
        <StyledSwitch {...props}>
            <SwitchAntDesign {...switchProps} data-testid='switch' disabled={disabled} onChange={onChange} onClick={onClick} size={size} data-id={dataId} />
        </StyledSwitch>
    );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default withTheme(withDataId(Switch));
