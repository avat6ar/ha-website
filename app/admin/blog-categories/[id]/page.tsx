import { Details } from "@/components/Admin/BlogCategories/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const BlogCategoryDetails = () => {
  return (
    <>
      <PageTitle
        title="Category Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "blog", url: "/admin/blog" },
          "Category Details",
        ]}
      />
      <Details />
    </>
  );
};

export default BlogCategoryDetails;
