import { useQuery } from "@apollo/client";
import { PAIRS_QUEY, USER_QUERY } from "../api/apollo";
import { useMemo } from "react";

export function useUser (address?: string) {
    const resp = useQuery(USER_QUERY, {variables: {address: address?.toLowerCase()}})
    return useMemo(() => resp.data?.user, [resp])
}

export function usePairs () {
    const resp = useQuery(PAIRS_QUEY)
    return useMemo(() => resp.data?.pairs, [resp])
}