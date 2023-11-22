"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flexCenter"
      >
        <Image
          src="/get-started.png"
          width={1000}
          height={1000}
          alt="get-started"
          priority={true}
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get Started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
