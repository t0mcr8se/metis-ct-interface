export const SCORES_SUBGRAPH =
  "https://sepolia.thegraph.metis.io/subgraphs/name/metisio/ct";
export const TG_BOT = "https://t.me/MetisCTBot?start=";

export const WC_PROJECT_ID =
  process.env.WC_PROJECT_ID || "d0185aef45e54b7459c3a09ad4c1c15a";

export const METIS_ADDRESS = "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
export const SPINNING_ADDRESS = "0xb5385bEfdB12A3c70e3D5Be90A51d5b5d9C18479";
export const FAUCET_ADDRESS = "0x426320AA540661869bF2A6061197378F41fCc602";
export const PROBABILITIES = [350, 550, 700, 825, 900, 950, 975, 990];
export const EXPLORER = "https://sepolia.explorer.metisdevops.link";

export const TWITTER_URL = "https://x.com/MetisL2";
export const TELEGRAM_URL = "https://t.me/MetisL2";
export const YOUTUBE_URL = "https://www.youtube.com/@Metis_L2";
export const GITHUB_URL = "https://github.com/MetisProtocol";
export const DISCORD_URL = "https://discord.com/invite/metis";
export const MEDIUM_URL = "https://metisl2.medium.com/";
export const METIS_URL = "https://metis.io/";

// Helmet drop constants
export const HELMET_DROP_ADDRESS = "0xF29eA76d01cCfA2f8772519a3813078d267b080D"
export const HELMET_EXPLORER_URI = "https://andromeda-explorer.metis.io/token/0xf29ea76d01ccfa2f8772519a3813078d267b080d/instance/"
// TODO: update this to a folder (s3/ipfs) that has the json for each address
export const HELMET_PROOF_URL = "https://metis-merkle-verifier.azurewebsites.net/api/getUserMerkleProof?address="
export const HELMET_SCOREBOARD_URL = "https://metis-merkle-verifier.azurewebsites.net/api/getPaginatedUsers?limit=100&page="
