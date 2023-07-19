"use client";

import React, { useState } from "react";
import Button from "../basic/button";
import { motion } from "framer-motion";

export default function Contact() {
  const [email, setemail] = useState("");
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-black w-full rounded-[30px] lg:rounded-[40px] bg-lightgrey p-8 text-center lg:p-20 mt-32 flex flex-col items-center justify-between bg-gradient-to-bl from-gray-600 via-gray-400 to-gray-300"
    >
      <p className="lg:text-4xl text-2xl lg:w-[55%] text-center lg:leading-[45px] tracking-wide">
        We always love to hear from you
      </p>
      <p className="mt-5 opacity-70">
        Fill the form and leave your message, we will reply you in your mail.
      </p>
      <div className="my-10 w-full lg:w-[45%]">
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email Address"
          className="mt-6 h-16 w-full rounded-full shadow-sm shadow-dark/10 px-5 lg:mb-0 mb-6"
        />
        <textarea
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Your message"
          className="mt-6 h-44 w-full rounded-[40px] shadow-sm shadow-dark/10 p-5 lg:mb-0 mb-6"
        />
      </div>
      <Button bg="black" labelColor="white" label="Subscribe" />
    </motion.div>
  );
}
