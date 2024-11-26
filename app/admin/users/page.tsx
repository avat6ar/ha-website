import { PageTitle } from "@/components/Admin/PageTitle";
import { Table } from "@/components/Admin/User/Table";

const Users = () => {
  return (
    <>
      <PageTitle
        title="Users"
        array={[{ name: "admin", url: "/admin" }, "Users"]}
      />
      <Table />
    </>
  );
};

export default Users;
