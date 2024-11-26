import { Details } from "@/components/Admin/Instructors/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const InstructorDetails = () => {
  return (
    <>
      <PageTitle
        title="Instructor Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Instructors", url: "/admin/instructors" },
          "instructor details",
        ]}
      />
      <Details />
    </>
  );
};

export default InstructorDetails;
