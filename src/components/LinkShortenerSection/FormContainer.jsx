import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

const FormContainer = ({ addLinks }) => {
	const [input, setInput] = useState('')
	const [formError, setformError] = useState(false)

	useEffect(() => {
		;(input === '') & (formError === true)
			? setformError(true)
			: setformError(false)
	}, [input, formError])

	const onSubmit = async (e) => {
		e.preventDefault()
		input === '' ? setformError(true) : setformError(false)

		if (input !== '') {
			const base = 'https://api.shrtco.de/v2'
			const url = `${base}/shorten?url=${input}`
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error('This is not a valid URL')
				} else {
					const data = await response.json()
					const long_link = data.result.original_link
					const short_link = data.result.full_short_link
					addLinks(long_link, short_link)
					setInput('')
				}
			} catch (err) {
				alert('This is not a valid URL. Try again')
			}
		}
	}
	return (
		<Form
			input={input}
			onChange={(e) => setInput(e.target.value)}
			onSubmit={onSubmit}
			error={formError}
		/>
	)
}

FormContainer.propTypes = {
	addLink: PropTypes.func,
}
export default FormContainer
