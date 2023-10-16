/* eslint-disable import/no-cycle */
import React, { MouseEventHandler, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { ThemeContext } from 'styled-components';

import theme from '@/utils/theme';
import { Icon, getIconSize } from '@/components/Icon';
import { Tooltip } from '@/components/Tooltip';
import { Spinner } from '@/components/Spinner/Spinner';

import { StyledButton, StyledButtonGroup } from '@/styles/Button/StyledButton';
import withDataId from '@/components/DataId/withDataId';

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}
export const BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'destructive', 'link', 'icon', 'icon-secondary', 'icon-outline'];

const propTypes = {
    /**
     * Set the text of button
     */
    text: PropTypes.string,
    /**
     * Set the size of button
     */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
    /**
     * Set the style variant of the button
     */
    variant: PropTypes.oneOf(BUTTON_VARIANT).isRequired,
    /**
     * Set the icon before the text or children you have to set with our <a href="https://dexma.github.io/ui-components/?path=/docs/icon--sizes#icons">Icons</a>:
     */
    iconBefore: PropTypes.string,
    /**
     * Set the icon after the text or children you have to set with our <a href="https://dexma.github.io/ui-components/?path=/docs/icon--sizes#icons">Icons</a>:
     */
    iconAfter: PropTypes.string,
    /**
     * Set a color from <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a> or pass a HEX color #333 or #333333
     */
    iconColor: PropTypes.string,
    /**
     * Invoked once the button has been clicked.
     */
    tooltip: PropTypes.string,
    /**
     * Invoked once the button has been clicked.
     */
    onClick: PropTypes.func,
    /**
     * Invoked once the button has been focused.
     */
    onFocus: PropTypes.func,
    /**
     * State to set loader icon and status
     */
    isLoading: PropTypes.bool,
    /**
     * State to set the button disabled
     */
    isDisabled: PropTypes.bool,
    /**
     * Set the button with a circle style
     */
    isCircle: PropTypes.bool,
    /**
     * Set the button with a expanded style 100%
     */
    isExpanded: PropTypes.bool,
    /**
     * Set the time that you want to debounce a click
     */
    debounceTime: PropTypes.number,
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
    size: 'medium',
    variant: 'primary',
    isDisabled: false,
    isLoading: false,
    isExpanded: false,
    theme: theme,
    dataId: 'button',
    'data-testid': 'button',
};

const getButtonIconSize = (size?: string | ButtonSize) => {
    if (size === 'small') return 'small';
    if (size === 'medium') return 'medium';
    if (size === 'large') return 'large';
    if (size === 'xlarge') return 'large';
    return 'small';
};

export const ButtonGroup = (props: any) => {
    return <StyledButtonGroup {...props} />;
};

type ButtonType = {
    className?: string;
    text?: string;
    size?: string | ButtonSize;
    variant: string;
    iconBefore?: string;
    iconAfter?: string;
    iconColor?: string;
    tooltip?: string;
    onClick?: () => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: any;
    dataId?: string;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    'data-testid'?: string;
};

export const Button = (props: ButtonType) => {
    const { className, text, iconBefore, iconAfter, iconColor, tooltip, onClick, isDisabled, isExpanded, isLoading, size, debounceTime, children, dataId, variant } = props;
    const th = useContext(ThemeContext) || theme;
    const classes = classNames(isExpanded && 'expanded', className);
    const handleClick = debounceTime && debounceTime > 0 && onClick ? debounce(onClick, debounceTime) : onClick;
    const spinnerSize = getIconSize(size);
    const iconSize = getButtonIconSize(size);
    const getStyledButton = () => (
        <StyledButton
            className={classes}
            $isCircle={props.isCircle || false}
            $isExpanded={isExpanded || false}
            $isLoading={isLoading || false}
            disabled={isDisabled || false}
            $size={size || 'medium'}
            $iconColor={iconColor}
            $iconAfter={iconAfter}
            $variant={variant}
            $text={text}
            theme={th}
            onClick={handleClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            data-testid={props['data-testid']}
        >
            {isLoading ? <Spinner size={spinnerSize} data-testid='button-loading' /> : null}
            {!isLoading && iconBefore ? <Icon name={iconBefore} size={iconSize} color={iconColor} data-testid='button-icon-before' /> : null}
            {text || null}
            {children || null}
            {!isLoading && iconAfter ? <Icon name={iconAfter} size={iconSize} color={iconColor} data-testid='button-icon-after' /> : null}
        </StyledButton>
    );
    return tooltip ? <Tooltip title={tooltip}>{getStyledButton()}</Tooltip> : getStyledButton();
};

StyledButton.displayName = 'StyledButton';

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withDataId(Button);
