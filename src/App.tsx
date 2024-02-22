import { WagmiConfig } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config, metis_sepolia } from "./config";
import Home from "./pages/Home/index.tsx";
import { WC_PROJECT_ID } from "./constants/index.ts";
import { scoresClient } from "./api/apollo.ts";
import { ApolloProvider } from "@apollo/client";
import { Analytics } from "@vercel/analytics/react";
import Scoreboard from "./pages/Scoreboard/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

createWeb3Modal({
  wagmiConfig: config,
  projectId: WC_PROJECT_ID,
  chains: [metis_sepolia],
  themeMode: "dark",
  themeVariables: {
    "--w3m-font-family": "Inter",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scoreboard",
    element: <Scoreboard />,
  },
]);

function App() {
  return (
    <WagmiConfig config={config}>
      <ApolloProvider client={scoresClient}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
        <Analytics />
      </ApolloProvider>
    </WagmiConfig>
  );
}

export default App;
