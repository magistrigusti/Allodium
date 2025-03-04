import Button from './Button.jsx';

const ImageClipBox = ({src, clipClass}) => (
  <div className={clipClass} >
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-60 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path-1"
            src="allodium/ship.jpg"
          />

          <ImageClipBox clipClass="contact-clip-path-2 lg:translate-y-1 translate-y-60" 
            src="allodium/Allod_1.jpg"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2
          md:left-auto md:right-10 lg:top-20 lg:w-80"
        >
          <ImageClipBox clipClass="absolute md:scale-125"
            src="allodium/card-elf-1.jpg"
          />

          <ImageClipBox clipClass="sword-man-clip-path md:sale-125" 
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[30px] uppercase">
            Join Allodium
          </p>

          <p className="special-font mt-10 w-full font-zentry
            text-5xl leading-[0.9] md:text-[6rem]
          ">
            "Let's b<b>u</b>ild the <br />
            new are of <br/>
            g<b>a</b>ming t<b>o</b>gether"
          </p>

          <Button containerClass="mt-10 cursor-pointer"
            title="contact us"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact;