import { UpdateCourse } from "@/components/Admin/Courses/UpdateCourse";
import { PageTitle } from "@/components/Admin/PageTitle";

const Update = () => {
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
      <UpdateCourse />
    </>
  );
};

export default Update;
