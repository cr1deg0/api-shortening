import PropTypes from "prop-types";

const LinkItem = ({href, children}) => {
  return (
    <li
      role="menuitem"
      className="pb-2" 
    >
      <a 
        href={href}
        className="text-grey hover:text-cyan"
      >
        {children}
      </a>
    </li>
  )
}

LinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default LinkItem;