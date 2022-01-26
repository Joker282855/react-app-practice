import React, { useState } from 'react';

const Photolist = ({ category }) => {
    
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

    const currentphotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentphotos.map((image, i) => (
                    <img 
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Photolist;

