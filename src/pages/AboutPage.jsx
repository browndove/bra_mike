import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutPage = () => {
  const [currentParagraph, setCurrentParagraph] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const carouselData = [
    {
      id: 1,
      image: "https://via.placeholder.com/600x300",
      title: "Company History",
      description: "Learn about our journey and milestones.",
      paragraph: "Lorem11 ipsum dolor sit amet, consectetur adipiscing elit3. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/company-history",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x300",
      title: "Meet the Team",
      description: "Discover the talented individuals behind our success.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/meet-the-team",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x300",
      title: "Our Values",
      description: "Explore the principles that guide our work.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/our-values",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleSlideChange = (index) => {
    if (index >= 0 && index < carouselData.length) {
      setActiveItem(index);
      setCurrentParagraph(carouselData[index].paragraph);
    }
  };

  const handleItemClick = (index, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveItem(index);
    setCurrentParagraph(carouselData[index].paragraph);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <div className="mb-8">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          afterChange={handleSlideChange}
          customTransition="transform 500ms ease-in-out"
          customTransitionDuration={500}
        >
          {carouselData.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 ${activeItem === index ? 'active' : ''}`}
              onClick={(event) => handleItemClick(index, event)}
            >
              <a href={item.link} className="block" onClick={(event) => event.preventDefault()}>
                <img src={item.image} alt={item.title} className="rounded-lg" />
              </a>
              <div className="mt-4">
                <a href={item.link} className="text-lg font-semibold hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="text-center">
        <p className="text-lg">{currentParagraph}</p>
      </div>
    </div>
  );
};

export default AboutPage;
