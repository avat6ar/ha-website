"use client";
import { getInvoice } from "@/api/invoice";
import Link from "next/link";
import { IoIosPrint } from "react-icons/io";
import { Loading } from "../Loading";
import { Error } from "../Error";

export const SectionInvoice = () => {
  const { data, isLoading,isError } = getInvoice();

  const options = { timeZone: "Africa/Cairo" };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  return (
    <>
      {data && (
        <section className="py-[70px] bg-[#f3f4fd] min-h-screen">
          <div className="container">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => window.print()}
                className="py-[15px] px-[24px] text-[15px] text-white font-semibold border border-[#D0DAE9] bg-[#1363DF] tracking-[0.5px] leading-[1] flex items-center gap-[10px] text-center rounded-[4px] font-heading hover:text-white hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
              >
                Print
                <IoIosPrint className="text-[20px]" />
              </button>
            </div>
            <div className="bg-white mt-[35px] rounded-[8px]">
              <div className="md:p-10 p-5">
                <div className="flex justify-between mb-[35px] pb-[15px] border-b flex-wrap gap-[8px]">
                  <h2 className="font-heading text-[36px] font-semibold text-[#082A5E] leading-[1.19]">
                    <Link
                      href="/"
                      className="hover:text-[#1363DF] text-inherit transition-all duration-300 ease-out"
                    >
                      Ha Courses
                    </Link>
                  </h2>
                  <div className="flex gap-[25px] items-center">
                    <h3 className="text-[26px] text-[#082A5E] font-heading font-medium">
                      Invoice #
                    </h3>
                    <h3 className="text-[21px] text-[#1363DF] font-body font-medium">
                      {data.invoice_number}
                    </h3>
                  </div>
                </div>
                <div className="block mb-[35px]">
                  <div className="text-[15px] leading-[1.2] text-[#39557E] font-normal font-body mb-[8px]">
                    Invoice date:
                  </div>
                  <div className="text-[18px] leading-[1.2] tracking-[2px] text-[#39557E] font-semibold font-body">
                    {currentDate}
                  </div>
                </div>
                <table className="w-full text-center">
                  <thead className="bg-[#F4F7FB]">
                    <tr>
                      <th className="text-[#1363DF] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                        Description
                      </th>
                      <th className="text-[#1363DF] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                        Price
                      </th>
                      <th className="text-[#1363DF] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.courses &&
                      data.courses.map((course, index) => (
                        <tr className="border-b" key={index}>
                          <td className="text-[#39557E] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                            {course.name}
                          </td>
                          <td className="text-[#39557E] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                            ${course.price}
                          </td>
                          <td className="text-[#39557E] leading-[1] text-[15px] font-semibold font-body py-[25px]">
                            ${course.price}
                          </td>
                        </tr>
                      ))}
                    <tr className="w-full">
                      <td
                        colSpan={2}
                        className="text-[#39557E] leading-[1] text-[15px] font-bold font-body py-[25px]"
                      >
                        Total Price
                      </td>
                      <td className="text-[#39557E] leading-[1] text-[15px] font-bold font-body py-[25px]">
                        ${data.total_price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {isLoading && <Loading />}
      {isError && <Error />}
    </>
  );
};
