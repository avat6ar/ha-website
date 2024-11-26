import Image from "next/image";
import Link from "next/link";

export const RelatedCoursesCard = ({
  cover,
  name,
  new_price,
  old_price,
  link,
}: {
  cover: string;
  name: string;
  new_price: number;
  old_price: number;
  link: string;
}) => {
  return (
    <li className="flex items-center justify-start gap-[14px] mb-[20px] last:mb-0">
      <div className="block">
        <a href="#">
          <Image
            src={cover}
            width={80}
            height={80}
            alt="img"
            className="w-[80px] h-[80px] object-cover rounded-[4px]"
          />
        </a>
      </div>
      <div className="block">
        <h4 className="font-heading font-medium text-[15px] mb-[9px] leading-[1.53] text-[#082A5E]">
          <Link href={`/courses/${link}`}>{name}</Link>
        </h4>
        <span className="text-[18px] font-heading font-medium text-[#1363DF] leading-[1]">
          {old_price == new_price ? (
            <>${old_price}</>
          ) : (
            <>
              <del className="text-[16px] text-[#8D9DB5] mr-[4px]">
                ${old_price.toLocaleString()}
              </del>
              ${new_price.toLocaleString()}
            </>
          )}
        </span>
      </div>
    </li>
  );
};
