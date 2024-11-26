import { UpdateBlog } from "@/components/Admin/Blog/UpdateBlog";
import { PageTitle } from "@/components/Admin/PageTitle";

const Update = () => {
  return (
    <>
      <PageTitle
        title="Update Blog"
        array={[
          { name: "admin", url: "/admin" },
          { name: "blog", url: "/admin/blog" },
          "Update Blog",
        ]}
      />
      <UpdateBlog />
    </>
  );
};

export default Update;
