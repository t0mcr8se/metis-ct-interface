import { Chain } from "wagmi";
import { defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WC_PROJECT_ID } from "./constants";

// Metis sepolia chain config
export const metis_sepolia = {
  id: 59901,
  name: "Metis Sepolia",
  network: "metis-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS",
  },
  rpcUrls: {
    public: { http: ["https://sepolia.rpc.metisdevops.link/"] },
    default: { http: ["https://sepolia.rpc.metisdevops.link/"] },
  },
  blockExplorers: {
    default: {
      name: "BlockScout",
      url: "https://sepolia.explorer.metisdevops.link/",
    },
  },
  // TODO: deploy multicall3
} as const satisfies Chain;

export const config = defaultWagmiConfig({
  projectId: WC_PROJECT_ID,
  chains: [metis_sepolia],
  metadata: {
    // TODO: update Metadata
    name: "Metis Community Testing",
    description: "Metis Community Testing Page",
    url: "https://decentralize.metis.io",
    icons: [
      "https://assets-global.website-files.com/6507242ad3e4e6ff563301e4/65456c8e4f6aaae6afc5eb7d_Symbol.svg",
    ],
  },
});
