import { Table } from "@/components/Admin/Courses/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Courses = () => {
  return (
    <>
      <PageTitle
        title="Courses"
        array={[{ name: "admin", url: "/admin" }, "Courses"]}
      />
      <Table />
    </>
  );
};

export default Courses;
