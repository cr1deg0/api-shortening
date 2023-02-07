import PropTypes from "prop-types";

const LinkItem = ({ role, href, addStyle, children}) => {
  return (
    <li
      className={`text-white text-lg hover:text-cyan
      lg:text-grey lg:text-md lg:font-medium lg:hover:text-blue-very-dark ${ addStyle }`}
    >
      <a 
        role={ role } 
        href={ href }
      >
        { children }
      </a>
    </li>
  )
}

LinkItem.propTypes = {
  role: PropTypes.string,
  href: PropTypes.string,
  addStyle: PropTypes.string,
  children: PropTypes.string,
}

export default LinkItem;