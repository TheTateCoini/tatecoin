"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Defi() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:my-40 my-20 text-center flex flex-col items-center w-full"
      >
        <p className="lg:text-5xl text-3xl font-bold racking-wider uppercase leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-[#f5f5f5]">
          Borderless & Decentralized
        </p>
        <p className="mt-8 text-lg lg:text-2xl tracking-wide leading-relaxed lg:w-2/3 opacity-80">
          Tatecoin is a decentralized and borderless medium of exchange that
          revolutionizes the way we transact. With Tatecoin, you can experience
          fast, secure, and low-cost transactions, breaking down boundaries and
          enabling financial inclusivity for everyone. Embrace the power of
          Tatecoin as a store of value, explore peer-to-peer lending, and
          support decentralized applications (dApps) on blockchain platforms.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center text-center lg:mt-4 mb-12"
      >
        <div className="lg:w-2/3">
          <p className="uppercase lg:text-5xl text-3xl mb-8 font-semibold leading-snug tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#efb909] via-[#fad353] to-[#f5f5f5]">
            Built on BNB SmartChain (BSC)
          </p>
          <p className="text-lg lg:text-2xl tracking-wide leading-relaxed opacity-80">
            Tatecoin will be utilized within DeFi applications such as
            decentralized exchanges (DEXs), lending platforms, yield farming,
            and stablecoins. Tatecoin can enable activities like providing
            liquidity, earning yields, and participating in governance within
            the DeFi ecosystem.
          </p>
        </div>
        <div className="flex items-center justify-center mt-16">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden lg:h-[300px] h-52 w-52 lg:w-[300px]"
          >
            <Image
              src="/images/bsc.png"
              fill
              className="w-full h-full object-cover"
              alt="bsc"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
