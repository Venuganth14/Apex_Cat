'use client';

export default function ContactVideo() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://videos.pexels.com/video-files/8865786/8865786-sd_640_360_25fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
