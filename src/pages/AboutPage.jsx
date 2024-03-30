import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const carouselData = [
    {
      id: 1,
      image: "https://via.placeholder.com/600x300",
      title: "Company History",
      description: "Learn about our journey and milestones.",
      paragraph:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/company-history",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x300",
      title: "Meet the Team",
      description: "Discover the talented individuals behind our success.",
      paragraph:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/meet-the-team",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x300",
      title: "Our Values",
      description: "Explore the principles that guide our work.",
      paragraph:
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/our-values",
    },
  ];

  const [selectedParagraph, setSelectedParagraph] = useState(carouselData[0].paragraph);

  const handleCardChange = (nextSlide) => {
    let newIndex = nextSlide % carouselData.length;
    if (newIndex < 0) {
      newIndex = carouselData.length - 1;
    }
    setSelectedParagraph(carouselData[newIndex].paragraph);
  };
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <Carousel
            responsive={{
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
                partialVisibilityGutter: 30, // Adjust the gutter for better visibility
              },
            }}
            ssr={true}
            infinite={true}
            customTransition="transform 500ms ease-in-out"
            customTransitionDuration={500}
            afterChange={(nextSlide) => handleCardChange(nextSlide)}
          >
            {carouselData.map((item) => (
              <div key={item.id} className={`p-4 `}>
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
          <p className="text-lg">{selectedParagraph}</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
