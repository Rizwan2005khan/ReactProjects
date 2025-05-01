import axios from "axios";
import { useState, useEffect } from "react";
import { FaSearch, FaGlobe } from "react-icons/fa";

const RestCountries = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountry, setFilteredCountry] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  }, []);

  const handleSearch = () => {
    const country = data.find((c) =>
      c.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountry(country || null);
  };

  const displayAllCountries = () => {
    return data.map((country) => (
      <div
        key={country.cca3}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
      >
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-2">
            {country.name.common}
          </h2>
          <p className="text-sm text-gray-700">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Capital:</strong>{" "}
            {country.capital ? country.capital[0] : "N/A"}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white flex items-center gap-2 mb-6">
        <FaSearch /> Country Search
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowAll(false)}
          className={`px-4 py-2 rounded-lg font-bold ${
            !showAll ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } hover:bg-blue-600 hover:text-white`}
        >
          Search Countries
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-4 py-2 rounded-lg font-bold ${
            showAll ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } hover:bg-blue-600 hover:text-white`}
        >
          View All Countries
        </button>
      </div>

      {!showAll ? (
        <>
          <div className="w-full max-w-md flex items-center mb-8">
            <input
              type="text"
              placeholder="Enter country name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none  focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg flex items-center gap-2"
            >
              <FaSearch /> Search
            </button>
          </div>

          {searchQuery && filteredCountry ? (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
              <img
                src={filteredCountry.flags.png}
                alt={`Flag of ${filteredCountry.name.common}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-blue-600 mb-2">
                  {filteredCountry.name.common}
                </h2>
                <p className="text-sm text-gray-700">
                  <strong>Region:</strong> {filteredCountry.region}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Population:</strong>{" "}
                  {filteredCountry.population.toLocaleString()}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Capital:</strong>{" "}
                  {filteredCountry.capital ? filteredCountry.capital[0] : "N/A"}
                </p>
              </div>
            </div>
          ) : searchQuery ? (
            <p className="text-white text-lg">No country found.</p>
          ) : null}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {displayAllCountries()}
        </div>
      )}
    </div>
  );
};

export default RestCountries;
