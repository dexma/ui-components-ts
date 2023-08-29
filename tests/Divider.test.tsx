import React from 'react';
import { render } from '@testing-library/react';

import { Divider } from '@/components/Divider';
import { describe, expect, it } from 'vitest';

describe('<Divider>', () => {
    it('Should render the divider correct', () => {
        const { getByTestId } = render(<Divider />);
        expect(getByTestId('divider')).toBeTruthy();
    });
});
