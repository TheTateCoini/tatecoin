"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "../store";

export default function Header() {
  const [open, setopen] = useState(false);
  const context = useAppContext();

  const pathname = usePathname();
  const routes = [
    {
      title: "About",
      route: "#about",
    },
    {
      title: "Get Tatecoin",
      route: "/get-tatecoin",
    },
    {
      title: "FAQs",
      route: "#faqs",
    },
  ];
  return (
    <div className="w-full relative">
      <div className="w-full flex items-center justify-between px-6 lg:px-16 lg:py-10 py-6 z-50 text-white/80">
        <Link href="/">
          <div className="flex items-center justify-start space-x-3 cursor-pointer group">
            <img
              src="/images/tate.png"
              className="lg:w-11 lg:h-11 w-11 h-11 group-hover:scale-125 transition-transform duration-500 ease-in-out"
              alt="tatelogo"
            />
            <p className="font-medium tracking-wider text-lg lg:text-2xl mt-1">
              Tate Coin.
            </p>
          </div>
        </Link>
        {pathname === "/get-tatecoin" ? (
          <div
            className="cursor-pointer rounded-lg lg:w-fit w-1/3 lg:p-4 p-2 bg-gradient-to-bl from-purple-600 via-purple-400 to-purple-300"
            onClick={() => context?.connectWallet()}
          >
            <p className="font-semibold lg:tracking-wide lg:text-base text-xs overflow-clip">
              {context?.web3?.eth ? context?.accounts[0] : "Connect Wallet"}
            </p>
          </div>
        ) : (
          <>
            <div
              className={`${
                pathname === "/get-tatecoin" && "md:hidden"
              } md:flex items-center justify-between space-x-12 hidden`}
            >
              <div className="flex items-center justify-start space-x-6">
                {routes.map((r) => (
                  <Link key={r.title} href={r.route}>
                    <p className=" text-sm font-medium tracking-wider opacity-60">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`w-fit lg:hidden ${
                pathname === "/get-tatecoin" && "hidden"
              }`}
              onClick={() => setopen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      {open && (
        <div className="px-6 lg:hidden absolute rounded-[20px] py-3 bg-[#f5f5f5] right-6">
          {routes.map((r) => (
            <Link key={r.title} href={r.route} onClick={() => setopen(false)}>
              <p className="text-dark text-sm font-medium tracking-wider opacity-80 mb-2 p-1">
                {r.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
