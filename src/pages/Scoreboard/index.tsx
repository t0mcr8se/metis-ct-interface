import { useState } from "react";
import ScoreboardTable from "../../components/ScoreboardTable/ScoreboardTable.tsx";
import { ScrollRestoration } from "react-router-dom";

export default function Scoreboard() {
  const [selectedCategory, setCategory] = useState("1")

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <ScrollRestoration />
      <div className="w-full max-w-xl mx-auto flex flex-col items-center my-8 gap-y-9">
      <div className="flex justify-between items-center mb-4">
          <label htmlFor="category" className="text-white font-raleway text-lg">
            Select Category:
          </label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {/* Add options for different categories */}
            <option value="1">ELITE</option>
            <option value="2">BASED</option>
            <option value="3">GOOD</option>
            {/* Add more options as needed */}
          </select>
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