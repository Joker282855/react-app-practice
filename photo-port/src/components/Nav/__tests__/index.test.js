import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test for Nav Component
    it('renders', () => {
        render(<Nav />);
    });
    // test two for the snapshot of Nav Component
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange the emoji
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // Assert the emoji into the h2 element
    });
});

describe('links are visible', () => {
    it('inserts texts into links', () => {
        // Arrange
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me')
        // Assert
    });
});
