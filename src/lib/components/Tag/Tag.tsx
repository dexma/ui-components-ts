import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Icon } from '@components';
import { StyledTag } from '@styles/Tag/StyledTag';

const defaultProps = {
    closable: false,
    type: 'normal',
    variant: 'primary',
};

export type TagProps = {
    color?: string;
    icon?: string;
    closable?: boolean;
    onClick?: () => void;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
    children?: React.ReactNode;
};

export const Tag: FC<TagProps> = (props: TagProps) => {
    const { icon, color, closable, children, type, onClose, onClick, variant } = props;
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledTag
            data-testid='tag'
            $variant={variant || 'primary'}
            $type={type || 'normal'}
            $icon={icon}
            $color={color ?? th.primary}
            $closable={closable}
            onClick={onClick}
            theme={th}
        >
            {icon && <Icon className='icon' name={icon} size='small' />}
            {children && children}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} />}
        </StyledTag>
    );
};

(Tag as any).defaultProps = defaultProps;
