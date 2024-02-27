import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { DataIdProvider, Button, Chart, Input, Table, Checkbox, Section } from '@components';
import withDataId from '@components/DataId/withDataId';

describe('Data Id', () => {
    it('withDataId should not build data-id', () => {
        const Example = (props: { dataId: string }) => {
            return <div data-id={props.dataId}>Example</div>;
        };

        const ExampleWithId = withDataId(Example);

        const { container } = render(<ExampleWithId />);
        const example = container.querySelectorAll("[data-id='example']");
        expect(Array.from(example)).toHaveLength(0);
    });

    it('withDataId should build data-id as default value', () => {
        const Example = (props: { dataId: string }) => {
            return <div data-id={props.dataId}>Example</div>;
        };

        Example.defaultProps = {
            dataId: 'example',
        };

        const ExampleWithId = withDataId(Example);

        const { container } = render(<ExampleWithId />);
        const example = container.querySelectorAll("[data-id='example']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as specific value', () => {
        const Example = (props: { dataId: string }) => {
            return <div data-id={props.dataId}>Example</div>;
        };

        Example.defaultProps = {
            dataId: 'example',
        };

        const ExampleWithId = withDataId(Example);

        const { container } = render(<ExampleWithId dataId='example.test' />);
        const example = container.querySelectorAll("[data-id='example.test']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as context + default value', () => {
        const Example = (props: { dataId: string }) => {
            return <div data-id={props.dataId}>Example</div>;
        };

        Example.defaultProps = {
            dataId: 'example',
        };

        const ExampleWithId = withDataId(Example);

        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <ExampleWithId />
            </DataIdProvider>
        );
        const example = container.querySelectorAll("[data-id='page.section.example']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as context + specific value', () => {
        const Example = (props: { dataId: string }) => {
            return <div data-id={props.dataId}>Example</div>;
        };

        Example.defaultProps = {
            dataId: 'example',
        };

        const ExampleWithId = withDataId(Example);

        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <ExampleWithId dataId='example.test' />
            </DataIdProvider>
        );
        const example = container.querySelectorAll("[data-id='page.section.example.test']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('components should have data-id as default value', () => {
        const { container } = render(
            <Section>
                <>
                    <Button />
                    <Chart />
                    {/* <DatePicker />
          <DatePicker variant="legacy" /> */}
                    <Input />
                    {/* <Select /> */}
                    <Table />
                </>
            </Section>
        );

        const sectionData = container.querySelectorAll("[data-id='section-data']");
        const button = container.querySelectorAll("[data-id='button']");
        const chart = container.querySelectorAll("[data-id='chart']");
        // const datePicker = container.querySelectorAll("[data-id='datepicker']");
        const input = container.querySelectorAll("[data-id='input']");
        // const select = container.querySelectorAll("[data-id='select']");
        const table = container.querySelectorAll("[data-id='table']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        // expect(Array.from(datePicker)).toHaveLength(2);
        expect(Array.from(input)).toHaveLength(1);
        // expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
    });

    it('components should have data-id as specific value', () => {
        const { container } = render(
            <Section dataId='section-data.test'>
                <>
                    <Button dataId='button.test' />
                    <Chart dataId='chart.test' />
                    {/* <DatePicker dataId="datepicker.test" />
          <DatePicker variant="legacy" dataId="datepicker.test" /> */}
                    <Input dataId='input.test' />
                    {/* <Select dataId="select.test" /> */}
                    <Table dataId='table.test' />
                </>
            </Section>
        );

        const sectionData = container.querySelectorAll("[data-id='section-data.test']");
        const button = container.querySelectorAll("[data-id='button.test']");
        const chart = container.querySelectorAll("[data-id='chart.test']");
        // const datePicker = container.querySelectorAll("[data-id='datepicker.test']");
        const input = container.querySelectorAll("[data-id='input.test']");
        // const select = container.querySelectorAll("[data-id='select.test']");
        const table = container.querySelectorAll("[data-id='table.test']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        // expect(Array.from(datePicker)).toHaveLength(2);
        expect(Array.from(input)).toHaveLength(1);
        // expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
    });

    it('components should have data-id as context + default value', () => {
        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <Section>
                    <>
                        <Button />
                        <Chart />
                        {/* <DatePicker />
            <DatePicker variant="legacy" /> */}
                        <Input />
                        {/* <Select /> */}
                        <Table />
                    </>
                </Section>
            </DataIdProvider>
        );

        const sectionData = container.querySelectorAll("[data-id='page.section.section-data']");
        const button = container.querySelectorAll("[data-id='page.section.button']");
        const chart = container.querySelectorAll("[data-id='page.section.chart']");
        // const datePicker = container.querySelectorAll("[data-id='page.section.datepicker']");
        const input = container.querySelectorAll("[data-id='page.section.input']");
        // const select = container.querySelectorAll("[data-id='page.section.select']");
        const table = container.querySelectorAll("[data-id='page.section.table']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        // expect(Array.from(datePicker)).toHaveLength(2);
        expect(Array.from(input)).toHaveLength(1);
        // expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
    });

    it('components should have data-id as context + specific value', () => {
        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <Section dataId='section-data.test'>
                    <>
                        <Button dataId='button.test' />
                        <Chart dataId='chart.test' />
                        {/* <DatePicker dataId="datepicker.test" />
            <DatePicker variant="legacy" dataId="datepicker.test" /> */}
                        <Input dataId='input.test' />
                        {/* <Select dataId="select.test" /> */}
                        <Table dataId='table.test' />
                    </>
                </Section>
            </DataIdProvider>
        );

        const sectionData = container.querySelectorAll("[data-id='page.section.section-data.test']");
        const button = container.querySelectorAll("[data-id='page.section.button.test']");
        const chart = container.querySelectorAll("[data-id='page.section.chart.test']");
        // const datePicker = container.querySelectorAll("[data-id='page.section.datepicker.test']");
        const input = container.querySelectorAll("[data-id='page.section.input.test']");
        // const select = container.querySelectorAll("[data-id='page.section.select.test']");
        const table = container.querySelectorAll("[data-id='page.section.table.test']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        // expect(Array.from(datePicker)).toHaveLength(2);
        expect(Array.from(input)).toHaveLength(1);
        // expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
    });

    it('<Checkbox> should not have data-id', () => {
        const { container } = render(<Checkbox />);
        const checkbox = container.querySelectorAll("[data-id='checkbox']");
        expect(Array.from(checkbox)).toHaveLength(0);
    });
});
