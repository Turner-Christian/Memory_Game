import React, { onClick, useState, useEffect } from "react";
import _, { set } from "lodash";

const MemoryGame = ({ images }) => {
  const dupedImages = [...images, ...images];
  const [imgClicked, setImgClicked] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);

  const coveredCard = "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const [groupedImgs, setGroupedImgs] = useState([])



  useEffect(() => {
    setShuffledImages(_.shuffle(dupedImages));
    for(i = 0; i < (len(shuffledImages) / 2); i++){
      if(groupedImgs.includes(shuffledImages[i])){
        
      } 
      else{
        groupedImgs.push([shuffledImages[i]])
      }
    }
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
            onClick={() => (matchingCards(image, index))}
            key={index}
            className={"image"}
            src={image}
            alt={`image index ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
