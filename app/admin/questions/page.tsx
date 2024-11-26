import { PageTitle } from "@/components/Admin/PageTitle";
import { Table } from "@/components/Admin/Questions/Table";

const Questions = () => {
  return (
    <>
      <PageTitle
        title="Questions"
        array={[{ name: "admin", url: "/admin" }, "Questions"]}
      />
      <Table />
    </>
  );
};

export default Questions;
