import { Table } from "@/components/Admin/Consulting/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Consulting = () => {
  return (
    <>
      <PageTitle
        title="Consulting"
        array={[{ name: "admin", url: "/admin" }, "Consulting"]}
      />
      <Table />
    </>
  );
};

export default Consulting;
