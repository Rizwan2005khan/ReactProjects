import React, { useState } from "react";

const ColorToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all ${
        darkMode ? "bg-gray-900 text-amber-400" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={handleClick}
        className={`mb-8 px-6 py-2 rounded-lg font-bold shadow-lg transition-all ${
          darkMode
            ? "bg-amber-400 text-gray-900 hover:bg-amber-300"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <section className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to a  Real World <br /> of toggle color
        </h1>
      </section>
    </div>
  );
};

export default ColorToggle;
