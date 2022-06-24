import React from "react";
import Card from "./Card";

import image1 from "../assets/1.jpg";
import image2 from '../assets/2.jpg'
//import image3 from '../assets/3.jpg'

const cards = [
  {
    id: 1,
    nameC: "Luis Atuncar",
    image: image1,
  },
  {
    id: 2,
    nameC: "Christoper Atuncar",
    image: image2,
  },
  {
    id: 3,
    nameC: "Mauricio Atuncar",
    image: image1,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ nameC, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} nameC={nameC} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
