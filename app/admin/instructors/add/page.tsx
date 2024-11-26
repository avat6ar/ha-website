import { AddInstructor } from "@/components/Admin/Instructors/AddInstructor";
import { PageTitle } from "@/components/Admin/PageTitle";

const Add = () => {
  return (
    <>
      <PageTitle
        title="Add Instructor"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Instructors", url: "/admin/instructors" },
          "Add Instructor",
        ]}
      />
      <AddInstructor />
    </>
  );
};

export default Add;
