import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import SPINNING_ABI from '../abi/spinning'
import { PROBABILITIES, SPINNING_ADDRESS } from "../constants";
import { useEffect, useMemo } from "react";
import { decodeEventLog, formatEther } from "viem";

interface SpinEventArgs {
    spinResult: bigint
    tokensAdded: bigint
    pointsAdded: bigint
}

export function useSpins(address?: string) {
    return useContractRead({
        staleTime: 10000,
        abi: SPINNING_ABI,
        address: SPINNING_ADDRESS,
        functionName: 'spins',
        args: [address]
    })
}

export function useSpinPrice(numSpins: number|bigint = 1) {
    const {data: spinPrice} = useContractRead({
        abi: SPINNING_ABI,
        address: SPINNING_ADDRESS,
        functionName: 'spinPrice'
    })
    return useMemo(() => {
        if(!spinPrice) return
        return (spinPrice as bigint) * BigInt(numSpins)
    }, [spinPrice, numSpins])
}

export function useSpinningWheelItems() {
    const spinPrice = useSpinPrice()
    return useMemo(() => {
        const spinBI = (spinPrice || 0n) as bigint
        return [
            `2000 XP`,
            `${Number(formatEther(spinBI)) * 2} METIS`,
            `5000 XP`,
            `${Number(formatEther(spinBI)) * 5} METIS`,
            `10000 XP`,
            `${Number(formatEther(spinBI)) * 10} METIS`,
            `1000 XP`,
            `${Number(formatEther(spinBI)) * 1} METIS`,
        ]
    }, [spinPrice])
}

export function useSpinWheel() {
    const {
        data, 
        write: spinWheel, 
        isError, 
        isIdle, 
        isLoading, 
        isSuccess,
        error
    } = useContractWrite({
        address: SPINNING_ADDRESS,
        abi: SPINNING_ABI,
        functionName: 'spinWheel',
        gas: 100000n
    })
    
    const {
      data: txData, 
      isFetched,
      isError: isFetchError, 
      isFetching, 
      refetch,
      isRefetching,
      isIdle: isFetchIdle, 
      isLoading: isFetchLoading,
      isSuccess: isFetchSuccess,
      error: fetchingError,
    } = useWaitForTransaction({
      hash: data?.hash,
      timeout: 360000
    })

    useEffect(() => {
        if(isIdle && isFetchIdle && isFetchError && isSuccess && !isRefetching) {
            refetch()
        }
    }, [isIdle, isFetchError, isFetchIdle, isSuccess, refetch, isRefetching])

    const {tokensAdded, pointsAdded, spinResult} = useMemo(() => {
      if(!txData || isFetchError || isFetching || isFetchLoading || isError || isLoading || isRefetching) return {}
      const unpacked = decodeEventLog({
        abi: SPINNING_ABI,
        data: txData.logs[txData.logs.length - 1].data,
        topics: txData.logs[txData.logs.length - 1].topics
      })
      const args = unpacked.args as SpinEventArgs
      return {
        tokensAdded: args.tokensAdded,
        pointsAdded: args.pointsAdded,
        spinResult: args.spinResult
      }
    }, [txData, isFetchError, isFetchLoading, isFetching, isError, isLoading, isRefetching])
    const spinResultIndex = useMemo(() => {
        if(spinResult === undefined) return
        return PROBABILITIES.reduce((cur, _, i) => { return Number(spinResult) >= PROBABILITIES[cur] ? i : cur }, 0)
    }, [spinResult])

    return {
        txData,
        isFetched,
        isFetchError,
        isFetching,
        isFetchIdle,
        isFetchLoading,
        isFetchSuccess,
        data,
        spinWheel,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        tokensAdded,
        pointsAdded,
        spinResult,
        fetchingError,
        error,
        refetch,
        isRefetching,
        spinResultIndex
    }
}

export function useBuySpins() {
    const result =  useContractWrite({
        address: SPINNING_ADDRESS,
        abi: SPINNING_ABI,
        functionName: 'buySpins',
    })
    return useMemo(() => {
        return result
    }, [result])
}
