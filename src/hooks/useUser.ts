import { useQuery } from "@apollo/client";
import { PAIRS_QUEY, USER_QUERY, XP_QUERY } from "../api/apollo";
import { useMemo } from "react";
import { useClaimTokens } from "./useClaimTokens";
import { METIS_ADDRESS } from "../constants";

export function useUser(address?: string) {
  const resp = useQuery(USER_QUERY, {
    variables: { address: address?.toLowerCase() },
  });

  const { canClaim } = useClaimTokens(address, METIS_ADDRESS);

  return useMemo(
    () => ({ ...resp.data?.user, faucetClaim: canClaim }),
    [canClaim, resp.data?.user]
  );
}

export function usePairs() {
  const resp = useQuery(PAIRS_QUEY);
  return useMemo(() => resp.data?.pairs, [resp]);
}

export function useXPAmount(address?: string) {
  const resp = useQuery(XP_QUERY, {
    variables: { address: address?.toLowerCase() },
    pollInterval: 1000 * 30,
  });

  const score = useMemo(() => resp.data?.user.score, [resp]);

  return { score, ...resp };
}
