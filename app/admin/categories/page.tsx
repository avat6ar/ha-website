import { Table } from "@/components/Admin/Categories/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Categories = () => {
  return (
    <>
      <PageTitle
        title="Categories"
        array={[{ name: "admin", url: "/admin" }, "Categories"]}
      />
      <Table />
    </>
  );
}

export default Categories