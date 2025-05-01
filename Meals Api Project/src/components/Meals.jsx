import axios from "axios";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setItems(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const itemsList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section
        key={idMeal}
        className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-200"
      >
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover"
        />
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">{strMeal}</h2>
            <p className="text-sm text-gray-600"> ${idMeal}</p>
          </div>
        </section>
      </section>
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Seafood Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemsList}
      </div>
    </div>
  );
};

export default Meals;
