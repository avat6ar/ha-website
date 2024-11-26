import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

export const Review = ({
  name,
  rate,
  profile,
  text,
  date,
}: {
  name: string;
  rate: number | string;
  profile: string;
  text: string;
  date: string;
}) => {
  const stars = Number(rate);

  const fullStars = Math.floor(stars);
  const decimalPart = stars % 1;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <FaStar className="text-[18px] text-[#F8BC24]" key={i} />
    );
  }
  
  return (
    <li className="flex gap-[18px] md:mb-[20px] m-0 last:mb-0 md:flex-row flex-col">
      <div className="flex-[0_0_auto]">
        <Image
          src={profile}
          alt="img"
          width={80}
          height={80}
          className="max-w-[80px] rounded-full"
        />
      </div>
      <div className="grow">
        <div className="text-[15px] leading-[1] mb-[8px] flex gap-[3px]">
          {starElements}
        </div>
        <h4 className="text-[18px] mb-[10px] font-heading text-[#082A5E] font-medium leading-[1.2]">
          {name}{" "}
          <span className="text-[14px] font-normal text-[#8D9DB5] ml-[5px]">
            {date}
          </span>
        </h4>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          {text}
        </p>
      </div>
    </li>
  );
};
