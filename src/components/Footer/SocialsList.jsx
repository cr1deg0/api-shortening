import socialsLinkData from './socialsLinkData'
import LinkItem from './LinkItem'
import Icon from './Icon'

const SocialsList = () => {
	return (
		<div aria-label='Follow us in'>
			<ul role='menu' className='flex gap-8 my-12 lg:mt-0'>
				{socialsLinkData.map((item, index) => (
					<LinkItem key={index} href={item.href}>
						<Icon
							name={item.name}
							width={item.width}
							height={item.height}
							d={item.d}
						/>
					</LinkItem>
				))}
			</ul>
		</div>
	)
}

export default SocialsList
