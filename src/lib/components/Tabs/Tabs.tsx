import React, { useContext } from 'react';
import { Tabs as TabsAntDesign, TabsProps as TabsPropsAntDesign, TabPaneProps } from 'antd';

import theme from '@utils/theme';
import { StyledTabs } from '@styles/Tabs/StyledTabs';
import { ThemeContext } from 'styled-components';

export enum TabsVariant {
    DEFAULT = 'default',
    SCROLLABLE = 'scrollable',
}
type TabsProps = { variant?: TabsVariant } & TabsPropsAntDesign;

export const Tabs = (props: TabsProps) => {
    const { variant, ...tabsProps } = props;
    const th = useContext(ThemeContext);
    return (
        <StyledTabs $variant={variant || TabsVariant.DEFAULT} theme={th} data-testid='tabs'>
            <TabsAntDesign animated={{ inkBar: false, tabPane: false }} {...tabsProps} />
        </StyledTabs>
    );
};

export const TabPane = (props: TabPaneProps) => {
    return <TabsAntDesign.TabPane {...props} />;
};
