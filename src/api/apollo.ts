import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SCORES_SUBGRAPH } from '../constants';

export const scoresClient = new ApolloClient({
    uri: SCORES_SUBGRAPH,
    cache: new InMemoryCache(),
});

export const USER_QUERY = gql`
    query ($address: String!) {
        user(id: $address){
          id
          dateJoined
          blockJoined
          joinId
          score
          actionCount
          netswapLp
          netswapSwap
          tethysTLP
          tethysSwap
          tethysPerp
          midasLottery
          leagueSub
          leagueBuy
          hummusLp
          hummusSwap
          spins
          spinsBought
          adminPointsAdded
          enkiStakeEnki
          enkiStakeMetis
          enkiStakeEMetis
        }
      }
`

export const PAIRS_QUEY = gql`
    {
        pairs(first: 1000){
            id
            factory
        }
    }
`