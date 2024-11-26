import { AddCourse } from "@/components/Admin/Courses/AddCourse";
import { PageTitle } from "@/components/Admin/PageTitle";

const Add = () => {
  return (
    <>
      <PageTitle
        title="Add Course"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Courses", url: "/admin/courses" },
          "Add Course",
        ]}
      />
      <AddCourse />
    </>
  );
};

export default Add;
