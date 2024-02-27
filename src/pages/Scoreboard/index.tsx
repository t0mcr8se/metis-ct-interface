// import Ecosystem from '../../components/Ecosystem/Ecosystem.tsx'

import ButtonSmall from "../../components/ButtonSmall/ButtonSmall.tsx";
import ScoreboardTable from "../../components/ScoreboardTable/ScoreboardTable.tsx";
import { ScrollRestoration } from "react-router-dom";

export default function Scoreboard() {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full max-w-xl mx-auto flex flex-col items-center my-8 gap-y-9">
        <h1 className="text-white font-raleway text-7xl text-center tracking-wide">
          Scoreboard
        </h1>
        <div className="w-full flex flex-col items-center pt-4 pb-8">
          <ButtonSmall type="unstyled_btn" text={"Download"} />
        </div>

        <div className="w-full">
          <ScoreboardTable />
        </div>
      </div>
    </>
  );
}