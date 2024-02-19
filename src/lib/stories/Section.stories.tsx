import React from 'react';
import { Cell } from '@/components/Cell';
import { Chart } from '@/components/Chart';
import { Grid } from '@/components/Grid';
import { Row } from '@/components/Row';
import Section from '@/components/Section/Section';
import { mockBasicArea } from '../../../tests/mock/Chart';

export default {
    title: 'Section',
    component: null,
    subcomponents: {
        Section,
    },
};

export const sectionDataChart = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Section
                    title='Chart layout title'
                    onExportExcel={() => console.log('click onExportExcel')}
                    onExportImage={() => console.log('click onExportImage')}
                    onAddReport={() => console.log('click onAddReport')}
                >
                    <Chart options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Section title='Chart layout title' onExportExcel={() => console.log('click onExportExcel')} onAddReport={() => console.log('click onAddReport')}>
                    <Chart isLoading options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
    </Grid>
);
