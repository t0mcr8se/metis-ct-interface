import SeasonOne from "../../components/SeasonOne/SeasonOne.tsx";
import SeasonTwo from "../../components/SeasonTwo/SeasonTwo.tsx";
// import Ecosystem from '../../components/Ecosystem/Ecosystem.tsx'

import "./Home.css";
import "../../styles.css";
import Layer3Quest from "../../components/Layer3Quest/Layer3Quest.tsx";
import ButtonSmall from "../../components/ButtonSmall/ButtonSmall.tsx";
import { Link, ScrollRestoration } from "react-router-dom";

import NFT_IMAGE_1 from "../../assets/cards/1.png";
import NFT_IMAGE_2 from "../../assets/cards/2.png";
import NFT_IMAGE_3 from "../../assets/cards/3.png";
import { useCallback, useMemo } from "react";
import { useClaimHelmet } from "../../hooks/useHelmetDrop.ts";
import { useAccount, useNetwork } from "wagmi";
import { metis } from "viem/chains";
import { HELMET_EXPLORER_URI } from "../../constants/index.ts";

export default function Home() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { found, claim, hasClaimed, helmetType, ranking, loading, joinId } =
    useClaimHelmet(address);

  const helmetTypeNum = useMemo(() => Number(helmetType ?? 0), [helmetType]);

  const handleClick = useCallback(() => {
    if (!found) {
      return;
    }
    if (found) {
      claim();
    }
  }, [claim, found]);

  return (
    <>
      <ScrollRestoration />
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-8 gap-y-9 px-2">
        <SeasonOne />
        <SeasonTwo />
        <div className="w-full mt-16 mb-12">
          <div className="w-full grid grid-cols-3 gap-4 mb-12 sm:grid-cols-3">
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(${
                Number(helmetType ?? 0) === 1
                  ? "170,255,0,0.5"
                  : "0,210,255,0.25"
              })] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_1}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(${
                Number(helmetType ?? 0) === 2
                  ? "170,255,0,0.5"
                  : "0,210,255,0.25"
              })] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_2}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
            <div
              className={`w-full pb-[100%] rounded-xl border border-solid border-[#00D2FF] shadow-[0px_0px_25px_0px_rgba(${
                Number(helmetType ?? 0) === 3
                  ? "170,255,0,0.5"
                  : "0,210,255,0.25"
              })] relative overflow-hidden`}
            >
              <img
                src={NFT_IMAGE_3}
                className="w-full h-full absolute left-0 top-0"
              />
            </div>
          </div>

          <br />
          {!chain ? (
            <center>
              <h1 className="text-white text-center font-raleway font-bold text-3xl leading-none tracking-wide max-w-xl">
                Please connect to Metis network
              </h1>
              <br />
              <w3m-connect-button />
            </center>
          ) : chain.id !== metis.id ? (
            <center>
              <h1 className="text-white text-center font-raleway font-bold text-3xl leading-none tracking-wide max-w-xl">
                Please switch the network
              </h1>
              <br />
              <w3m-network-button />
            </center>
          ) : (
            <>
              {!loading && !found && (
                <h1 className="text-white text-center font-raleway font-bold text-3xl leading-none tracking-wide max-w-xl">
                  Your address was not found in the tree
                </h1>
              )}
              {!loading && found && (
                <h1 className="text-white text-center font-raleway font-bold text-3xl leading-none tracking-wide max-w-xl">
                  You have earned the{" "}
                  {helmetTypeNum === 1
                    ? "ELITE"
                    : helmetTypeNum === 2
                    ? "BASED"
                    : "GOOD"}{" "}
                  helmet
                </h1>
              )}
              <br />
              {!loading && found && (
                <h1 className="text-white text-center font-raleway font-bold text-3xl leading-none tracking-wide max-w-xl">
                  Your ranking among other players: {Number(ranking)}
                </h1>
              )}
              <br />
              {!loading && found && hasClaimed && (
                <ButtonSmall
                  type="unstyled_btn"
                  text={"Check your Helmet"}
                  onClick={() => {window.open(HELMET_EXPLORER_URI + joinId)}}
                />
              )}
              {!hasClaimed && found && (
                <ButtonSmall
                  type="unstyled_btn"
                  text={"Claim Now"}
                  onClick={handleClick}
                />
              )}
            </>
          )}
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
