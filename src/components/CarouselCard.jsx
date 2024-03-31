// WobblingLine.js

import React from 'react';

const CarouselCard = () => {
  return (
    <div className="h-1 bg-blue-200 absolute top-1/2 left-0">
      <div className="h-full w-1 bg-blue-600 rounded-full transform origin-left animate-wobble" />
    </div>
  );
};

export default CarouselCard;
