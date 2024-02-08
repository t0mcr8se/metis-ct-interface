import { useUser } from "./useUser";
import { ItemStates, TCards, szn1Cards, szn2Cards } from "../store/cardItems";
import { useCallback, useMemo } from "react";

export function useCards(address?: string, season?: number) {
  const user = useUser(address);

  const getCardStatus = useCallback(
    (card: TCards) => {
      return card.history
        .map((hist) => user[hist.id])
        .every((one) => Number(one ?? 0))
        ? ItemStates.COMPLETED
        : card.history
            .map((hist) => user[hist.id])
            .some((one) => Number(one ?? 0))
        ? ItemStates.STARTED
        : ItemStates.NOT_STARTED;
    },
    [user]
  );

  return useMemo(() => {
    const cards = season == 1 ? szn1Cards : szn2Cards;
    if (!user) return cards;
    return cards.reduce<TCards[]>((result, current) => {
      return [
        ...result,
        {
          ...current,
          state: getCardStatus(current),
          history: current.history.map((hist) => {
            return {
              ...hist,
              state: Number(user[hist.id] ?? 0)
                ? ItemStates.COMPLETED
                : ItemStates.NOT_STARTED,
            };
          }),
        },
      ];
    }, []);
  }, [getCardStatus, season, user]);
}

export function useCompleted(address?: string) {
  const cards = useCards(address);
  return useMemo(() => {
    return cards.every((card) => card.state == ItemStates.COMPLETED);
  }, [cards]);
}
