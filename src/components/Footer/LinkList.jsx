import PropTypes from "prop-types";

const LinkList = ({children}) => {
  return (
    <ul role="menu">
      {children}
    </ul>
  )
}

LinkList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default LinkList;