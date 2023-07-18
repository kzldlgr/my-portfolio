import { Link } from "react-scroll";
import Logo from '../assets/image/logo.png';
import Socials from './Socials';

export default function Header() {
  return (
    <header className="fixed w-full px-[30px] lg:px[100px] z-50 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full lg:max-w-[1400px] lg:mx-auto justify-between">
        <a
          to={'/'}
          className="max-w-[300px] lg:max-w-[800px] flex flex-row gap-2 items-center"
        >
          <img src={Logo} alt="" className="w-16 h-16" />
        </a>
        <div className="hidden xl:flex gap-x-6 font-semibold">
          <Link
            to='home'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            Home
          </Link>
          <Link
            to='about'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            About
          </Link>
          <Link
            to='skills'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            Skills
          </Link>
          <Link
            to='qualifications'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            Qualifications
          </Link>
          <Link
            to='portfolio'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            Portfolio
          </Link>
          <Link
            to='contact'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='cursor-pointer w-full px-4 h-[60px] flex items-center justify-center'>
            Contact
          </Link>
        </div>
      </div>
      <Socials />
    </header>
  )
}
