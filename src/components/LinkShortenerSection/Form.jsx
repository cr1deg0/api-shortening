import PropTypes from 'prop-types'

const Form = ({ input, onChange, onSubmit, error }) => {
	return (
		<div className='bg-shorten-section'>
			<form
				className='bg-shorten-img-mobile mx-6 p-6 bg-right-top bg-auto bg-no-repeat bg-violet-very-dark rounded-md
        lg:bg-shorten-img-desktop lg:bg-cover lg:mx-40 lg:p-12'
				onSubmit={onSubmit}
			>
				<span className='flex flex-col gap-4 lg:flex-row'>
					<input
						id='input-link'
						type='text'
						className='relative rounded-md  h-12 pl-6 lg:w-5/6 lg:mr-6'
						aria-invalid={error ? 'true' : 'false'}
						aria-required='true'
						value={input}
						onChange={onChange}
					></input>
					<label
						htmlFor='input-link'
						className='absolute h-12 flex items-center pl-6 text-grey'
						style={{
							color: input.length > 0 ? 'transparent' : '#999999',
						}}
					>
						Shorten a link here...
					</label>
					<button
						className='bg-cyan rounded-md h-12 lg:w-1/6 text-white text-md hover:bg-light-cyan 
            hover:text-violet-very-dark hover:font-semibold'
					>
						Shorten It!
					</button>
				</span>
				<span
					data-testid='error'
					id='error'
					className={`italic absolute pt-1 text-sm text-red ${
						error ? 'block' : 'hidden'
					}`}
				>
					Please add a link
				</span>
			</form>
		</div>
	)
}

Form.propTypes = {
	input: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	error: PropTypes.bool,
}

export default Form
