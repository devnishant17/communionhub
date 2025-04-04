"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface Review {
  id: number;
  header: string;
  name: string;
  title: string;
  image: string;
  text: string;
  link?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    header: `"Corcus completely reimagined"`,
    name: "Anamika Anand",
    title: "Paidavaar(CEO & founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvfGVufDB8fDB8fHww",
    text: "Corcus completely reimagined our brand with a fresh and strong identity that truly connects with our audience. The creative touch they brought, especially with the ‘Gayani Thai’ character, helped us build a deeper bond with the farming community. The results speak for themselves – we’ve seen a huge boost in engagement, reach, and trust. It’s been a transformative experience!",
  },
  {
    id: 2,
    header: `"seamless marketing strategies"`,
    name: "Nand Kumar Patil",
    title: "Fresh o Need (CEO)",
    image:
      "https://plus.unsplash.com/premium_photo-1663047610372-8ce07a023009?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VvfGVufDB8fDB8fHww",
    text: "Corcus took our digital presence to new heights with their seamless marketing strategies. They optimized our website, created amazing content, and ran ads that really resonated with our audience. Sales and engagement skyrocketed, and thanks to their expertise, we’ve been able to expand globally. They’ve truly been an essential part of our journey.",
  },
  {
    id: 3,
    header: `"game changer for our franchise"`,
    name: "Abinash",
    title: "Fresh Super Mall",
    image:
      "https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8fDB8fHww",
    text: "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn’t recommend them more!",
  },
  {
    id: 4,
    header: `"Namma College: Best Career Guidance in Coimbatore"`,
    name: "Raghul Gv",
    title: "★★★★★ a months ago",
    image: "/static/user1.png",
    text: "Thank you so much for your guidance, enthusiasm, fabulous knowledge and overall positive and energetic attitude and one of the best Best career guidance in coimbatore",
  },
  {
    id: 5,
    header: `"best educational consultancy"`,
    name: "Gokul",
    title: "★★★★★ a months ago",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUI7dywYflL7bavx8gMG0Xsmk1e9H02qdKag0gKuoSBFcCp8V0u=w45-h45-p-rp-mo-br100",
    text: "I would highly recommend Namma College for career guidance, It is the best educational consultancy in Coimbatore",
  },
  {
    id: 6,
    header: `"thankful to Namma college"`,
    name: "Samuvel Manikandan",
    title: "★★★★★ 2 months ago",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWn9urO47NbV2X0vNE6X6qGsUg4cfyjFrfz4YXffiZR_cUDvTJG=w45-h45-p-rp-mo-br100",
    text: "I am extremely thankful to Namma college for helping me secure a seat in Sri Lakshmi Nursing college coimbatore.special thanks to sudha mam",
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-sm:relative flex flex-col lg:flex-row items-center p-4  lg:p-10 bg-white">
      {/* Header and Navigation */}
      <div className="w-full lg:w-1/3 flex flex-col  mb-5 lg:mb-0 pr-0 lg:pr-5 text-center lg:text-center">
        {/* <h2 className="text-4xl font-bold text-black mb-5 ">
          What Our <span className="text-blue-900 underline">Students</span> Say
          About Us
        </h2> */}
        <div className="flex items-center justify-center">
          <img
            src="static/customer-satisfaction.png"
            alt="goggle-rating"
            className="h-[200px] object-cover"
          />
        </div>
        <div className=" z-10 max-sm:absolute bottom-4  flex justify-center gap-2.5">
          <button
            onClick={handlePrev}
            className="border-4 border-[#fcb600] border-s-destructive rounded-full text-2xl  w-12 h-12 flex items-center text-[#264790] justify-center "
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="text-2xl border-4 border-[#fcb600] border-e-destructive rounded-full w-12 h-12 flex items-center text-[#264790] justify-center"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="card_section sm:grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 flex-1">
        <a href={reviews[currentIndex].link} target="_blank">
          <div className="section__card h-[600px]">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <h4 className="text-center capitalize mt-2">
              {reviews[currentIndex].header}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {reviews[currentIndex].text}
            </p>
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="h-20 w-20 rounded-full object-cover mb-2.5"
            />
            <h5 className="text-black">{reviews[currentIndex].name}</h5>
            <h6 className="text-black">{reviews[currentIndex].title}</h6>
          </div>
        </a>
        <a
          href={reviews[(currentIndex + 1) % reviews.length].link}
          className="hide-card"
          target="_blank"
        >
          <div className="section__card h-[600px]">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <h4 className="text-center capitalize">
              {reviews[(currentIndex + 1) % reviews.length].header}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {reviews[(currentIndex + 1) % reviews.length].text}
            </p>
            <img
              src={reviews[(currentIndex + 1) % reviews.length].image}
              alt={reviews[(currentIndex + 1) % reviews.length].name}
              className="h-20 w-20 rounded-full object-cover mb-2.5"
            />
            <h5 className="text-black">{reviews[(currentIndex + 1) % reviews.length].name}</h5>
            <h6 className="text-black">{reviews[(currentIndex + 1) % reviews.length].title}</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
