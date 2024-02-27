import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Grid } from '@components';

describe('<Grid>', () => {
    it('Should render the correct classNamePrefix component', () => {
        const grid = render(
            <Grid>
                <></>
            </Grid>
        );
        expect(screen.getAllByTestId('grid').length).toEqual(1);
    });
});
