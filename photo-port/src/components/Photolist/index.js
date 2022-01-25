import React from 'react';

import photo from '../../assets/small/commercial/0.jpg';

function Photolist() {
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
            
        }
    ])
    return (
        <div>
            <img
                src={photo}
                alt="Commercial Example"
            />
        </div>
    )
}

export default Photolist;

