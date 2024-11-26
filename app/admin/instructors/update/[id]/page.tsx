import { UpdateInstructor } from "@/components/Admin/Instructors/UpdateInstructor";
import { PageTitle } from "@/components/Admin/PageTitle";

const Update =  () => {
  return (
    <>
      <PageTitle
        title="Update Course"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Courses", url: "/admin/courses" },
          "Update Course",
        ]}
      />
      <UpdateInstructor />
    </>
  );
};

export default Update;
