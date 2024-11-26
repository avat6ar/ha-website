import { Table } from "@/components/Admin/Lessons/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Lessons = () => {
  return (
    <>
      <PageTitle
        title="Lessons"
        array={[{ name: "admin", url: "/admin" }, "Lessons"]}
      />
      <Table />
    </>
  );
};

export default Lessons;
