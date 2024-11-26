import { Table } from "@/components/Admin/BookOnline/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Book = () => {
  return (
    <>
      <PageTitle
        title="Book Course"
        array={[{ name: "admin", url: "/admin" }, "Book Course"]}
      />
      <Table />
    </>
  );
};

export default Book;
