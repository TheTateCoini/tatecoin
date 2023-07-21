import React from "react";
import HeroText from "../basic/hero-text";
import Questions from "../basic/questions";

export default function Support() {
  return (
    <div
      className="flex items-center flex-col w-full lg:px-16 pt-3 overflow-hidden text-white mt-20"
      id="faqs"
    >
      <HeroText
        title="FAQs"
        subtitle="Check our knowledge base of FAQs to get more information."
      />
      <Questions />
    </div>
  );
}
