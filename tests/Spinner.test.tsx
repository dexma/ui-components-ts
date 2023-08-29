import React from 'react';

import { Spinner } from '@/components/Spinner/Spinner';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('<Spinner>', () => {
    it('Should render the correct classNamePrefix component', () => {
        render(<Spinner />);
        expect(screen.getAllByTestId('spinner').length).toEqual(1);
    });
});
