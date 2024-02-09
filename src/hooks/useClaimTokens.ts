import { useContractRead, useContractWrite } from "wagmi";
import FAUCET_ABI from "../abi/faucet";
import { FAUCET_ADDRESS } from "../constants";
import { useCallback, useMemo } from "react";

const faucetContract: any = {
  address: FAUCET_ADDRESS,
  abi: FAUCET_ABI,
  watch: true,
  staleTime: 5000,
};

export function useClaimTokens(userAddress?: string, tokenAddress?: string) {
  const { data: canClaimData } = useContractRead({
    ...faucetContract,
    functionName: "canClaim",
    args: [userAddress, tokenAddress],
    enabled: Boolean(userAddress) && Boolean(tokenAddress),
  });

  const { data: nextClaimData } = useContractRead({
    ...faucetContract,
    functionName: "getNextClaimTimestamp",
    args: [tokenAddress, userAddress],
    enabled: Boolean(userAddress) && Boolean(tokenAddress),
  });

  const { data: claimAmountData } = useContractRead({
    ...faucetContract,
    functionName: "getClaimableAmount",
    args: [tokenAddress],
    enabled: Boolean(userAddress) && Boolean(tokenAddress),
  });

  const {
    write: claimCall,
    data: claimCallResult,
    ...callStatus
  } = useContractWrite({
    address: FAUCET_ADDRESS,
    abi: FAUCET_ABI,
    functionName: "claim",

    gas: 100000n,
  });

  const canClaim: boolean = useMemo(
    () => canClaimData && (canClaimData as any),
    [canClaimData]
  );

  const nextClaimTimestamp: Date | undefined = useMemo(
    () =>
      nextClaimData !== undefined
        ? new Date(Number(nextClaimData) * 1000)
        : undefined,
    [nextClaimData]
  );

  const claimableAmount: bigint | undefined = useMemo(
    () =>
      claimAmountData !== undefined ? (claimAmountData as any) : undefined,
    [claimAmountData]
  );

  const claim: () => void = useCallback(() => {
    claimCall({ args: [tokenAddress] });
  }, [claimCall, tokenAddress]);

  return {
    canClaim,
    claim,
    callStatus,
    nextClaimTimestamp,
    claimableAmount,
    claimCallResult,
  };
}
