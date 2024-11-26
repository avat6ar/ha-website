"use client";
import { NavBarDashboard } from "@/components/NavBar";
import { Sidebar } from "@/components/SideBar";
import { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-[999] py-[15px] shadow-[0px_2px_20px] shadow-[rgba(1,41,112,0.1)] bg-white px-[20px]">
        <NavBarDashboard setSidebar={setSidebar} />
      </header>
      <aside
        className={`fixed top-[60px] w-[300px] z-[998] transition-all duration-300 p-[20px] overflow-y-auto shadow-[0px_0px_20px] shadow-[rgba(1,41,112,0.1)] bg-white h-[calc(100%-60px)] ${
          sidebar ? "left-0" : "left-[-300px]"
        }`}
      >
        <Sidebar />
      </aside>
      <main
        className={`overflow-hidden bg-[rgb(243_244_246)] min-h-[calc(100vh-60px)] py-[20px] md:px-[30px] px-[15px] mt-[60px] transition-all duration-300 ${
          sidebar ? "xl:ml-[300px]" : "ml-0"
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default layout;
