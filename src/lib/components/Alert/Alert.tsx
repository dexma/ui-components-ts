import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import get from 'lodash/get';

import theme from '@/utils/theme';
import { StyledAlert } from '@/styles/Alert/StyledAlert';
import { Icon, IconSize } from '@/components/Icon';

const propTypes = {
    /**
     * Type of Alert styles
     */
    type: PropTypes.oneOf(['basic', 'outline', 'warning', 'info', 'success', 'error']).isRequired,
    /**
     * Content of Alert
     */
    message: PropTypes.string.isRequired,
    /**
     * Whether Alert can be closed
     */
    closable: PropTypes.bool,
    /**
     * Show the icon of the type you passed: `success`, `info`, `warning`, `error`
     */
    showIcon: PropTypes.bool,
    /**
     * Additional content description of Alert
     */
    description: PropTypes.string,
    /**
     * Callback when Alert is closed
     */
    onClose: PropTypes.func,
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
};

const defaultProps = {
    closable: false,
    showIcon: false,
    type: 'warning',
    theme: theme,
};

type AlertProps = {
    message: string | JSX.Element;
    type: 'basic' | 'outline' | 'warning' | 'info' | 'success' | 'error';
    onClose?: (e: any) => void;
    description?: string;
    showIcon?: boolean;
    closable?: boolean;
};

export const Alert = (props: AlertProps) => {
    const { type, closable, message, description, showIcon, onClose } = props;
    const th = useContext(ThemeContext) || theme;
    const [closed, setClosed] = useState(false);
    let renderIcon = null;
    switch (type) {
        case 'outline':
            renderIcon = 'alert_sign';
            break;
        case 'warning':
            renderIcon = 'alert_sign';
            break;
        case 'info':
            renderIcon = 'circle_info_outline';
            break;
        case 'success':
            renderIcon = 'circle_check_outline';
            break;
        case 'error':
            renderIcon = 'circle_delete_outline';
            break;
        case 'basic':
        default:
            renderIcon = 'alert_sign';
            break;
    }
    const handleClose = (e: any) => {
        setClosed(true);
        onClose && onClose(e);
    };
    const getDescription = (description: string) => (
        <span data-testid='alert-description' className='description'>
            {description}
        </span>
    );

    return closed ? null : (
        <StyledAlert data-testid='alert' role='alert' $showIcon={props.showIcon} $type={type} $description={description} $message={message}>
            <span data-testid='alert-message' className='message'>
                {showIcon && <Icon color={get(th.color, 'color')} name={renderIcon} size={IconSize.MEDIUM} className='icon' data-testid={`alert-icon-${type}`} />}
                {message}
                {!message && description && getDescription(description)}
            </span>
            {message && description && getDescription(description)}
            {closable ? (
                <Icon color={get(th.color, 'color')} onClick={handleClose} name='close' size={IconSize.MEDIUM} className='icon-close' data-testid='alert-icon-close' />
            ) : null}
        </StyledAlert>
    );
};

StyledAlert.displayName = 'StyledAlert';

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
