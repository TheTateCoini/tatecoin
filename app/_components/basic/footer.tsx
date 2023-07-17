import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socials = [
    "https://www.instagram.com/rift",
    "https://www.twitter.com/rift",
    "https://www.linkedin.com/in/rift",
    "https://www.facebook.com/rift",
  ];
  const menu = ["roadmap", "ICO", "presale"];
  const more = ["contact", "support"];
  return (
    <footer className="w-full bg-[#0e0e0e] text-white rounded-t-[60px] lg:px-16 px-8 lg:py-12 py-6 mt-28">
      <div className="w-full">
        <div className="w-full lg:flex-row flex flex-col items-start lg:py-16 py-8 border-b border-b-[#5b5b5b]">
          <div className="lg:w-[30%] lg:mr-16">
            <div className="lg:w-10/12">
              <h1 className="text-3xl mb-4">Tatecoin</h1>
              <div className="flex space-x-4 pb-6 mb-6 border-b border-b-[#5b5b5b]">
                {socials.map((s) => (
                  <SocialIcon
                    key={s}
                    url={s}
                    className="w-6 h-6"
                    style={{ width: 40, height: 40 }}
                    bgColor="#212121"
                    fgColor="#5b5b5b"
                  />
                ))}
              </div>
              <p className="opacity-60 leading-relaxed">
                Fast, Secure, and Borderless Transactions for a Decentralized
                World.
              </p>
            </div>
          </div>
          <div className="lg:w-[36%] flex items-start justify-between lg:mr-10 lg:mt-0 mt-8 text-lg">
            <div className="lg:w-1/2">
              {menu.map((m) => (
                <Link key={m} href={`/${m}`}>
                  <p className="capitalize mb-3 opacity-70">{m}</p>
                </Link>
              ))}
            </div>
            <div className="lg:w-1/2">
              {more.map((m) => (
                <Link key={m} href={`/${m}`}>
                  <p className="capitalize mb-3 opacity-70">{m}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <p className="opacity-90 mb-4 text-lg tracking-wider">CONTACT US</p>
            <div className="flex items-center justify-start space-x-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div className="">
                <p className="opacity-95">Email</p>
                <p className="opacity-60">contact@tatecoin.com</p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.60v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <div className="">
                <p className="opacity-95">Phone</p>
                <p className="opacity-60">+2348034062192</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
