import React from 'react';
import { Tooltip as TooltipReact, TooltipProps } from 'antd';

type TooltipPropsExtended = TooltipProps & {
    position?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftBottom' | 'leftTop' | 'right' | 'rightBottom' | 'rightTop';
};

export const Tooltip = (props: TooltipPropsExtended) => {
    const { position, placement } = props;

    return <TooltipReact placement={position || placement}>{props.children}</TooltipReact>;
};

export default Tooltip;
