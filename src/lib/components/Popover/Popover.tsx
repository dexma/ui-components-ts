import React from 'react';
import PropTypes from 'prop-types';
import { Popover as AntDPopover, PopoverProps as AntDPopoverProps } from 'antd';
import withDataId from '@/components/DataId/withDataId';

const propTypes = {
    /**
     * If it shows or not the arrow that points to the trigger element
     */
    arrow: PropTypes.bool,
    /**
     * Wrapped content that will trigger the popover
     */
    children: PropTypes.node,
    /**
     * Content of the popover
     */
    content: PropTypes.node,
    /**
     * Title of the popover
     */
    title: PropTypes.string,
    /**
     * Trigger of the popover
     * Can be an array of triggers
     */
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const Popover = (props: AntDPopoverProps) => {
    const { arrow, children, content, title, trigger, ...rest } = props;

    return (
        <AntDPopover data-testid='popover' title={title} content={content} trigger={trigger} arrow={arrow} {...rest}>
            {children}
        </AntDPopover>
    );
};

Popover.propTypes = propTypes;
Popover.defaultProps = {
    arrow: false,
};

export default withDataId(Popover);
