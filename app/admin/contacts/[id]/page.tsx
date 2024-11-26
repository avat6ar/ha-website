import { Details } from "@/components/Admin/Contacts/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const ContactDetails = () => {
  return (
    <>
      <PageTitle
        title="Contact Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Contacts", url: "/admin/contacts" },
          "Contact Details",
        ]}
      />
      <Details />
    </>
  );
};

export default ContactDetails;
