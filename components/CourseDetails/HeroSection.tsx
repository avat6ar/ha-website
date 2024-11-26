import Image from "next/image";
import { BsClock } from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PiFileTextThin, PiUsers } from "react-icons/pi";

export const HeroSection = ({
  name,
  category,
  instructorName,
  instructorProfile,
  duration,
  joined,
  stars,
  seats,
}: {
  name: string;
  text: string;
  category: string;
  instructorName: string;
  duration: string;
  joined: number;
  stars: number;
  instructorProfile: string;
  seats: number;
}) => {
  const fullStars = Math.floor(stars);
  const decimalPart = stars % 1;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar className="text-[18px]" key={i} />);
  }

  if (decimalPart >= 0.25 && decimalPart <= 0.5) {
    starElements.push(<FaStarHalf className="text-[18px]" key="half" />);
  } else if (decimalPart > 0.5) {
    starElements.push(<FaStar className="text-[18px]" key="nextFull" />);
  }

  return (
    <section className="py-[82px] bg-[#041734] relative">
      <div className="container">
        <div className="flex">
          <div className="lg:w-[66.66666667%] w-full">
            <a
              href="#"
              className="inline-block text-[15px] font-medium text-white bg-[#04BC53] leading-[1] rounded-[50px] py-[6px] px-[16px] mb-[12px]"
            >
              {category}
            </a>
            <h3 className="text-[36px] text-white leading-[1.3] font-heading font-semibold">
              {name}
            </h3>
            <ul className="flex mt-[25px] gap-[10px_19px] items-center">
              <li className="flex text-[#B2BDCD] items-center gap-[10px]">
                <Image
                  src={instructorProfile}
                  width={44}
                  height={44}
                  alt="img"
                  className="rounded-full border-[2px] border-white w-[44px] h-[44px] object-cover"
                />
                <span className="text-[#B2BDCD]">{instructorName}</span>
              </li>
              <li className="flex items-center text-[#B2BDCD]">
                <PiFileTextThin className="text-[20px] mr-[7px] text-white" />
                {seats.toString().padStart(2, "0")}
              </li>
              <li className="flex items-center text-[#B2BDCD]">
                <BsClock className="text-[18px] mr-[7px] text-white" />
                {duration}
              </li>
              <li className="flex items-center text-[#B2BDCD]">
                <PiUsers className="text-[20px] mr-[7px] text-white" />
                {joined.toString().padStart(2, "0")}
              </li>
              <li className="text-[#F8BC24] tracking-[-1] leading-[1] flex items-center gap-[7px]">
                {starElements}
                <span className="text-[#B2BDCD] tracking-[0]">({stars})</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
