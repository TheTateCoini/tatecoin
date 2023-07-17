import Image from "next/image";
import React from "react";
import BasicCard from "../basic/basic-card";

export default function Hero() {
  const spts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#f5f5f5"
          className="group-hover:scale-125 transition-transform ease-out duration-500 w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      label: "Fast",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#f5f5f5"
          className="group-hover:scale-125 transition-transform ease-out duration-500 w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      label: "Secure",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#f5f5f5"
          className="group-hover:scale-125 transition-transform ease-out duration-500 w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Low Cost",
    },
  ];
  return (
    <div className="w-full lg:h-[80vh]">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between lg:text-left text-center">
        <div className="lg:w-1/2">
          <p className="tracking-wide leading-snug mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-[#f5f5f5]">
            Financial Inclusivity To The Unbanked Population
          </p>
          <p className="lg:text-2xl text-lg tracking-wide leading-normal lg:mt-0 mt-12">
            Tatecoin is enabling fast, secure and low-cost transactions
            boundaries for cross-border payments and remittances.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center lg:mt-0 mt-28">
          <div className="lg:w-[450px] lg:h-[375px] w-56 h-48 relative">
            <Image
              src="/images/blocks.png"
              className="relative w-full h-full object-cover"
              fill
              alt="blocks"
            />
          </div>
        </div>
      </div>
      <div className="flex-col flex lg:flex w-full items-center justify-center lg:space-y-0 space-y-8 lg:space-x-16 mt-36">
        {spts.map((sp, i) => (
          <BasicCard icon={sp.icon} label={sp.label} key={sp.label + i} />
        ))}
      </div>
    </div>
  );
}
