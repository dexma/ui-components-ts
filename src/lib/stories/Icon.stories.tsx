import React, { Component, useState } from 'react';
import styled from 'styled-components';
import icon from '@config/Icon';
import { Icon as IconComponent } from '../components/Icon';
import { Grid } from '../components/Grid';
import { Row } from '../components/Row';
import { Cell } from '../components/Cell';
import { Paragraph } from '../components/Paragraph';
// import { Input } from '../components/Input';

const StyledBoxSearch = styled.div`
    width: 100%;
    .search {
        padding: 13px 25px;
        border: 1px solid #d6d8db;
        border-radius: 4px;
        width: 100%;
        display: block;
        margin: 25px auto 50px auto;
    }
    .box-icon {
        text-align: center;
    }
`;

export default {
    title: 'Icon',
    component: IconComponent,
    argTypes: {
        theme: {
            control: {
                disable: true,
            },
        },
        size: {
            control: {
                type: 'number',
            },
        },
    },
};

export const sizes = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else you can set the size and color</Paragraph>
            </Cell>
            <Cell>
                <IconComponent size={70} />
            </Cell>
            <Cell>
                <IconComponent size={60} />
            </Cell>
            <Cell>
                <IconComponent size={50} />
            </Cell>
            <Cell>
                <IconComponent size={40} />
            </Cell>
            <Cell>
                <IconComponent size={30} />
            </Cell>
            <Cell>
                <IconComponent size={20} />
            </Cell>
        </Row>
    </Grid>
);

export const icons = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>
);

export const playground = (args: any) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <IconComponent {...args} />
        </Row>
    </Grid>
);

const SearchIcons = () => {
    const [value, setValue] = useState('');
    const handleChange = (e: any) => setValue(e.target.value);

    const getIcons = (searchValue: any) => {
        const iconsFilter = icon.filter((i: any) => i.name.includes(searchValue));
        return iconsFilter.map((iconItem: any, i: any) => (
            <Cell key={i} xs={2} className='box-icon'>
                <IconComponent name={iconItem.name} size={40} />
                <Paragraph margin='.6rem'>{iconItem.name}</Paragraph>
            </Cell>
        ));
    };

    return (
        <StyledBoxSearch>
            <Row>
                <Cell xs={12} className='search'>
                    <input type='text' placeholder='Search icon' onChange={handleChange} />
                </Cell>
                {getIcons(value)}
            </Row>
        </StyledBoxSearch>
    );
};
