"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

type ExploreCardProps = {
  title: string;
  id: string;
  imgUrl: string;
  index: number;
  active: string;
  handleClick: any;
};

const ExploreCard = ({
  title,
  id,
  imgUrl,
  index,
  active,
  handleClick,
}: ExploreCardProps) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flexCenter min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        fill={true}
        alt={title}
        priority={true}
        unoptimized
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-18px text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
          {title}
        </h3>
      ) : (
        <div className="sm:absolute bottom-0 p-8 justify-start w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
            <Image
              src="/headset.svg"
              width={1000}
              height={1000}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
);

export default ExploreCard;
