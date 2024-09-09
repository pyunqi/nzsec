"use client";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../../node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import FlyInSplashScreen from "@/components/Splash/FlyInSplashScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // 在视频播放完成或延时后隐藏开屏动画
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000); // 持续时间与视频长度一致

    return () => clearTimeout(timer);
  }, []);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className} ` }>
      {isSplashVisible && <FlyInSplashScreen />}
      {!isSplashVisible && <main>{children}</main>}
      {/* <body className={'border-4'}> */}
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
