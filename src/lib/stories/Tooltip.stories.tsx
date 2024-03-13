import React from 'react';
import { Grid, Row, Cell, Paragraph, Tooltip, Button } from '@components';

export default {
    title: 'Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export const tooltip = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Tooltip needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Tooltip title='Tooltip' trigger='click'>
                    <Button variant='primary' text='Click me'></Button>
                </Tooltip>
                <Tooltip title='Tooltip'>
                    <Button variant='primary' text='Test' iconBefore='vader'></Button>
                </Tooltip>
                <Tooltip title='Tooltip top' position='top'>
                    <Button text='Test top' iconBefore='vader' variant='secondary'></Button>
                </Tooltip>
                <Tooltip title='Tooltip right' position='right'>
                    <Button variant='primary' iconBefore='help' isCircle></Button>
                </Tooltip>
            </Cell>
        </Row>
    </Grid>
);

export const playground = (args: any) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tooltip.</Paragraph>
            </Cell>
            <Cell>
                <Tooltip {...args}>
                    <span>Test</span>
                </Tooltip>
            </Cell>
        </Row>
    </Grid>
);
