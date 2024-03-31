// CarouselCard.js

import React from "react";

const CarouselCard = ({ item, onClick }) => {
  return (
    <div className={`p-4 `}>
      <a href={item.link} className="block" onClick={(event) => {event.preventDefault(); onClick();}}>
        <img src={item.image} alt={item.title} className="rounded-lg" />
      </a>
      <div className="mt-4">
        <a href={item.link} className="text-lg font-semibold hover:underline">
          {item.title}
        </a>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
