import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [photos] = useState([
        {
            name: 'Grocery Isle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consecetur adipising elit. Nunc ultricie',            
        },
        {
            name: 'Gorcery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consecteur adispicing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            descirpiton: 'Lorem ipsum dolor sit amet, consecteur adispiting elit. Nunc ultircie',
        },
        {
            name: 'Restuarant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectuer adispicing elit.  Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectuer adispicing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            description: 'Lorem ipsum dolor sit amet, consectuer adispicing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            descpription: 'Lorem ipsum dolor sit amet, consectuer adispicing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            descipriton: 'Lorem ipsum sit amet, consectuer adispcing elit. Nunc ultricie'
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum sit amet, consectuer adispicing elit. Nunc ultricie'
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum sit amet, consectuer adispicing elit. Nunc ultricie'
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Loreum ipsum dolor sit amet, consectuer adispicing elit. Nunc ultricie'
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consecuetuer adispicing elit. Nunc ultircie'
        },
        {
            name: 'Docks',
            category: 'landscape',
            descipriton: 'Lorem ipsum dolor sit amet, consectuetuer adispicing elit. Nunc ultricie'
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, conesctuetuer adispicing elit. Nunc ultricie'
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet,  consectuetuer adispicing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectuetuer adispicing elit. Nunc ultiricie',
        },
    ]);

    
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }

    const [currentPhoto, setCurrentPhoto] = useState();

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img 
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;

