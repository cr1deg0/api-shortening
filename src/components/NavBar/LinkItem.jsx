import PropTypes from 'prop-types'

const LinkItem = ({ href, addStyle, children }) => {
	return (
		<li
			className={`text-white text-lg hover:text-cyan list-none
      lg:text-grey lg:text-md lg:font-medium lg:hover:text-blue-very-dark ${addStyle}`}
		>
			<a href={href}>{children}</a>
		</li>
	)
}

LinkItem.propTypes = {
	href: PropTypes.string,
	addStyle: PropTypes.string,
	children: PropTypes.string,
}

export default LinkItem
