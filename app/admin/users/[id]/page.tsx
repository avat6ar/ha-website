import { PageTitle } from "@/components/Admin/PageTitle";
import { Details } from "@/components/Admin/User/Details";

const UserDetails = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <PageTitle
        title="User details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "users", url: "/admin/users" },
          "User details",
        ]}
      />
      <Details id={params.id} />
    </>
  );
};

export default UserDetails;
