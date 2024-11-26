"use client";
import { CartCard } from "./CartCard";
import { Summary } from "./Summary";
import { getCart } from "@/api/auth/profile";

export const Carts = () => {
  const { data: cart, isLoading, mutate } = getCart();

  const handleData = () => {
    mutate();
  };

  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8">
            <ul className="w-full">
              {isLoading && (
                <li className="flex py-[20px] border-b gap-[25px] items-center last:border-0 md:flex-row flex-col animate-pulse">
                  <div className="w-[150px] h-[123px] rounded bg-slate-200"></div>
                  <div className="w-1/5 h-4 rounded bg-slate-200"></div>
                  <div className="w-1/5 h-4 rounded bg-slate-200"></div>
                  <div className="w-1/6 h-8 rounded bg-slate-200"></div>
                  <ul className="flex gap-[8px_22px] items-center flex-wrap my-[16px]">
                    <li className="bg-slate-200 h-2 w-1/6 rounded"></li>
                    <li className="bg-slate-200 h-2 w-1/6 rounded"></li>
                    <li className="bg-slate-200 h-2 w-1/6 rounded"></li>
                  </ul>
                </li>
              )}
              {cart?.my_courses &&
                cart?.my_courses.length > 0 &&
                cart?.my_courses.map((item, index) => (
                  <CartCard key={index} cart={item} handleData={handleData} />
                ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            {isLoading && (
              <div className="animate-pulse">
                <div className="w-full h-6 rounded bg-slate-200"></div>
                <ul className="flex flex-col gap-[6px]">
                  <li className="flex w-full justify-between mt-2">
                    <span className="bg-slate-200 w-1/3 h-5"></span>
                    <span className="bg-slate-200 w-1/3 h-5"></span>
                  </li>
                  <li className="flex w-full justify-between">
                    <span className="bg-slate-200 w-1/3 h-6"></span>
                    <span className="bg-slate-200 w-1/3 h-6"></span>
                  </li>
                </ul>
                <div className="w-full h-8 rounded bg-slate-200 mt-4"></div>
              </div>
            )}
            {cart?.my_courses && cart?.my_courses.length > 0 && (
              <Summary total_price={cart?.total_price} />
            )}
          </div>
          {!isLoading && cart?.my_courses && cart?.my_courses.length === 0 && (
            <div className="lg:col-span-12 text-center text-xl font-bold">
              Your cart is empty.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
