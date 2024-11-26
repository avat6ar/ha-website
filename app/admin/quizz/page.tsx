import { PageTitle } from "@/components/Admin/PageTitle";
import { Table } from "@/components/Admin/Quizz/Table";

const Quizz = () => {
  return (
    <>
      <PageTitle
        title="Quizz"
        array={[{ name: "admin", url: "/admin" }, "Quizz"]}
      />
      <Table />
    </>
  );
};

export default Quizz;
