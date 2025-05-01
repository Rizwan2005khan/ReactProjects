import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchIcon = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    if (e.target.className.includes("container")) {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      onClick={handleClick}
      className={`container flex items-center justify-center h-screen w-screen transition-all ${
        bgColor === "#1a1a1a" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 text-white w-4/5 sm:w-3/5 lg:w-1/3"
        />
      ) : (
        <FaSearch
          onClick={() => {
            setShowInput(true);
            setBgColor("#1a1a1a");
          }}
          className="text-3xl text-gray-500 cursor-pointer hover:text-blue-500 transition-colors"
        />
      )}
    </section>
  );
};

export default HiddenSearchIcon;
