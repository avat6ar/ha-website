import { Table } from "@/components/Admin/Chapters/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Chapters = () => {
  return (
    <>
      <PageTitle
        title="Chapters"
        array={[{ name: "admin", url: "/admin" }, "Chapters"]}
      />
      <Table />
    </>
  );
};

export default Chapters;
