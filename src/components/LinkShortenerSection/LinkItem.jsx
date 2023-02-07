import { useState } from "react";
import PropTypes from "prop-types";

const LinkItem = ({ longUrl, shortUrl }) => {

  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  }
  return (
    <li className="flex flex-col lg:py-4 pt-4 pb-2 mb-3 bg-white rounded-md text-sm font-medium
    lg:flex-row lg:justify-between lg:items-center">
      <span
        className="border border-0 border-b-2 border-light-grey px-4 pb-2
        lg:border-b-0 lg:pb-0 lg:px-6"
        data-testid="longUrl"
      >
        { longUrl }
      </span>
      <div 
        className="px-4 py-4 gap-4 flex flex-col
        lg:px-6 lg:flex-row lg:items-center lg:gap-2" 
      >
        <span 
          className="pr-6 text-cyan"
          data-testid="shortUrl"
          >
            { shortUrl }
          </span>
        <button 
          className="bg-cyan py-2 text-white rounded-md hover:bg-light-cyan hover:text-violet-very-dark
          hover:font-bold lg:w-24"
          style={{backgroundColor: isCopied ? '#383051' : 'hsl(180, 66%, 49%)'}}
          onClick={onClick}
        >
          { !isCopied ? 'Copy' : 'Copied!' }
        </button>
      </div>
    </li>
  )
}

LinkItem.propTypes = {
  longUrl: PropTypes.string,
  shortUrl: PropTypes.string
};

export default LinkItem;