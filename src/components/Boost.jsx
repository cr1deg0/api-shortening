import RoundLinkBtn from './RoundLinkBtn'

const Boost = () => {
	return (
		<section
			aria-labelledby='section-boost-title'
			className='bg-violet-very-dark bg-boost-img-mobile bg-center bg-no-repeat bg-cover 
      py-24 flex flex-col items-center
      lg:bg-boost-img-desktop lg:py-16'
		>
			<h2
				id='section-boost-title'
				className='text-white text-xl3 font-medium mb-6
        lg:text-xl4 lg:font-bold'
			>
				Boost your links today
			</h2>
			<RoundLinkBtn href='/' addStyle={'w-48 py-4'}>
				Get Started
			</RoundLinkBtn>
		</section>
	)
}

export default Boost
