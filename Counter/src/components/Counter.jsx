import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-3xl font-bold text-center mb-6">Counter</h1>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            Item Count: <span className="text-blue-500">{count}</span>
          </h2>
          <div className="flex gap-4">
            <button
              className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
              onClick={increment}
            >
              <AiOutlinePlus className="mr-2" /> 
            </button>
            <button
              className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              onClick={decrement}
            >
              <AiOutlineMinus className="mr-2" /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
