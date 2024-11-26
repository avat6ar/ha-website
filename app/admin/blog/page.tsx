import { Table } from "@/components/Admin/Blog/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Blogs = () => {
  return (
    <>
      <PageTitle
        title="Blog"
        array={[{ name: "admin", url: "/admin" }, "Blog"]}
      />
      <Table />
    </>
  );
};

export default Blogs;
