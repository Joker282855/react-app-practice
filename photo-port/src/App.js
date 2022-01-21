import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercials projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouse, waterfalls, and the beauty of nature' },
  ]);

  return (
   <div>
     <Nav></Nav>
     <main>
       <Gallery></Gallery>
       <About></About>
     </main>
   </div>
  );
}

export default App;
