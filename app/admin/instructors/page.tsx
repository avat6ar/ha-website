import { Table } from "@/components/Admin/Instructors/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Instructors = () => {
  return (
    <>
      <PageTitle
        title="Instructors"
        array={[{ name: "admin", url: "/admin" }, "Instructors"]}
      />
      <Table />
    </>
  );
};

export default Instructors;
