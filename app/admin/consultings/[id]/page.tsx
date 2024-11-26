import { Details } from "@/components/Admin/Consulting/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const ConsultingDetails = () => {
  return (
    <>
      <PageTitle
        title="Consulting Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Contacts", url: "/admin/consulting" },
          "Consulting Details",
        ]}
      />
      <Details />
    </>
  );
};

export default ConsultingDetails;
