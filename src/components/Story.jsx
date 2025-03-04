import { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle.jsx';
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners.jsx';
import Button from './Button.jsx';

const Story = () => {
  const frameRef = useRef('null');

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle 
            title="The st<b>o</b>ry of <br />a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img className="object-contain"
                  src="/img/entrance.webp" 
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  alt="" 
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex -w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Imagine a world split by the astral, 
              where chaos and endless possibilities reign. 
              Welcome to Allodium and its boundless worlds. 
              Discover its secrets and change your destiny, 
              immersing yourself in our unique world.
            </p>

            <Button containerClass="mt-5"
              id="realm-button" 
              title="discover prologue"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story;


