import { Details } from "@/components/Admin/BookOnline/Details";
import { PageTitle } from "@/components/Admin/PageTitle";

const BookDetails = () => {
  return (
    <>
      <PageTitle
        title="Contact Details"
        array={[
          { name: "admin", url: "/admin" },
          { name: "Book Course", url: "/admin/book-online" },
          "Book Details",
        ]}
      />
      <Details />
    </>
  );
};

export default BookDetails;
