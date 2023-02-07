import ListTitle from "./ListTitle";
import LinkList from "./LinkList";
import LinkItem from "./LinkItem";

import PropTypes from "prop-types";

const ListWrapper = ({ title, list }) => {
  return (
    <div>
      <ListTitle>{ title }</ListTitle>
      <LinkList>
        {
          list.map((item, index) => (
            <LinkItem key={index} href={item.href}>{item.text}</LinkItem>
          ))
        }
      </LinkList>
    </div>
  )
}

ListWrapper.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  })),
}

export default ListWrapper;