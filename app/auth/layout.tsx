import { NavBarAuth } from "@/components/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 py-[20px]">
        <NavBarAuth />
      </header>
      <main className="overflow-hidden">{children}</main>
    </>
  );
};

export default layout;
