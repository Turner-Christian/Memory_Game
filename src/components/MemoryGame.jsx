import React from "react";
import _ from 'lodash'

const MemoryGame = ({ images }) => {
  const dupedImages = [...images, ...images];
  let shuffledImages = _.shuffle(dupedImages)

  console.log(dupedImages);
  return (
    <div className="body">
      {shuffledImages.map((image, index) => (
          <img key={index} src={image} alt={`image index ${index}`}/>
      ))}
    </div>
  );
};

export default MemoryGame;
