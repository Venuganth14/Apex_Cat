'use client';

export default function BackgroundVideo() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://videos.pexels.com/video-files/29770096/12793259_1920_1080_30fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
