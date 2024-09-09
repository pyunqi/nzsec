import AboutAbout from "@/components/About/About";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PageS",
  description: "This is About Page for SEC",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutAbout />
    </>
  );
};

export default AboutPage;
