import { Table } from "@/components/Admin/ReviewsCourse/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Reviews = () => {
  return (
    <>
      <PageTitle
        title="Reviews Course"
        array={[{ name: "admin", url: "/admin" }, "Reviews"]}
      />
      <Table />
    </>
  );
};

export default Reviews;
