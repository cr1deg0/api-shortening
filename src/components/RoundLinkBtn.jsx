import PropTypes from 'prop-types'

const RoundLinkBtn = ({ role, href, addStyle, children }) => {
	return (
		<a
			role={role}
			href={href}
			className={`block text-center bg-cyan rounded-full text-white 
      text-md font-medium tracking-wide
      hover:bg-light-cyan hover:text-violet-very-dark hover:font-semibold
       ${addStyle}`}
		>
			{children}
		</a>
	)
}

RoundLinkBtn.propTypes = {
	role: PropTypes.string,
	href: PropTypes.string,
	addStyle: PropTypes.string,
	children: PropTypes.string,
}

export default RoundLinkBtn
