import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import theme from '@/utils/theme';
import { StyledTag } from '@/styles/Tag/StyledTag';
import { Icon } from '@/components/Icon';

const propTypes = {
    /**
     * Set the color name for the tag, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     * or alternatively, a straightforward hex color definition.
     */
    color: PropTypes.string,
    /**
     Icon name that need to be able on the assets/icons
     */
    icon: PropTypes.string,
    /**
     * Set the tag as closable you can pass onClose
     */
    closable: PropTypes.bool,
    /**
     Close event you have to set closable true
     */
    onClose: PropTypes.func,
    /**
     Type of a tag
     */
    type: PropTypes.oneOf(['normal', 'rounded']),
    /**
     Variant style
     */
    variant: PropTypes.oneOf(['primary', 'outline']),
};

const defaultProps = {
    closable: false,
    type: 'normal',
    variant: 'primary',
    theme: theme,
};

type TagProps = {
    color: string;
    icon?: string;
    closable?: boolean;
    onClick?: () => void;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
    children?: React.ReactNode;
};

export const Tag = (props: TagProps) => {
    const { icon, color, closable, children, type, onClose, onClick, variant } = props;
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledTag data-testid='tag' $variant={variant || 'primary'} $type={type || 'normal'} $icon={icon} $color={color} $closable={closable} onClick={onClick} theme={th}>
            {icon && <Icon className='icon' name={icon} size='small' />}
            {children && children}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} />}
        </StyledTag>
    );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
