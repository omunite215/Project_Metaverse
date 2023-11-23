"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <header>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          width={24}
          height={24}
          alt="search"
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          width={24}
          height={24}
          alt="menu"
          className="object-contain"
        />
      </div>
    </motion.nav>
  </header>
);

export default Navbar;
