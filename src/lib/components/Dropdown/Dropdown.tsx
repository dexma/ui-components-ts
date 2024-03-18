import React from 'react';
import { Dropdown as DropdownAntd, DropDownProps, MenuProps } from 'antd';
import { Button } from '@components';
import { StyledGlobalDropdown } from '@styles/Dropdown/StyledDropdown';

const getContent = (
    menu?: {
        text: string;
        icon: string;
        onClick?: (e: any) => void;
    }[]
) => {
    if (!menu) return null;
    const items = menu
        ? menu.map((item) => {
              return {
                  label: (
                      <Button
                          className='dropdown-button-item'
                          style={{ width: '100%', padding: '0px 1rem' }}
                          variant='icon'
                          iconBefore={item.icon}
                          onClick={item.onClick}
                          text={item.text}
                      />
                  ),
                  onClick: item.onClick,
              };
          })
        : undefined;
    return {
        items,
        onClick: () => {},
    };
};

export type DropdownProps = DropDownProps & {
    text?: string;
    icon?: string;
    content?: {
        text: string;
        icon: string;
        onClick?: (e: any) => void;
    }[];
};

export const Dropdown = (props: DropdownProps) => {
    const { trigger, text, placement, menu, icon, content } = props;
    const menuItems = menu ? menu : (getContent(content) as unknown as MenuProps);
    return (
        <>
            <StyledGlobalDropdown />
            <DropdownAntd menu={menuItems} placement={placement} trigger={trigger}>
                <Button
                    data-testid={text ? 'dropdown-button-text' : 'dropdown-button-icon'}
                    className='dropdown-button'
                    variant={text ? 'icon' : 'icon-secondary'}
                    iconBefore={icon}
                    text={text}
                    isCircle={!text}
                />
            </DropdownAntd>
        </>
    );
};

const defaultProps = {
    placement: 'bottomRight',
    trigger: ['hover'],
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
