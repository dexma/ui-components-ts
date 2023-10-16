import React from 'react';
import { Dropdown as DropdownAntd } from 'antd';
import { Button } from '@/components/Button';
import { StyledGlobalDropdown } from '@/styles/Dropdown/StyledDropdown';

const defaultProps: DropdownProps = {
    placement: 'bottomRight',
    trigger: 'hover',
};

type DropdownMenuItem = {
    text: string;
    icon?: string;
    onClick?: (element?: any) => void;
};

export type DropdownProps = {
    trigger: 'click' | 'hover';
    text?: string;
    placement: 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'topCenter' | 'bottomCenter';
    content?: DropdownMenuItem[];
    icon?: string;
};

const getContent = (
    content: DropdownMenuItem[]
): {
    type: 'group';
    label: JSX.Element;
}[] => {
    return content.map((props: DropdownMenuItem, i: number) => {
        const { icon, onClick, ...rest } = props;
        return {
            type: 'group',
            label: <Button key={i} className='dropdown-button-item' variant='icon' iconBefore={icon} onClick={onClick} {...rest} />,
        };
    });
};

export const Dropdown = (props: DropdownProps) => {
    const { trigger, text, placement, content, icon } = props;
    const renderContent = content ? getContent(content) : undefined;

    return (
        <>
            <StyledGlobalDropdown {...props} />
            <DropdownAntd menu={{ items: renderContent }} placement={placement} trigger={[trigger]}>
                <Button
                    data-testid={text ? 'dropdown-button-text' : 'dropdown-button-icon'}
                    className='dropdown-button'
                    variant={text ? 'icon' : 'icon-secondary'}
                    iconBefore={icon}
                    text={text}
                    isCircle={!text}
                ></Button>
            </DropdownAntd>
        </>
    );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
