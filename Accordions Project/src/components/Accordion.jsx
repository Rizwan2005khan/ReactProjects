import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="border-b border-gray-300">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xl text-gray-600">
          {isActive ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      {isActive && (
        <div className="p-4 bg-gray-50 text-gray-700">
          <p className="text-lg">{content}</p>
        </div>
      )}
    </section>
  );
};

export default Accordion;
