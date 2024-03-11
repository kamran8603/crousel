import React, { useState, useEffect } from 'react';

const images = [
 
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

function Crouser() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      }); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <img style={{width:"100px", height:"100px"}} src={images[currentIndex]} alt="Carousel Image" className="carousel-image" />
    </div>
  );
}

export default Crouser;


