import { PageTitle } from "@/components/Admin/PageTitle";
import { Table } from "@/components/Admin/File/Table";

const File = () => {
  return (
    <>
      <PageTitle
        title="File"
        array={[{ name: "admin", url: "/admin" }, "File"]}
      />
      <Table />
    </>
  );
};

export default File;
