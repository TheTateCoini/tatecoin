"use client";

import React, { useState } from "react";
import Button from "../basic/button";
import { motion } from "framer-motion";

export default function Subscribe() {
  const [email, setemail] = useState("");
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full rounded-[30px] lg:rounded-[40px] bg-lightgrey p-8 text-center lg:p-20 mt-32 flex flex-col items-center justify-between bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300"
    >
      <p className="lg:text-4xl text-2xl lg:w-[55%] text-center lg:leading-[45px] tracking-wide">
        Subscribe to our email newsletter for exciting updates
      </p>
      <p className="mt-5 opacity-70">
        Stay in the loop with the latest updates, exclusive offers, and exciting
        product launches by subscribing to our email newsletter.
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-between mt-10 lg:space-x-4 w-full lg:w-[45%]">
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email Address"
          className="h-16 lg:w-10/12 w-full rounded-full shadow-sm shadow-dark/10 px-5 lg:mb-0 mb-6"
        />
        <Button bg="black" labelColor="white" label="Subscribe" />
      </div>
    </motion.div>
  );
}
