import { Details } from "@/components/Admin/Categories/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const CategoryDetails = () => {
  return (
    <>
      <PageTitle
        title="Category Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "categories", url: "/admin/categories" },
          "Category Details",
        ]}
      />
      <Details />
    </>
  );
};

export default CategoryDetails;
