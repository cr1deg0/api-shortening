import infoData from "./infoData";
import InfoCard from "./InfoCard";

const InfoContainer = () => {
  return(
    <section 
      aria-labelledby="info-section-title"
      className="bg-light-grey px-6 py-12 lg:px-40 lg:py-20 flex flex-col items-center"
    >
      <h2 
        id="info-section-title"
        className="py-3 text-xl3 lg:text-xl4 font-bold text-blue-very-dark"
      >
        Advanced Statistics
      </h2>
      <p 
        className="text-grey lg:text-md text-center lg:w-7/12"
      >
        Track how your links are performing across the web with
        our advanced statistics dashboard.
      </p>
      <div
        className="flex flex-col gap-20 lg:gap-8 bg-card-section-mobile lg:bg-card-section-laptop mt-20 lg:h-96 text-center lg:text-left lg:flex-row"
      >
        { 
          infoData.map((item, index) => (
            <InfoCard key={ index } id={ index } { ...item }/>
          ))
        }
      </div>
    </section>
  )
}

export default InfoContainer;