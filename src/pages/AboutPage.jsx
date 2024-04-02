import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const carouselData = [
    {
      id: 1,
      image: "https://via.placeholder.com/600x300",
      title: "Vision and mission",
      description: "Learn about our journey and milestones.",
      paragraph:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/company-history",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x300",
      title: "Company's History",
      description: "Discover the talented individuals behind our success.",
      paragraph:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/meet-the-team",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x300",
      title: "Meet the team",
      description: "Explore the principles that guide our work.",
      paragraph:
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      link: "/our-values",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-4">
        <div className="">
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1,
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
          >
            {carouselData.map((item) => (
              <div key={item.id} className="p-4 mx-auto flex flex-col lg:flex-row items-center">
                <div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg lg:h-[60vh]"
                    />
                    <div className="mt-4 text-center">
                      <a
                        href={item.link}
                        className="text-lg font-semibold hover:underline"
                      >
                        {item.title}
                      </a>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-left  sm:ml-4  flex-wrap">
                  <p className="text-lg mx-12 ">{item.paragraph}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
