import React, { onClick, useState, useEffect } from "react";
import _, { set } from "lodash";

const MemoryGame = ({ images }) => {
  const dupedImages = [...images, ...images];
  const [imgClicked, setImgClicked] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(_.shuffle(dupedImages));
  }, []);


  function matchingCards(src, key) {
    if (src === imgClicked[0] && key != imgClicked[1]) {
      console.log("MATCH!");
    }
    setImgClicked([src, key]);
  }

  return (
    <div className="grid">
      {shuffledImages.map((image, index) => (
        <div className="card">
          <img
            onClick={() => matchingCards(image, index)}
            key={index}
            className="image"
            src={image}
            // alt={`image index ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
