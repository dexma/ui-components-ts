import React from 'react';

import { Cascader, Grid, Row, Cell, Paragraph } from '@/components/index';

export default {
    title: 'Cascader',
    component: Cascader,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                disable: true,
            },
        },
        onClose: {
            control: {
                disable: true,
            },
        },
    },
};

export const cascaderSingle = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader
                    options={[
                        {
                            label: 'Light',
                            value: 'light',
                            children: new Array(20).fill(null).map((_, index) => ({
                                label: `Number ${index}`,
                                value: index,
                            })),
                        },
                        {
                            label: 'Bamboo',
                            value: 'bamboo',
                            children: [
                                {
                                    label: 'Little',
                                    value: 'little',
                                    children: [
                                        {
                                            label: 'Toy Fish',
                                            value: 'fish',
                                            disabled: true,
                                            disableCheckbox: true,
                                        },
                                        {
                                            label: 'Toy Cards',
                                            value: 'cards',
                                        },
                                        {
                                            label: 'Toy Bird',
                                            value: 'bird',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);

export const cascaderMultiple = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The cascader allows to make a single or multiple selection from a set of associated data set.</Paragraph>
                <Cascader
                    multiple
                    maxTagCount='responsive'
                    options={[
                        {
                            label: 'Light',
                            value: 'light',
                            children: new Array(20).fill(null).map((_, index) => ({
                                label: `Number ${index}`,
                                value: index,
                            })),
                        },
                        {
                            label: 'Bamboo',
                            value: 'bamboo',
                            children: [
                                {
                                    label: 'Little',
                                    value: 'little',
                                    children: [
                                        {
                                            label: 'Toy Fish',
                                            value: 'fish',
                                            disabled: true,
                                            disableCheckbox: true,
                                        },
                                        {
                                            label: 'Toy Cards',
                                            value: 'cards',
                                        },
                                        {
                                            label: 'Toy Bird',
                                            value: 'bird',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);
