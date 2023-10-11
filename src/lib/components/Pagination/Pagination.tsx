import React, { useContext } from 'react';
import { Pagination as PaginationAntDesign, PaginationProps as PaginationAntProps } from 'antd';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/components/Icon';
import { StyledPagination } from '@/styles/Pagination/StyledPagination';
import theme from '@/utils/theme';

export const itemRender = (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode) => {
    if (type === 'prev') {
        return <Icon name='chevron_left_l' color='gray900' size={12} />;
    }
    if (type === 'next') {
        return <Icon name='chevron_right_l' color='gray900' size={12} />;
    }
    return element;
};

export const Pagination = (props: PaginationAntProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledPagination data-testid='pagination' theme={th}>
            <PaginationAntDesign itemRender={itemRender} {...props} />
        </StyledPagination>
    );
};

export default Pagination;
