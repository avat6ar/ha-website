import { Table } from "@/components/Admin/Discounts/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Discounts = () => {
  return (
    <>
      <PageTitle
        title="Instructors"
        array={[{ name: "admin", url: "/admin" }, "Discounts"]}
      />
      <Table />
    </>
  );
};

export default Discounts;
