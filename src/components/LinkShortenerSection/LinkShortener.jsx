import { useEffect, useState } from 'react'
import FormContainer from './FormContainer.jsx'
import LinksContainer from './LinksContainer.jsx'

const LinkShortener = () => {
	const savedList = JSON.parse(localStorage.getItem('linksList'))
	const linkListInitState = savedList ? savedList : []
	const [linkList, setLinkList] = useState(linkListInitState)

	const addLinks = (longUrl, shortUrl) => {
		setLinkList((prevState) => {
			return [
				...prevState,
				{
					longUrl: longUrl,
					shortUrl: shortUrl,
				},
			]
		})
	}

	useEffect(() => {
		localStorage.setItem('linksList', JSON.stringify(linkList))
	}, [linkList])

	return (
		<section aria-label='Shorten a link'>
			<FormContainer addLinks={addLinks} />
			{linkList.length > 0 && <LinksContainer linkList={linkList} />}
		</section>
	)
}

export default LinkShortener
