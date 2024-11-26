import { Details } from "@/components/Admin/Chapters/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const ChapterDetails = () => {
  return (
    <>
      <PageTitle
        title="Chapter Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Chapters", url: "/admin/chapters" },
          "Chapter Details",
        ]}
      />
      <Details />
    </>
  );
};

export default ChapterDetails;
