import RoundLinkBtn from "./RoundLinkBtn";

const Hero = () => {
  return(
    <section 
      aria-labelledby="hero-title" 
      className="flex flex-col-reverse pl-6 mb-12 lg:py-4 lg:flex-row lg:pl-40 lg:px-0"
    >
      <div className="flex flex-col  items-center text-center pt-8 pr-6 lg:w-1/2 lg:items-start lg:pt-18 lg:text-left">
          <h1 id="hero-title" className="font-bold text-xl4 text-blue-very-dark lg:text-xl7">More than just shorter links</h1>
          <p className="text-grey text-md font-normal pt-2 mb-6 lg:mb-12 lg:w-4/5 lg:text-xl">Build your brand's recognition and get detailed
            insights on how your links are performing.</p>
          <RoundLinkBtn href='/' addStyle={'w-48 py-4 lg:mb-12'}>Get Started</RoundLinkBtn>
      </div>
      <div aria-hidden='true' className="content-none h-80 bg-cover  bg-hero-img bg-no-repeat lg:w-1/2 lg:h-auto">
      </div>
    </section>
  )
}

export default Hero;