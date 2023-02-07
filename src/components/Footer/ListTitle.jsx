import PropTypes from 'prop-types'

const ListTitle = ({ children }) => {
	return (
		<h3 className='text-white text-base font-medium my-6 lg:mt-0'>
			{children}
		</h3>
	)
}

ListTitle.propTypes = {
	children: PropTypes.string,
}

export default ListTitle
