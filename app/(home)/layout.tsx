"use client";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    window.scrollY >= 150 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`left-0 top-0 w-full z-10 h-auto ${
          isSticky
            ? "!fixed z-[80] bg-white animate-fadeInDown xl:py-0 py-[20px] shadow-[0_10px_15px_rgba(25,25,25,0.1)]"
            : "absolute xl:py-[15px] py-[20px]"
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

export default Layout;
