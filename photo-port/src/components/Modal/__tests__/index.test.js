import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = { 
    name: 'Park Bench', 
    category: 'landscape', 
    description: 'Lorem ipsum dolor sit amet, consectur adispicing elit. Nunc ultricide',
    index: 1
};
const mockToggleModal = jest.fn()

afterEach(cleanup)

describe('Modal is rendering', () => {
    
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
        />);
    });

    it('Matches snapshot', () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
        />);

        expect(asFragment()).toMatchSnapshot();

    });

});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        fireEvent.click(getByText('Close this Modal'));
        
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });  
});

