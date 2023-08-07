"use client";

import React from "react";
import { Chrono } from "react-chrono";

export default function Roadmap() {
  const items = [
    {
      title: "2023 Q1",
      cardDetailedText: (
        <ul>
          <li>Token Launch</li>
          <li>DOGE trading pair with Bibipom</li>
          <li>Double Team Size</li>
          <li>Marketing Campaign Begins</li>
        </ul>
      ),
    },
    {
      title: "2023 Q2",
      cardDetailedText: (
        <ul>
          <li>TatecoinApp, Wallet, Games</li>
          <li>Bitmart, WhiteBit integration</li>
          <li>Expand team by 35%</li>
          <li>UK/Ireland Office</li>
          <li>New Partners</li>
        </ul>
      ),
    },
    {
      title: "2023 Q3",
      cardDetailedText: (
        <ul>
          <li>NFT Exchange Launch</li>
          <li>Video Game Launch</li>
          <li>Donations for Binance, Coinbase, Kraken</li>
          <li>Integrate with Binance, Mandela</li>
          <li>Community Meet-Up</li>
          <li>Expand team by 25%</li>
        </ul>
      ),
    },
    {
      title: "2023 Q4",
      cardDetailedText: (
        <ul>
          <li>Tatecoin Exchange Launch</li>
          <li>Charity Projects</li>
          <li>African Based Office</li>
          <li>Integrate with African Markets</li>
          <li>Tatecoin Scholarship</li>
        </ul>
      ),
    },
  ];
  return (
    <div className="mt-20">
      <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls />
    </div>
  );
}
