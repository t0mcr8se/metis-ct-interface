import { useCallback, useEffect, useMemo, useState } from "react";
import {
  HELMET_DROP_ADDRESS,
  HELMET_PROOF_URL,
  HELMET_SCOREBOARD_URL,
} from "../constants";
import axios from "axios";
import { useContractRead, useContractWrite } from "wagmi";
import HELMET_DROP_ABI from "../abi/helmetDrop";

export function useMerkleProof(address?: string) {
  const [data, setData] = useState<undefined | any>(undefined);
  useEffect(() => {
    if (!address) return;
    const fetchData = async (url: string) => {
      const result = await axios(url);
      setData(result);
    };
    fetchData(HELMET_PROOF_URL + address);
  }, [address]);

  return useMemo(() => {
    if (!data) return { loading: true };
    if (data.status !== 200) return { found: false };
    const { leafIndex, helmetType, points, ranking, joinId, proof } = data.data;
    return {
      found: true,
      leafIndex,
      helmetType,
      points,
      ranking,
      joinId,
      proof,
    };
  }, [data]);
}

export function useFetchScoreboardPage(page: number = 0, category: string) {
  const [data, setData] = useState<undefined | any>(undefined);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setData(undefined);

      const result = await axios(url);
      setData(result);
    };
    fetchData(HELMET_SCOREBOARD_URL + page + `&helmetType=${category}`);
  }, [page, category]);
  return useMemo(() => {
    if (!data) return { loading: true, scoreboard: [] };
    if (data.status !== 200) return { found: false, scoreboard: [] };
    return { scoreboard: data.data, found: true };
  }, [data]);
}

const helmetDropContract: any = {
  address: HELMET_DROP_ADDRESS,
  abi: HELMET_DROP_ABI,
  watch: true,
  staleTime: 5000,
};

export function useClaimHelmet(address?: string) {
  const { data: hasClaimedData } = useContractRead({
    ...helmetDropContract,
    functionName: "claimed",
    args: [address],
    enabled: Boolean(address),
  });
  const hasClaimed: boolean = useMemo(
    () => hasClaimedData && (hasClaimedData as any),
    [hasClaimedData]
  );
  const { points, helmetType, joinId, ranking, proof, found, loading } =
    useMerkleProof(address);

  const {
    write: claimCall,
    data: claimCallResult,
    ...callStatus
  } = useContractWrite({
    address: HELMET_DROP_ADDRESS,
    abi: HELMET_DROP_ABI,
    functionName: "claim",
    gas: 200000n,
  });

  const claim: () => void = useCallback(() => {
    claimCall({ args: [proof, helmetType, points, ranking, joinId] });
  }, [claimCall, helmetType, proof, points, ranking, joinId]);

  return {
    hasClaimed,
    claimCallResult,
    callStatus,
    claim,
    helmetType,
    proof,
    points,
    ranking,
    found,
    loading,
    joinId,
  };
}
