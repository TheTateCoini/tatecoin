"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import getWeb3 from "./web3/getWeb3";
import Web3, { Contract, ContractAbi } from "web3";

interface SharedState {
  // Define your shared state properties here
  connectWallet: () => void;
  web3: Web3Type;
  accounts: string[];
  contract: ContractType;
}
type Web3Type = Web3 | null;

type ContractType = Contract<ContractAbi> | null;

export const AppContext = createContext<SharedState>({} as SharedState);

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [web3, setWeb3] = useState<Web3Type>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contract, setContract] = useState<ContractType>(null);

  const contractAddress = "0xf459A576FE105e3cB5Ea9A0CdA101a2632E70440";
  const abi = [
    {
      constant: false,
      inputs: [
        {
          name: "_beneficiary",
          type: "address",
        },
      ],
      name: "buyTokens",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "collectible",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "endSale",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_caller",
          type: "address",
        },
      ],
      name: "SetNew_Caller",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_wallet",
          type: "address",
        },
      ],
      name: "SetNew_Wallet",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_caller",
          type: "address",
        },
      ],
      name: "SetNewCaller",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "newprice",
          type: "uint256",
        },
      ],
      name: "SetNewPrice",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_wallet",
          type: "address",
        },
      ],
      name: "SetNewWallet",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "purchaser",
          type: "address",
        },
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amount",
          type: "uint256",
        },
      ],
      name: "TokenPurchase",
      type: "event",
    },
    {
      inputs: [
        {
          name: "_rate",
          type: "uint256",
        },
        {
          name: "_wallet",
          type: "address",
        },
        {
          name: "_caller",
          type: "address",
        },
        {
          name: "_token",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      constant: true,
      inputs: [],
      name: "AvailableTokens",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "caller",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "NewWeiRaised",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "rate",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "token",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "tokenSold",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "wallet",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "weiRaised",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const connectWallet = async () => {
    try {
      const _web3 = await getWeb3();
      setWeb3(_web3);
      console.log(_web3);

      const _accounts = web3 ? await web3.eth.getAccounts() : [];
      setAccounts(_accounts);
      console.log(_accounts);

      const instance = new _web3.eth.Contract(abi, contractAddress);

      setContract(instance);
      console.log(instance);
    } catch (e) {
      console.log(e);
    }
  };

  const sharedState: SharedState = {
    connectWallet,
    web3,
    accounts,
    contract,
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
