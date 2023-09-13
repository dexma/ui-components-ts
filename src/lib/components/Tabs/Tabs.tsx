import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsAntDesign, TabsProps as TabsPropsAntDesign } from 'antd';

import theme from '@/utils/theme';
import { StyledTabs } from '@/styles/Tabs/StyledTabs';
import { ThemeContext } from 'styled-components';

type TabsProps = TabsPropsAntDesign & {
    variant?: 'default' | 'scrollable';
};

export const Tabs = (props: TabsProps) => {
    const { variant, ...tabsProps } = props;
    const th = useContext(ThemeContext);
    return (
        <StyledTabs $variant={variant || 'default'} theme={th} data-testid='tabs'>
            <TabsAntDesign animated={{ inkBar: false, tabPane: false }} {...tabsProps} />
        </StyledTabs>
    );
};

export const TabPane = (props: any) => {
    return <TabsAntDesign.TabPane {...props} />;
};
