const FAUCET_ABI = [
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "DISTRIBUTOR_ADDRESS",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WAIT_TIME",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addToken",
    inputs: [
      { name: "token", type: "address", internalType: "contract ERC20" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "canClaim",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "token", type: "address", internalType: "contract ERC20" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      { name: "token", type: "address", internalType: "contract ERC20" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getClaimableAmount",
    inputs: [{ name: "", type: "address", internalType: "contract ERC20" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNextClaimTimestamp",
    inputs: [
      { name: "", type: "address", internalType: "contract ERC20" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeToken",
    inputs: [
      { name: "token", type: "address", internalType: "contract ERC20" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
];

export default FAUCET_ABI;
