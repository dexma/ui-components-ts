import React from 'react';

import { describe, expect, it, vi } from 'vitest';
import { mockRadioGroup, mockRadioCustomGroup, mockCheckboxGroup, mockSelectedRadioItem, mockSelectedCheckboxItem } from './mock/FieldGroup';
import { FieldGroup } from '@/components/FieldGroup';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<FieldGroup>', () => {
    it('Should render correct input and label elements', () => {
        render(
            <FieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
                type='radio'
            />
        );
        expect(screen.getAllByRole('radio').length).toEqual(mockRadioGroup.length);
        expect(screen.getByText('15min')).toBeInTheDocument();
        expect(screen.getByText('30min')).toBeInTheDocument();
        expect(screen.getByText('h')).toBeInTheDocument();
        expect(screen.getByText('d')).toBeInTheDocument();
        expect(screen.getByText('s')).toBeInTheDocument();
        expect(screen.getByText('m')).toBeInTheDocument();
    });

    it('Should render correct input type radio', () => {
        render(
            <FieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
                type='radio'
            />
        );
        expect(screen.getAllByRole('radio').length).toEqual(mockRadioGroup.length);
    });
    it('Should render correct input type checkbox', () => {
        render(
            <FieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockCheckboxGroup}
                selectedValues={mockSelectedCheckboxItem}
                type='checkbox'
            />
        );
        expect(screen.getAllByRole('checkbox').length).toEqual(mockCheckboxGroup.length);
    });

    it('Should render correct input radio active', () => {
        const { container } = render(
            <FieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
                type='radio'
            />
        );
        expect(container.querySelectorAll(".active input[type='radio']").length).toEqual(1);
    });

    it('Should render correct input checkbox active', () => {
        const { container } = render(
            <FieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockCheckboxGroup}
                selectedValues={mockSelectedCheckboxItem}
                type='checkbox'
            />
        );
        expect(container.querySelectorAll(".active input[type='checkbox']").length).toEqual(mockSelectedCheckboxItem.length);
    });

    it('Should run changeFunction when change input', () => {
        const mockCallBack = vi.fn();
        render(<FieldGroup values={mockRadioGroup} selectedValues={mockSelectedCheckboxItem} type='checkbox' onChange={(value) => mockCallBack(value)} />);

        fireEvent.click(screen.getByText('m'));
        expect(mockCallBack).toHaveBeenCalled();
    });

    it('Should run onChangeFunction for second FieldGroup when it changes', () => {
        const mockCallBackFirst = vi.fn();
        const mockCallBackSecond = vi.fn();
        const { container } = render(
            <>
                <FieldGroup values={mockCheckboxGroup} selectedValues={mockSelectedCheckboxItem} type='checkbox' onChange={(value) => mockCallBackFirst(value)} />
                <FieldGroup values={mockCheckboxGroup} selectedValues={mockSelectedCheckboxItem} type='checkbox' onChange={(value) => mockCallBackSecond(value)} />
            </>
        );
        expect(container.querySelectorAll('.item-hdd input').length).toBe(2);
        fireEvent.click(container.querySelectorAll('.item-hdd input')![1]);
        expect(mockCallBackFirst).not.toBeCalled();
        expect(mockCallBackSecond).toBeCalled();
    });
});
