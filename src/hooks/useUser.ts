import { useQuery } from "@apollo/client";
import { PAIRS_QUEY, USER_QUERY } from "../api/apollo";

export function useUser (address: string) {
    return useQuery(USER_QUERY, {variables: {address}})
}

export function usePairs () {
    return useQuery(PAIRS_QUEY)
}