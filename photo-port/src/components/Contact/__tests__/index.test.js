import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup); 

describe('Contact form is rendering', () => {
    
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact-info')).toHaveTextContent('Contact Me') 
    });

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
});

