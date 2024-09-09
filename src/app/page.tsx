import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import React, { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: "NewZealand Teach,Science,Culture",
  description: "This is Home for Students",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
    </>
  );
}
