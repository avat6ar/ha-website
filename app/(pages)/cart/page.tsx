import { Carts } from "@/components/Cart/Carts";
import { HeroSection } from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart title",
  description: "Ha description",
};

const Cart = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "home",
            url: "/",
          },
          "Cart",
        ]}
        title="Cart Shopping"
      />
      <Carts />
    </>
  );
};

export default Cart;
