"use client";


import ModalVideo from "react-modal-video";
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import('../ThreeScene'), {
  loading: () => <>Loading...</>,
  suspense: true,
  ssr: false, // 禁用服务器端渲染
});
const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-full overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-dark sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Newzealand S.E.C
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              Introduce Sciences?
                </p>
               
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
