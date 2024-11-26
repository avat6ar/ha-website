"use client";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const handleHeader = () => {
    window.scrollY >= 150 ? setSticky(true) : setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeader);

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`left-0 top-0 w-full z-10 h-auto bg-white xl:py-0 py-[20px]  ${
          sticky
            ? "!fixed z-[80] animate-fadeInDown shadow-[0_10px_15px_rgba(25,25,25,0.1)]"
            : ""
        } `}
      >
        <NavBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </header>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="overflow-hidden">{children}</main>
      
      <footer className="relative block bg-[#061E43] w-full">
        <Footer />
      </footer>
    </>
  );
};

export default layout;
