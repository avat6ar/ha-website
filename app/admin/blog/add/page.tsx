import { AddBlog } from "@/components/Admin/Blog/AddBlog";
import { PageTitle } from "@/components/Admin/PageTitle";

const Add = () => {
  return (
    <>
      <PageTitle
        title="Add Blog"
        array={[
          { name: "admin", url: "/admin" },
          { name: "blog", url: "/admin/blog" },
          "Add Blog",
        ]}
      />
      <AddBlog />
    </>
  );
};

export default Add;
