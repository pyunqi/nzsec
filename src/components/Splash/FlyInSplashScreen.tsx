// src/components/SplashScreen.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 使用 next/navigation 而不是 next/router
import styles from './FlyInSplashScreen.module.css';

const FlyInSplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleVideoEnd = () => {
      router.push('/home'); // 替换为你的主页面路径
    };

    const videoElement = document.getElementById('splash-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [router]);

  return (
    <div className={styles.splashScreen}>
      <video id="splash-video" autoPlay muted playsInline className={styles.video}>
        <source src="/images/splash/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FlyInSplashScreen;
