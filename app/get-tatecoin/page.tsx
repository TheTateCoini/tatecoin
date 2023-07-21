"use client";

import React, { useEffect, useState } from "react";
import Button from "../_components/basic/button";
import { ApiResponse } from "@/helpers/types";
import { useAppContext } from "../_components/store";

export default function GetTatecoin() {
  const [bnb, setBnb] = useState(0);
  const context = useAppContext();

  const bnbValue = 20000;

  const contractAddress = "0xf459A576FE105e3cB5Ea9A0CdA101a2632E70440";

  const getBNBValue = async () => {
    const response = await fetch("/api/get-bnb");
    const data: ApiResponse = await response.json();

    setBnb(data?.data?.BNB[0]?.quote.USD.price);
  };

  const [amount, setAmount] = useState<{
    bnb: string | number;
    tate: string | number;
  }>({
    bnb: "",
    tate: "",
  });

  const buyToken = async () => {
    console.log(amount);
    await context?.web3?.eth
      .sendTransaction({
        to: contractAddress,
        from: context?.accounts[0],
        value: context?.web3?.utils.toWei(amount.bnb.toString(), "ether"),
      })
      .on("transactionHash", function (hash: string) {
        if (
          window.confirm(
            "Transaction successful. Click 'OK' to view on BscScan"
          )
        ) {
          window.location.href = `https://bscscan.com/tx/${hash}`;
        }
      })
      .on("error", console.error);
  };

  useEffect(() => {
    getBNBValue();
  }, []);

  return (
    <div className="w-full flex-col items-center flex p-4">
      <p className="font-semibold lg:text-4xl text-3xl tracking-wide lg:mt-10 text-center">
        Easily Convert Your BNB tokens to Tate Coin
      </p>
      <p className="mt-2 tracking-wider text-[#efb909]">
        *1 BNB = ${bnb?.toFixed(2)}
      </p>
      <p className="mt-2 tracking-wider text-purple-300">
        *1 Tatecoin = 20,000 BNB
      </p>
      <div className="flex flex-col justify-center w-full lg:w-1/3 lg:p-10 p-6 rounded-[40px] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 mt-8 lg:mt-16">
        <p className="text-lg font-medium tracking-wide mb-3">That means:</p>
        <div className="w-full flex lg:space-x-4 space-x-2 items-center mb-4">
          <input
            className="w-3/4 h-12 px-4 rounded-lg text-dark"
            type="number"
            value={amount.bnb}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                let amount = e.target.value;
                setAmount({
                  bnb: parseInt(amount),
                  tate: parseInt(amount) * bnbValue,
                });
              }
            }}
          />
          <p className="font-semibold tracking-wider">BNB</p>
        </div>
        <p className="text-lg font-medium tracking-wide mb-3">Gives you:</p>
        <div className="w-full flex lg:space-x-4 space-x-2 items-center mb-6">
          <input
            className="w-3/4 h-12 px-4 rounded-lg text-dark"
            type="number"
            value={amount.tate}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                let amount = e.target.value;
                setAmount({
                  bnb: parseInt(amount) / bnbValue,
                  tate: parseInt(amount),
                });
              }
            }}
          />
          <p className="font-semibold tracking-wider">TateCoin</p>
        </div>
        <Button
          bg="black"
          label={context?.web3 ? "Get Tate Coin" : "Connect Wallet"}
          onPress={() =>
            context?.web3 ? buyToken() : context?.connectWallet()
          }
          labelColor="white"
        />
      </div>
      <div className="flex flex-col justify-center lg:w-1/3 w-full lg:p-10 p-6 rounded-[40px] bg-gradient-to-r from-gray-600 to-gray-500 mt-8 lg:mt-16">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="crimson"
            className="w-6 h-6 mb-4 opacity-60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
            />
          </svg>
          <p>
            You can also buy Tatecoin by sending BNB directly to this address:
          </p>
          <p className="break-words">{contractAddress}</p>
        </span>
      </div>
    </div>
  );
}
