import { useState } from "react";
import LinkItem from "../NavBar/LinkItem";
import RoundLinkBtn from "../RoundLinkBtn";
import Logo from "../Icons/Logo"
import useViewport from '../../hooks/useViewport'

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { viewportWidth } = useViewport();

  const menuItems = [ {
    title: "Features",
    href: "/"
  },
  {
    title: "Pricing", 
    href: '/',
  },
  {
    title: "Resources",
    href: '/',
  }];

  const menuItemsElement = menuItems.map((item, index) => (
    <LinkItem key={index} role={'menuitem'} href={ item.href }>{ item.title }</LinkItem>
  ))

  return (
    <nav className="flex flex-row items-center justify-between py-8 px-8
    lg:px-40 lg:py-16 lg:justify-start">
      <a href="/">
        <Logo fill={"#222127"}/>
      </a>
      <button
        className="lg:hidden relative"
        aria-labelledby="menu-label"
        aria-controls='navigation-menu'
        aria-haspopup='true'
        aria-expanded={isMenuOpen? 'true' : 'false'}
        onClick={ () => setIsMenuOpen(!isMenuOpen) }
      >
        <span id="menu-label" className="sr-only">Menu</span>
        <svg 
          width="24" 
          height="18" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#999999" fillRule="evenodd"/>
        </svg>
      </button>
      <ul 
        id='navigation-menu' 
        role="menu" 
        aria-labelledby="menu-label"
        className="absolute bg-violet-dark top-24 left-0 right-0 mx-6 px-6 flex flex-col items-stretch rounded-lg text-center
        lg:relative lg:bg-white lg:top-0 lg:flex-row lg:w-full lg:items-center lg:justify-between lg:mr-0 lg:pr-0"
        style={{display: (isMenuOpen | viewportWidth > 980) ? 'flex' : 'none'}}
      >
        <div className="pt-10 pb-8 border-b border-b-violet-light space-y-7 
        lg:flex lg:justify-center lg:pt-0 lg:pb-0 lg:space-y-0 lg:space-x-6 lg:border-none">
          { menuItemsElement }
        </div>
        <div className="pt-8 pb-10 space-y-5 flex flex-col items-center
        lg:flex-row lg:content-center lg:pt-0 lg:pb-0 lg:space-y-0 lg:space-x-6">
          <LinkItem role="menuitem" href="/" addStyle="lg:self-center">Login</LinkItem>
          <li>
            <RoundLinkBtn role="menuitem" href="/" addStyle={'w-28 py-2'}>Sign Up</RoundLinkBtn>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;