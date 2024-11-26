import type { Metadata } from "next";
import { SectionInvoice } from "@/components/Invoice/SectionInvoice";

export const metadata: Metadata = {
  title: "Invoice title",
  description: "Ha description",
};

const Invoice = () => {
  return (
    <>
      <SectionInvoice />
    </>
  );
};

export default Invoice;
