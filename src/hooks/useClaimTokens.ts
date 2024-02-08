import { useContractRead } from "wagmi";
import FAUCET_ABI from "../abi/faucet";
import { FAUCET_ADDRESS } from "../constants";
import { useMemo } from "react";

export function useClaimTokens(userAddress?: string, tokenAddress?: string) {
  const { data } = useContractRead({
    abi: FAUCET_ABI,
    address: FAUCET_ADDRESS,
    functionName: "canClaim",
    args: [userAddress, tokenAddress],
    watch: true,
    staleTime: 5000,
    enabled: Boolean(userAddress) && Boolean(tokenAddress),
  });

  const canClaim: boolean = useMemo(() => data && (data as any)[0], [data]);

  return { canClaim };
}
