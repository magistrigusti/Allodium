import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const AllodTilt = ({children, className = ''}) => {
  const [transformStyle, setTransformStyle] = useState('');

  const itemRef = useRef();

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  }

  return (
    <div className={className}
      style={{transform: transformStyle}}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const AllodCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video className="absolute left-0 top-0 size-full object-cover object-center"
        src={src}
        loop
        muted
        autoPlay
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-10 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 max-w-64 text-xs md:textbase">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>


          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe
            where a vibrant array of products converge into an interconnected
            overplay experience on your world.
          </p>
        </div>


        <AllodTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <AllodCard
            src="videos/feature-1.mp4"
            title={<>Allo<b>d</b>ium</>}
            description="A cross-platform metaame app, turning your activities across Web2 and Web3 games into a reward adventure."
            isCommingSoon
          />
        </AllodTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <AllodTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <AllodCard 
              src="videos/video_Allodium.mp4"
              title={<>Magi<b>s</b>tri</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </AllodTilt>

          <AllodTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <AllodCard 
              src="videos/Astral_batl.mp4"
              title={<>P<b>o</b>rtal</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communites."
            />
          </AllodTilt>

          <AllodTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <AllodCard 
              src="videos/AI.mp4"
              title={<>Ton<b>a</b>rion</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </AllodTilt>

          <AllodTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </AllodTilt>

          <AllodTilt className="bento-title_2">
            <video className="size-full object-cover object-center"
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
            />
          </AllodTilt>
        </div>
      </div>
    </section>
  )
}

export default Features;