import SeasonOne from "../../components/SeasonOne/SeasonOne.tsx";
import SeasonTwo from "../../components/SeasonTwo/SeasonTwo.tsx";
// import Ecosystem from '../../components/Ecosystem/Ecosystem.tsx'

import "./Home.css";
import Layer3Quest from "../../components/Layer3Quest/Layer3Quest.tsx";
import ButtonSmall from "../../components/ButtonSmall/ButtonSmall.tsx";
import { Link, ScrollRestoration } from "react-router-dom";

import NFT_IMAGE_1 from "../../assets/cards/nft1.png";
import NFT_IMAGE_2 from "../../assets/cards/nft2.png";
import NFT_IMAGE_3 from "../../assets/cards/nft3.png";

export default function Home() {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-8 gap-y-9 px-2">
        <SeasonOne />
        <SeasonTwo />
        <div className="w-full mt-16 mb-12">
          <div className="w-full grid grid-cols-3 gap-4 mb-12 sm:grid-cols-3">
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(0,210,255,0.25)] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_1}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(0,210,255,0.25)] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_2}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(0,210,255,0.25)] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_3}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
          </div>
          <ButtonSmall type="unstyled_btn" text={"Claim Now"} />
        </div>
      </div>
      <div className="w-full bg-[#1F252C] py-[66px] flex flex-col items-center">
        <h1 className="text-white text-center font-raleway font-bold text-5xl leading-none tracking-wide max-w-xl">
          Complete Metis quests and Get an Epic NFT!
        </h1>
        <div className="grid grid-cols-1 mt-10 w-full max-w-6xl px-4 gap-4 sm:grid-cols-2 sm:px-4">
          <Layer3Quest id="bridging-the-gap" />
          <Layer3Quest id="swap-and-smile" />
          <Layer3Quest id="borrow-lend-and-prosper" />
          <Layer3Quest id="explore-beefy-on-metis" />
          <Layer3Quest id="aggregate-on-metis" />
          <Layer3Quest id="mint-mai" />
          <Layer3Quest id="the-future-of-metis" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-10 pb-40">
        <Link to="/scoreboard">
          <ButtonSmall type="unstyled_btn" text={"Scoreboard"} />
        </Link>
      </div>
    </>
  );
}
