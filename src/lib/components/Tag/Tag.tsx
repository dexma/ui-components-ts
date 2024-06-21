import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Icon } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledTag } from '@styles/Tag/StyledTag';

export type TagProps = {
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClick?: () => void;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
    children?: React.ReactNode;
};

export const Tag = withDataId(({ icon, color, closable, children, type = 'normal', onClose, onClick, variant = 'primary', dataId, ...props }: TagProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledTag
            data-testid='tag'
            data-id={dataId}
            $variant={variant || 'primary'}
            $type={type || 'normal'}
            $icon={icon}
            $color={color ?? th.primary}
            $closable={closable}
            onClick={onClick}
            theme={th}
            {...props}
        >
            {icon && <Icon className='icon' name={icon} size='small' />}
            {children && children}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} />}
        </StyledTag>
    );
}, 'tag');
