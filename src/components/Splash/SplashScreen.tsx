// app/components/SplashScreen.tsx
"use client";

import React, { useEffect, useState } from "react";
import  "./SplashScreen.moudle.css";
import clsx from "clsx";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 1000); // 配合CSS的过渡时间
    }, 1000); // 3秒后开始淡出

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={clsx('splashScreen', {
        ['fadeOut']: fadeOut,
      })}
    >
      <img src="/images/logo/logo-landscape_new1.svg" alt="Logo" className={'logo'} />
    </div>
  );
};

export default SplashScreen;
