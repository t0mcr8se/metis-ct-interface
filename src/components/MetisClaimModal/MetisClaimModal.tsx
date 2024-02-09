import React, { useCallback, useEffect, useRef } from "react";
import metisLogo from "../../assets/images/logo_mob.svg";
import xpIcon from "../../assets/header_icons/xp_icon.svg";

import Button from "../ButtonSmall/ButtonSmall.tsx";
import { ItemStates, TCards } from "../../store/cardItems";
import { useAccount } from "wagmi";
import { useClaimTokens } from "../../hooks/useClaimTokens.ts";
import { EXPLORER, METIS_ADDRESS } from "../../constants/index.ts";
import { useClickOutside } from "../../hooks/useClickOutside.ts";
import { formatUnits } from "viem";
import { useCountdown } from "usehooks-ts";

export default function MetisClaimModal({
  card,
  onClose,
}: {
  card: TCards;
  onClose: () => void;
}) {
  const { address } = useAccount();
  const refModal = useRef(null);

  useClickOutside(refModal, onClose);

  const {
    canClaim,
    claim,
    claimableAmount,
    nextClaimTimestamp,
    callStatus,
    claimCallResult,
  } = useClaimTokens(address, METIS_ADDRESS);
  const hasToJoin =
    card.history.find((task) => task.id === "joinId")!.state !==
    ItemStates.COMPLETED;

  const handleClick = useCallback(() => {
    if (hasToJoin) {
      window.open(card.url + address, "_blank");
      onClose();
    } else if (canClaim) {
      claim();
    }
  }, [address, canClaim, card.url, claim, hasToJoin, onClose]);

  const [count, { startCountdown }] = useCountdown({
    countStart: nextClaimTimestamp
      ? Math.ceil((nextClaimTimestamp.getTime() - Date.now()) / 1000)
      : 0,
  });

  useEffect(() => {
    if (!canClaim && nextClaimTimestamp && nextClaimTimestamp > new Date()) {
      startCountdown();
    }
  }, [canClaim, nextClaimTimestamp, startCountdown]);

  return (
    <div className="fixed w-full h-full z-10 left-0 top-0 overflow-hidden bg-black/[0.6] flex items-center justify-center">
      <div ref={refModal} className="bg-[#313144] p-8 rounded-[24px]">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold">Claim tokens</h1>
          <h6 className="text-white text-md mt-1">
            Claim your testnet tokens very 24 hours
          </h6>
        </div>
        <div className="w-full my-12 bg-[#024884]/[0.4] p-4 rounded-[16px] flex flex-col items-center gap-2">
          {claimCallResult ? (
            <>
              <span>Transaction submitted</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-white rounded-full">
                  <img src={metisLogo} className="w-6 h-6 rounded-full"></img>
                </div>
                <a
                  target="_blank"
                  href={EXPLORER + "/tx/" + claimCallResult.hash}
                  className="text-lg font-bold text-white leading-none tracking-wide hover:underline"
                >
                  {`${claimCallResult.hash.substring(
                    0,
                    5
                  )}...${claimCallResult.hash.substring(64 - 5, 64)}`}
                </a>
              </div>
            </>
          ) : hasToJoin ? (
            <>
              <span>Join the Telegram bot to be eligble</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-white rounded-full">
                  <img src={xpIcon} className="w-6 h-6 rounded-full"></img>
                </div>
                <p className="text-4xl font-bold text-white leading-none tracking-wide">
                  500
                </p>
              </div>
            </>
          ) : canClaim ? (
            <>
              <span>You're eligble for a claim</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center">
                  <img src={metisLogo} className="w-6 h-6 rounded-full"></img>
                </div>
                <p className="text-4xl font-bold text-white leading-none tracking-wide">
                  {claimableAmount !== undefined
                    ? formatUnits(claimableAmount, 18)
                    : "fetching..."}
                </p>
              </div>
            </>
          ) : (
            <>
              <span>Next claim available in:</span>
              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold text-white leading-none tracking-wide">
                  {`${Math.floor(count / 3600)}:`}
                  {`${Math.floor((count % 3600) / 60)}:`}
                  {`${Math.floor((count % 3600) % 60)}`}
                </p>
              </div>
            </>
          )}
        </div>
        {(!hasToJoin && !canClaim) || claimCallResult ? null : (
          <Button
            type="black_btn"
            text={
              hasToJoin ? (
                "Start Now"
              ) : callStatus.isLoading ? (
                <div className="flex text-white/[0.5]">Claiming...</div>
              ) : (
                "Claim now"
              )
            }
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
