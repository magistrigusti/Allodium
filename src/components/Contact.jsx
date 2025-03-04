

const ImageClipBox = () => (

)

const Contact = () => {
  return (
    <div className="my-20 min-h-96 w-screen px-10"
      id="contact"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top- hidden h-full w-72 
          overflow-hidden sm:block lg:left-20 lg:w-96"
        >
          <div className="contact-clip-path-1" >
            <img src="allodium/ship.jpg" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact;