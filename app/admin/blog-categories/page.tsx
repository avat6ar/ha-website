import { Table } from "@/components/Admin/BlogCategories/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const BlogCategories = () => {
  return (
    <>
      <PageTitle
        title="Blog Categories"
        array={[{ name: "admin", url: "/admin" }, "Blog Categories"]}
      />
      <Table />
    </>
  );
}

export default BlogCategories;