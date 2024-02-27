import { useFetchScoreboardPage } from "../../hooks/useHelmetDrop";
import { shortenAddress } from "../../utils";
import React, { useMemo } from "react";

function Row({
  ranking,
  points,
  address,
}: {
  ranking: number;
  points: number;
  address: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-x-4 w-full py-2 px-4 [&:nth-child(odd)]:bg-[#001C22] [&:nth-child(even)]:bg-[#001317]">
      <div className="font-inter font-normal text-md text-[#C1C1C1]">
        {ranking}
      </div>
      <div className="font-inter font-normal text-md text-[#C1C1C1]">
        <a
          href={`https://andromeda-explorer.metis.io/address/${address}`}
          target="_blank"
        >
          {shortenAddress(address)}
        </a>
      </div>
      <div className="font-inter font-normal text-md text-right text-[#C1C1C1]">
        {points}
      </div>
    </div>
  );
}

export default function ScoreboardTable({ category }: { category: string }) {
  const [page, setPage] = React.useState(0);
  const { scoreboard, loading } = useFetchScoreboardPage(page, category);

  const isFirstPage = useMemo(() => page === 0, [page]);

  return (
    <>
      <div className="w-full mb-4 flex items-center justify-end gap-2">
        <button
          onClick={() => setPage((p) => p - 1)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007B96] hover:bg-[#2c6572] hover:text-white disabled:pointer-events-none disabled:opacity-40"
          disabled={isFirstPage}
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1L1 6.5L6 12" stroke="#00D2FF" />
          </svg>
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007B96] hover:bg-[#2c6572] hover:text-white disabled:pointer-events-none disabled:opacity-40"
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6.5L1 12" stroke="#00D2FF" />
          </svg>
        </button>
      </div>
      <div className="w-full bg-[#002E38] rounded-xl overflow-hidden select-none">
        <div className="grid grid-cols-3 gap-x-4 w-full py-2 px-4">
          <div className="font-inter font-bold text-sm text-[#00D2FF]">
            Rank
          </div>
          <div className="font-inter font-bold text-sm text-[#00D2FF]">
            Address
          </div>
          <div className="font-inter font-bold text-sm text-right text-[#00D2FF]">
            Score
          </div>
        </div>

        {loading
          ? new Array(10).fill(0).map((_, i) => (
              <div
                key={`loading-row-${i}`}
                className="animate-pulse grid grid-cols-3 gap-x-4 w-full py-2 px-4 [&:nth-child(odd)]:bg-[#001C22] [&:nth-child(even)]:bg-[#001317]"
              >
                <div className="h-2 w-8 bg-slate-400 rounded-xl"></div>
                <div className="h-2 w-24 bg-slate-400 rounded-xl"></div>
                <div className="h-2 w-24 bg-slate-400 rounded-xl"></div>
              </div>
            ))
          : scoreboard.map(
              ({
                helmetRanking: ranking,
                points,
                address,
              }: {
                helmetRanking: number;
                points: number;
                address: string;
              }) => (
                <Row
                  key={`scoreboard-${address}-${ranking}`}
                  ranking={ranking}
                  points={points}
                  address={address}
                />
              )
            )}
      </div>
      <div className="w-full mt-4 flex items-center justify-end gap-2">
        <button
          onClick={() => setPage((p) => p - 1)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007B96] hover:bg-[#2c6572] hover:text-white disabled:pointer-events-none disabled:opacity-40"
          disabled={isFirstPage}
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1L1 6.5L6 12" stroke="#00D2FF" />
          </svg>
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007B96] hover:bg-[#2c6572] hover:text-white disabled:pointer-events-none disabled:opacity-40"
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6.5L1 12" stroke="#00D2FF" />
          </svg>
        </button>
      </div>
    </>
  );
}
