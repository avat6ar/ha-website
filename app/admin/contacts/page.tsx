import { Table } from "@/components/Admin/Contacts/Table";
import { PageTitle } from "@/components/Admin/PageTitle";

const Contacts = () => {
  return (
    <>
      <PageTitle
        title="Contacts"
        array={[{ name: "admin", url: "/admin" }, "Contacts"]}
      />
      <Table />
    </>
  );
};

export default Contacts;
