import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-90 p-4 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 text-right border border-gray-400 rounded-lg focus:outline-none"
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-red-500 text-white p-2 rounded-lg"
            onClick={clear}
          >
            C
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => display("/")}
          >
            /
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => display("*")}
          >
            *
          </button>

          <button onClick={() => display("7")} className="btn">
            7
          </button>
          <button onClick={() => display("8")} className="btn">
            8
          </button>
          <button onClick={() => display("9")} className="btn">
            9
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => display("-")}
          >
            -
          </button>

          <button onClick={() => display("4")} className="btn">
            4
          </button>
          <button onClick={() => display("5")} className="btn">
            5
          </button>
          <button onClick={() => display("6")} className="btn">
            6
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => display("+")}
          >
            +
          </button>

          <button onClick={() => display("1")} className="btn">
            1
          </button>
          <button onClick={() => display("2")} className="btn">
            2
          </button>
          <button onClick={() => display("3")} className="btn">
            3
          </button>
          <button
            className="row-span-2 bg-green-500 text-white p-2 rounded-lg"
            onClick={calculate}
          >
            =
          </button>

          <button
            onClick={() => display("0")}
            className="col-span-2 bg-gray-200 p-2 rounded-lg"
          >
            0
          </button>
          <button onClick={() => display(".")} className="btn">
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
