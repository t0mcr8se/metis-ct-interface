// import Ecosystem from '../../components/Ecosystem/Ecosystem.tsx'

import ButtonSmall from "../../components/ButtonSmall/ButtonSmall.tsx";
import ScoreboardTable from "../../components/ScoreboardTable/ScoreboardTable.tsx";
import { ScrollRestoration } from "react-router-dom";

const data = createFakeData();
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
          <ScoreboardTable scoreboard={data} />
        </div>
      </div>
    </>
  );
}

function createFakeData() {
  const out = [];
  for (let i = 0; i < 850; i++) {
    out.push({
      rank: i + 1,
      address: generateRandomEthereumAddress(),
      score: Math.floor(Math.random() * 10001),
    });
  }
  return out;
}

function generateRandomEthereumAddress() {
  const chars = "0123456789abcdef";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
}
