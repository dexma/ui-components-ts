import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Table from '@/components/Table/Table';
import { Result } from '@/components/Result';

type User = {
    key: string;
    name: string;
    age: number;
    address: string;
};
const dataSource: User[] = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: User, b: User) => a.name.length - b.name.length,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

describe('<Table>', () => {
    it('Should render table component', () => {
        render(<Table dataSource={dataSource} columns={columns} />);
        expect(screen.getByTestId('table')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(<Table dataSource={dataSource} columns={columns} isLoading />);
        expect(screen.getByTestId('table-loading')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(<Table dataSource={dataSource} columns={columns} showError errorContent={<Result variant='error' title='Error table' info='Test info table error' />} />);
        expect(screen.getByTestId('table-error')).toBeTruthy();
        expect(screen.getByText('Error table')).toBeTruthy();
        expect(screen.getByText('Test info table error')).toBeTruthy();
    });
});
