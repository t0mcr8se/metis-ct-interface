import { useState } from "react";
import ScoreboardTable from "../../components/ScoreboardTable/ScoreboardTable.tsx";
import { ScrollRestoration } from "react-router-dom";

export default function Scoreboard() {
  const [selectedCategory, setCategory] = useState("1")

  const handleCategoryClick = (value: string) => {
    setCategory(value);
  };

  return (
    <>
      <ScrollRestoration />
      <div className="w-full max-w-xl mx-auto flex flex-col items-center my-8 gap-y-9">
      <div className="flex justify-between items-center mb-4">
          <label htmlFor="category" className="text-white font-raleway text-lg">
            Select Category:
          </label>
          <button
            className={`px-4 py-2 rounded-full text-white font-raleway text-lg hover:bg-gray-200 ${
              selectedCategory === "1" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleCategoryClick("1")}
          >
            ELITE
          </button>
          <button
            className={`px-4 py-2 rounded-full text-white font-raleway text-lg hover:bg-gray-200 ${
              selectedCategory === "2" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleCategoryClick("2")}
          >
            BASED
          </button>
          <button
            className={`px-4 py-2 rounded-full text-white font-raleway text-lg hover:bg-gray-200 ${
              selectedCategory === "3" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleCategoryClick("3")}
          >
            GOOD
          </button>
        </div>
        <h1 className="text-white font-raleway text-7xl text-center tracking-wide">
          Scoreboard
        </h1>
        <div className="w-full">
          <ScoreboardTable category={selectedCategory}/>
        </div>
      </div>
    </>
  );
}