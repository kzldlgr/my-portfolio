import { Link } from "react-scroll";
import Logo from '../assets/image/logo.png';
import Socials from './Socials';

export default function Header() {
  return (
    <header className="fixed w-full px-[30px] lg:px[0px] z-50 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full lg:max-w-[1600px] lg:mx-auto justify-between">
        <a
          to={'/'}
          className="max-w-[300px] lg:max-w-[800px] flex flex-row gap-2 items-center"
        >
          <img src={Logo} alt="" className="w-44 h-full m-2 p-1" />
        </a>
        <div className="hidden xl:flex gap-x-6 font-semibold">
          <Link
            to='home'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            offset={-200}
            className='nav'>
            Home
          </Link>
          <Link
            to='about'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='nav'>
            About
          </Link>
          <Link
            to='skills'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='nav'>
            Skills
          </Link>
          <Link
            to='qualifications'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='nav'>
            Qualifications
          </Link>
          <Link
            to='project'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='nav'>
            Projects
          </Link>
          <Link
            to='contact'
            activeClass="active-nav"
            smooth={true}
            spy={true}
            className='nav'>
            Contact
          </Link>
        </div>
      </div>
      <Socials />
    </header>
  )
}
