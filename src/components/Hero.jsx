import { useState, useRef } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        id="video-frame"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflowhidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all"
              onClick={handleMiniVdClick}
            >
              <video className="size-64 origin-center scale-150 object-cover object-center"
                id="current-video"
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                onLoadedData={handleVideoLoaded}
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
