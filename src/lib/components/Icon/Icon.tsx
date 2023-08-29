/* eslint-disable import/no-cycle */
import React, { forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import get from 'lodash/get';
import isNumber from 'lodash/isNumber';
import omit from 'lodash/omit';

import { icons } from '@/config/index';
import theme from '@/utils/theme';
import { StyledIcon } from '@/styles/Icon/StyledIcon';

export enum IconSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}

export const getIconSize = (size?: number | string | IconSize) => {
    if (isNumber(size)) return size;
    if (size === IconSize.SMALL) return 16;
    if (size === IconSize.MEDIUM) return 20;
    if (size === IconSize.LARGE) return 24;
    if (size === IconSize.XLARGE) return 32;
    return 24;
};

const getIconPaths = (name?: string) => {
    let config: any = [];
    (icons as unknown as any[]).forEach((item: { name: string; icon: string }) => {
        if (item.name === name) {
            config = item.icon;
        }
    });
    return config.map((itemConfig: any, i: number) => {
        const { tag, transform } = itemConfig;
        switch (tag) {
            case 'path':
                const { d, opacity, clipRule, fillRule } = itemConfig;
                return <path key={i} d={d} opacity={opacity} clipRule={clipRule} fillRule={fillRule} transform={transform} />;
            case 'circle':
                const { cx, cy, r } = itemConfig;
                return <circle key={i} cx={cx} cy={cy} r={r} transform={transform} />;
            default:
                return null;
        }
    });
};

const isHexColor = (hex?: string) => (hex ? /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex) : false);

type IconProps = {
    name?: string;
    color?: string | keyof typeof theme.color;
    size?: number | string | IconSize;
    className?: string;
    onClick?: (e: any) => void;
};

const getColor = (color?: string | keyof typeof theme.color) => {
    if (!color) return theme.color.gray500;
    if (isHexColor(color)) return color;
    return theme.color[color as keyof typeof theme.color];
};

export const Icon = forwardRef((props: IconProps, ref) => {
    const th = useContext(ThemeContext) || theme;
    const { name, color, size, className, onClick } = props;
    const fillColor = getColor(color);
    const pathElements = getIconPaths(name);
    const iconSize = getIconSize(size);
    const iconProps = omit(props, ['name', 'className', 'color', 'size', 'onClick']);
    // ref={ref} is necessary to forward the ref to the styled component, which type?
    return (
        <StyledIcon
            className={className}
            width={iconSize}
            height={iconSize}
            viewBox='0 0 24 24'
            strokeWidth='0'
            fill='currentColor'
            preserveAspectRatio='xMidYMid meet'
            xmlns='http://www.w3.org/2000/svg'
            $fillColor={fillColor}
            data-testid='icon'
            onClick={onClick}
            {...iconProps}
        >
            {pathElements}
        </StyledIcon>
    );
});

const defaultProps = {
    name: 'vader',
    color: 'gray500',
    size: IconSize.LARGE,
    theme: theme,
};

Icon.defaultProps = defaultProps;

export default Icon;
