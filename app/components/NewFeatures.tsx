import Image from "next/image";

type NewFeaturesProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
      <Image
        src={imgUrl}
        width={1000}
        height={1000}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      &nbsp; Title {title}&nbsp;
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      &nbsp;
      {subtitle}&nbsp;
    </p>
  </div>
);

export default NewFeatures;
