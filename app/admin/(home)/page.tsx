import { PageTitle } from "@/components/Admin/PageTitle";
import { Number } from "@/components/Admin/Home/Number";
import { IndexDetails } from "@/components/Admin/Home/IndexDetails";

const Admin = () => {
  return (
    <section className="mb-[15px]">
      <PageTitle
        title="Dashboard"
        array={[{ name: "admin", url: "/admin" }, "Dashboard"]}
      />
      <IndexDetails />
      <Number />
    </section>
  );
};

export default Admin;
