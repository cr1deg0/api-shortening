import LinkItem from "./LinkItem";

const LinksContainer = ({ linkList }) => {
  return (
        <section 
          aria-label="shortened links"
          className="bg-light-grey px-6 py-6 lg:px-40"
        >
          <ul>
            { 
              linkList.map( (link, index) => (
                <LinkItem 
                  key={ index }
                  longUrl={link.longUrl } 
                  shortUrl={ link.shortUrl }
                />
              ))
            }
          </ul>
        </section>  
  )
}

export default LinksContainer;