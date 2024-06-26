import React from 'react';
import { Dropdown as DropdownAntd, type DropDownProps, type MenuProps } from 'antd';

import { StyledDropdownInnerButton, StyledDropdownButton, StyledGlobalDropdown } from '@styles/Dropdown/StyledDropdown';

type DropdownContent = {
    text: string;
    icon?: string;
    dataId?: string;
    variant?: string;
    onClick?: (e: any) => void;
};

const getContent = (menu?: DropdownContent[]) => {
    if (!menu) return null;
    const items = menu
        ? menu.map((item) => ({
              label: (
                  <StyledDropdownInnerButton
                      className='dropdown-button-item'
                      style={{ width: '100%', padding: '0px 1rem' }}
                      iconBefore={item.icon}
                      onClick={item.onClick}
                      {...item}
                      dataId={item.dataId ?? 'ddItem'}
                      variant={item.variant ?? 'icon'}
                      text={item.text}
                  />
              ),
          }))
        : undefined;
    return {
        items,
    };
};

export type DropdownProps = DropDownProps & {
    dataId?: string;
    text?: string;
    icon?: string;
    variant?: string;
    content?: DropdownContent[];
};

export const Dropdown = ({ dataId = 'dropdown-button', trigger = ['hover'], text, placement = 'bottomRight', menu, icon, content, variant }: DropdownProps) => {
    const menuItems = menu || (getContent(content) as MenuProps);
    return (
        <>
            <StyledGlobalDropdown />
            <DropdownAntd menu={menuItems} placement={placement} trigger={trigger}>
                {text ? (
                    <StyledDropdownButton
                        data-testid='dropdown-button-text'
                        dataId={dataId}
                        className='dropdown-button'
                        variant={variant ?? 'icon'}
                        iconBefore={icon}
                        text={text}
                    />
                ) : (
                    <StyledDropdownButton
                        data-testid='dropdown-button-icon'
                        dataId={dataId}
                        className='dropdown-button'
                        variant={variant ?? 'icon-secondary'}
                        iconBefore={icon}
                        text=''
                        isCircle
                    />
                )}
            </DropdownAntd>
        </>
    );
};

export default Dropdown;
