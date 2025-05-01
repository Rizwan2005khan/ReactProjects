import React from "react";
import { accordionData } from "./utils/content";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      {accordionData.map((item, index) => (
        <Accordion
          key={index} 
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default App;
