"use client";
import { AppProgressBar } from "next-nprogress-bar";
import "./globals.css";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Hind, Lexend_Deca } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { Loading } from "@/components/Loading";
import { GoogleOAuthProvider } from "@react-oauth/google";
import localFont from "next/font/local";

const hind = localFont({
  src: [
    {
      path: "../public/fonts/Hind-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Hind-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Hind-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Hind-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "../public/fonts/Hind-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
});

const lexend = localFont({
  src: [
    {
      path: "../public/fonts/LexendDeca-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LexendDeca-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LexendDeca-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/LexendDeca-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const warn = console.warn;
  console.warn = function (...args) {
    if (typeof args[0] === "string" && args[0].startsWith('Image with src "')) {
      return;
    }
    warn.apply(console, args);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 500;
    setIsVisible(scrollY > showThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setLoaded(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <html lang="en" className="">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`bg-white w-full relative font-body text-[16px] font-normal leading-[1.75] text-[#39557E] ${hind.variable} ${lexend.variable}`}
      >
        <div className="font-me"></div>
        <AppProgressBar
          height="4px"
          color="#1363DF"
          options={{ showSpinner: true }}
          shallowRouting
        />
        {!loaded && <Loading />}
        <GoogleOAuthProvider clientId="6691890056-hu7ffofosa1192oh9k6kc47mu95rtiir.apps.googleusercontent.com">
          <StoreProvider>{children}</StoreProvider>
        </GoogleOAuthProvider>
        <button
          onClick={scrollToTop}
          type="button"
          className={`fixed right-[50px] bottom-[30px] w-[40px] h-[40px] text-[18px] font-semibold rounded-[4px] z-50 text-white flex justify-center items-center bg-[#1363DF] transition-all duration-1000 after:absolute after:z-[-1] after:top-full after:left-[5%] after:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0)_80%)] after:w-[90%] after:h-[10px] after:opacity-0 ${
            isVisible
              ? "visible opacity-100 after:opacity-100"
              : "invisible opacity-0"
          }`}
        >
          <IoIosArrowUp />
        </button>
      </body>
    </html>
  );
}
