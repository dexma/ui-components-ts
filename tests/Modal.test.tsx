import React from 'react';

import { describe, expect, it } from 'vitest';
import { Modal } from '@/components/Modal';
import { render, screen } from '@testing-library/react';

describe('<Modal>', () => {
    it('Should render', () => {
        const { getByTestId } = render(<Modal visible />);
        expect(getByTestId('modal')).toBeInTheDocument();
    });
});
