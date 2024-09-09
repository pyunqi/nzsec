import Contact from "@/components/Links";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links Page ",
  description: "This is Links Page for SEC",
  // other metadata
};

const ContactPage = () => {
  return (
      <Contact />
  );
};

export default ContactPage;
