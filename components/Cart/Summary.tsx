"use client";
import { checkout } from "@/api/auth/profile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiVisaFill } from "react-icons/ri";
import { SiPaypal } from "react-icons/si";

export const Summary = ({ total_price }: { total_price?: number }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("payment_type", data.payment_type);

    try {
      const data = await checkout(formData);      
      window.open(data.session_url, "_blank");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="block">
      <h3 className="text-[#082A5E] font-heading text-[22px] mb-[5px] font-semibold">
        Order Summary
      </h3>
      <div className="text-[22px] font-semibold font-body text-[#39557E] flex w-full justify-between border-t pt-[8px] mb-[12px]">
        <span>Order Total :</span>
        <span>${total_price}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[8px]">
          <div className="col-span-1">
            <input
              type="radio"
              {...register("payment_type")}
              id="visa"
              value="visa"
              className="hidden peer/payment-1"
              defaultChecked
            />
            <label
              htmlFor="visa"
              className="py-2 px-5 flex gap-[4px] justify-center text-lg bg-[#003087] font-medium text-white capitalize tracking-[0.5px] text-center rounded-[4px] font-body bg-opacity-50 peer-checked/payment-1:bg-opacity-100 cursor-pointer"
            >
              Visa <RiVisaFill className="text-2xl" />
            </label>
          </div>

          <div className="col-span-1">
            <input
              type="radio"
              {...register("payment_type")}
              id="paypal"
              value="paypal"
              className="hidden peer/payment-2"
            />
            <label
              htmlFor="paypal"
              className="py-2 px-5 flex gap-[4px] justify-center text-lg bg-[#003087] font-medium text-white capitalize tracking-[0.5px] text-center rounded-[4px] font-body bg-opacity-50 peer-checked/payment-2:bg-opacity-100 cursor-pointer"
            >
              PayPal <SiPaypal className="text-2xl" />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="py-[16px] px-[21px] text-white font-medium bg-[#082A5E] capitalize flex items-center justify-center gap-[8px] font-body w-full mt-[12px] text-lg"
          disabled={loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              Checkout <MdOutlineShoppingCartCheckout className="text-2xl" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
