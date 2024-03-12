import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';
import { Table as TableAntDesign, ConfigProvider, TableProps as AntDTableProps } from 'antd';

import theme from '@utils/theme';
import { Button, itemRender } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledResult } from '@styles/Result/StyledResult';
import { StyledTable } from '@styles/Table/StyledTable';

const defaultProps = {
    isExpanded: false,
    dataId: 'table',
};

const StyledTableLoading = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
`;

const TableLoading = () => (
    <StyledTableLoading data-testid='table-loading'>
        <svg width='210' height='210' aria-labelledby='loading-aria' preserveAspectRatio='none' viewBox='0 0 210 210'>
            <rect width='100%' height='100%' fill='url("#fill")' clipPath='url(#clip-path-table)'></rect>
            <defs>
                <clipPath id='clip-path-table'>
                    <rect width='9' height='158' x='10' y='26' rx='0' ry='0'></rect>
                    <rect width='1' height='88' x='107' y='73' rx='0' ry='0'></rect>
                    <rect width='190' height='9' x='10' y='26' rx='0' ry='0'></rect>
                    <rect width='184' height='9' x='10' y='175' rx='0' ry='0'></rect>
                    <rect width='9' height='158' x='191' y='26' rx='0' ry='0'></rect>
                    <rect width='4' height='158' x='59' y='26' rx='0' ry='0'></rect>
                    <rect width='4' height='158' x='103' y='26' rx='0' ry='0'></rect>
                    <rect width='4' height='158' x='147' y='26' rx='0' ry='0'></rect>
                    <rect width='184' height='4' x='10' y='68' rx='0' ry='0'></rect>
                </clipPath>
                <linearGradient id='fill'>
                    <stop offset='0.6' stopColor='#f3f3f3'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'></animate>
                    </stop>
                    <stop offset='1.6' stopColor='#ecebeb'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'></animate>
                    </stop>
                    <stop offset='2.6' stopColor='#f3f3f3'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    </StyledTableLoading>
);

const StyledTableError = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
    ${StyledResult} {
        margin: 0;
    }
`;

type TableErrorProps = {
    children: React.ReactNode;
};
const TableError = (props: TableErrorProps) => <StyledTableError data-testid='table-error' {...props} />;

const StyledButtonExpanded = styled.label`
    .expand-button {
        width: 16px;
        height: 16px;
        border-color: transparent;
        &:hover &:focus {
            background-color: rgba(64, 65, 69, 0.05) !important;
        }
    }

    .button-expanded {
        transform: rotate(-90deg);
        border-color: transparent;
    }
`;

type ExpandedIconProps<T> = {
    expanded: boolean;
    onExpand: (record: T, event: React.MouseEvent<HTMLElement>) => void;
    record: T;
};
const getExpandedIcon = <T extends object>(props: ExpandedIconProps<T>) => {
    const { expanded, onExpand, record } = props;
    return (
        <StyledButtonExpanded>
            <Button
                className={`expand-button ${expanded ? 'button-no-expanded' : 'button-expanded'}`}
                iconAfter='chevron_down'
                isCircle
                variant='icon-secondary'
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    onExpand(record, e);
                }}
            />
        </StyledButtonExpanded>
    );
};

type TableProps = {
    isLoading?: boolean;
    isExpanded?: boolean;
    showError?: boolean;
    dataId?: string;
    errorContent?: React.ReactNode;
};

export const Table = withDataId(<T extends object>(props: AntDTableProps<T> & TableProps) => {
    const { isExpanded, expandable, columns, dataSource, isLoading, showError, errorContent, dataId } = props;
    const tableProps = omit(props, ['theme', 'columns', 'dataId']);
    const th = useContext(ThemeContext) || theme;
    const getColumnsExpanded = () => {
        const newFirstColumn = columns && {
            className: 'expanded-first-column',
            ...columns[0],
        };
        return Object.assign([], columns, { 0: newFirstColumn });
    };

    const loading = isLoading && !showError;
    const error = !isLoading && showError && errorContent;
    const showTable = !loading && !error && columns && dataSource;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <StyledTable data-testid='table' theme={th} data-id={dataId}>
                {loading && <TableLoading />}
                {error && <TableError> {errorContent} </TableError>}
                {showTable && (
                    <TableAntDesign
                        expandable={{
                            expandIcon: expandable?.expandedRowRender && getExpandedIcon,
                        }}
                        pagination={{ itemRender: itemRender }}
                        columns={isExpanded ? getColumnsExpanded() : columns}
                        {...tableProps}
                    />
                )}
            </StyledTable>
        </ConfigProvider>
    );
});

StyledTable.displayName = 'StyledTable';

Table.defaultProps = defaultProps;
