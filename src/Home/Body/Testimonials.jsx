/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://summer-camp-server-side-seven.vercel.app/reviews")
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
      {reviews.length > 0 ? (
        <Slider {...settings} className="mx-auto max-w-full md:max-w-lg">
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-2xl text-gray-500 mr-2" />
                <p className="text-gray-600 text-lg">{review.review}</p>
              </div>
              <p className="text-gray-800 font-semibold">{review.name}</p>
              <div className="flex items-center mt-2">
                <Rating
                  initialRating={review.rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="" />}
                  fullSymbol={<FaStar />}
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading testimonials...</p>
      )}
    </div>
  );
};

export default Testimonials;
