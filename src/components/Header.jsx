import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import Logo from '../assets/image/logo.png';
// import Socials from './Socials';
import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../variant";
import { MenuToggle } from '../helpers/MenuToggle';
// import { Navigation } from './Navigation';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";



export default function Header() {
  const containerRef = useRef(null);

  return (
    <header className="fixed w-full items-center justify-center flex h-16 border-b-2 bg-background z-50">
      <div className="flex w-full justify-between mx-72 h-full">
        <div className="flex flex-row">
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
        <div className='flex flex-row align-middle items-center text-primary'>
          <a href="https://github.com/kzldlgr" target="_blank" rel="noreferrer" className="hover:scale-105 duration-200"><FaGithubSquare className='w-10 h-10' /></a>
          <a href="https://www.linkedin.com/in/kazeldeligero/" target="_blank" rel="noreferrer" className="hover:scale-105 duration-200"><FaLinkedin className='w-10 h-10' /></a>
          <a href="https://www.facebook.com/kazel.deligero/" target="_blank" rel="noreferrer" className="hover:scale-105 duration-200"><FaFacebookSquare className='w-10 h-10' /></a>
        </div >
      </div >
    </header >
  )
}