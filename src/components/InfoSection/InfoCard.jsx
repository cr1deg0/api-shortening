import PropTypes from 'prop-types'

import IconBrandRecognition from '../Icons/IconBrandRecognition'
import IconDetailedRecords from '../Icons/IconDetailedRecords'
import IconFullyCustomizable from '../Icons/IconFullyCustomizable'

const InfoCard = ({ id, title, text, img_ref }) => {
	return (
		<div
			id={`card-${id}`}
			className='bg-white rounded-md p-8 lg:pr-6 lg:max-h-full lg:flex-1 pb-12 relative'
		>
			<div className='absolute bg-violet-very-dark -top-12 card-icon-centered lg:left-8 p-6 rounded-full border'>
				{img_ref === 'BrandRecognition' && <IconBrandRecognition />}
				{img_ref === 'DetailedRecords' && <IconDetailedRecords />}
				{img_ref === 'Customizable' && <IconFullyCustomizable />}
			</div>
			<h3 className='mt-12 lg:mt-16 mb-2 text-xl2 text-blue-very-dark font-bold'>
				{title}
			</h3>
			<p className='text-sm text-grey'>{text}</p>
		</div>
	)
}

InfoCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	img_ref: PropTypes.string.isRequired,
}

export default InfoCard
