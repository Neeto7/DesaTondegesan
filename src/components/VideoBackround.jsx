"use client";
import { useRef, useEffect } from "react";

const VideoBackground = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoopFade = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        video.style.opacity = "1";
      }, 300); // durasi bisa kamu sesuaikan
    };

    video.addEventListener("ended", handleLoopFade);
    return () => video.removeEventListener("ended", handleLoopFade);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  );
};

export default VideoBackground;
