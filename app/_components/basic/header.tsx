import Link from "next/link";
import React from "react";

export default function Header() {
  const routes = [
    {
      title: "Defi",
      route: "/defi",
    },
    {
      title: "Gaming & NFTs",
      route: "/gaming-nfts",
    },
    {
      title: "Launchpad",
      route: "/launchpad",
    },
    {
      title: "FAQs",
      route: "/faqs",
    },
  ];
  return (
    <div className="w-full flex items-center justify-between px-6 lg:px-16 lg:py-10 py-6 z-50 text-white/80">
      <Link href="/">
        <div className="flex items-center justify-start space-x-3 cursor-pointer group">
          <img
            src="/images/tate.png"
            className="lg:w-11 lg:h-11 w-11 h-11 group-hover:scale-125 transition-transform duration-500 ease-in-out"
          />
          <p className="font-medium tracking-wider text-lg lg:text-2xl mt-1">
            Tate Coin.
          </p>
        </div>
      </Link>
      <div className="md:flex items-center justify-between space-x-12 hidden">
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
      <div className="w-fit  lg:hidden">
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
    </div>
  );
}
