import React, { useState } from "react";
import img1 from "../assets/shirt.png";
import img2 from "../assets/shirt2.png";
import img3 from "../assets/shirt3.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      text: "This is a great product!",
      image: img1,
    },
    {
      name: "Jane Smith",
      text: "I love using this service!",
      image: img2,
    },
    {
      name: "Sam Wilson",
      text: "Highly recommend to everyone!",
      image: img3,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { name, text, image } = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 text-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-600 mt-2">{text}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
