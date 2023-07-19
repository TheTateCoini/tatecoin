import React from "react";
import Question from "./question";

function Questions() {
  const questions = [
    {
      question: "What is Tatecoin?",
      answer:
        "Tatecoin is a decentralized and borderless medium of exchange that enables fast, secure, and low-cost transactions. It is built on the Binance Smart Chain (BSC) and designed to revolutionize the way we transact and engage with the DeFi ecosystem, gaming platforms, NFT marketplaces, and more.",
    },
    {
      question: "How can I use Tatecoin within DeFi applications?",
      answer:
        "Tatecoin can be utilized within various DeFi applications such as decentralized exchanges (DEXs), lending platforms, yield farming, and stablecoins. You can provide liquidity, earn yields, and actively participate in governance within the vibrant DeFi ecosystem using Tatecoin.",
    },
    {
      question: "What opportunities does Tatecoin offer in gaming and NFTs?",
      answer:
        "Tatecoin's presence on BSC opens up exciting opportunities in gaming platforms and NFT marketplaces. You can use Tatecoin for in-game purchases, trade virtual assets, and participate in NFT auctions or sales, fostering an active and vibrant gaming and NFT community.",
    },
    {
      question: "How can I participate in token sales and secure allocations?",
      answer:
        "Tatecoin provides a platform for launching new cryptocurrency projects, including itself. Investors can use Tatecoin to participate in token sales, secure allocations, and access exclusive benefits associated with Tatecoin's launch and ecosystem.",
    },
    {
      question: "Does Tatecoin support cross-chain interoperability?",
      answer:
        "Yes, Tatecoin's presence on BSC facilitates interoperability with other blockchain networks. You can seamlessly transfer Tatecoin's assets between different blockchains, harnessing the advantages of cross-chain transactions and expanding Tatecoin's reach.",
    },
    {
      question: "How can I actively engage in the governance of Tatecoin?",
      answer:
        "As a Tatecoin holder, you can actively engage in the governance of the project. By holding Tatecoin, you have the opportunity to participate in voting on proposals, shaping project development, and influencing the direction of Tatecoin's ecosystem.",
    },
    {
      question: "Is Tatecoin secure and reliable?",
      answer:
        "Tatecoin leverages the robustness and security of blockchain technology to ensure fast, secure, and reliable transactions. With built-in features and continuous community support, Tatecoin is designed to provide a safe and efficient medium of exchange for users worldwide.",
    },
    {
      question: "How can I get started with Tatecoin?",
      answer:
        "Getting started with Tatecoin is easy! Simply create an account, purchase Tatecoin from supported exchanges, and start exploring the various use cases within the ecosystem. Join the vibrant Tatecoin community and be part of the future of finance.",
    },
  ];
  return (
    <div className="lg:w-3/4 lg:mt-16 flex flex-col items-center space-y-5 mt-8">
      {questions.map((q, i) => (
        <Question key={i} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
}

export default Questions;
