import footerData from './footerLinksData'
import Logo from '../Icons/Logo'
import ListWrapper from './ListWrapper'
import SocialsList from './SocialsList'

const Footer = () => {
	const { featuresList, resourcesList, companyList } = footerData

	return (
		<footer
			className='bg-blue-very-dark flex flex-col items-center text-center
      lg:flex-row lg:px-40 lg:justify-between lg:items-start lg:py-16'
			aria-label='Learn more about us'
		>
			<span className='pt-12 pb-4 lg:pt-0'>
				<Logo fill={'#FFFEFF'} />
			</span>
			<ListWrapper title='Features' list={featuresList}></ListWrapper>
			<ListWrapper
				title='Resources'
				list={resourcesList}
			></ListWrapper>
			<ListWrapper title='Company' list={companyList}></ListWrapper>
			<SocialsList />
		</footer>
	)
}

export default Footer
