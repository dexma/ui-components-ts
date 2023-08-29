import React from 'react';

import { Loading } from '@/components/Loading';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('<Loading>', () => {
    it('Should render the classNamePrefix component', () => {
        render(<Loading isLoading />);
        expect(screen.getAllByTestId('loading').length).toEqual(1);
    });
    it('Should render the Spinner component', () => {
        render(<Loading isLoading />);
        expect(screen.getByTestId('loading').getAttribute('type')).toEqual('spinner');
        expect(screen.getAllByTestId('spinner').length).toEqual(1);
    });
    it('Should not render the Spinner and show children', () => {
        const loadDiv = <div datatest-id='children'>someText</div>;
        render(<Loading isLoading={false}>{loadDiv}</Loading>);
        expect(screen.findByTestId('children')).toBeTruthy();
    });
});
