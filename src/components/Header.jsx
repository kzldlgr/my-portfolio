import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import Logo from '../assets/image/logo.png';
// import Socials from './Socials';
import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../variant";
import { MenuToggle } from '../helpers/MenuToggle';
import { Navigation } from './Navigation';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 300}px at 80px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 258px 40px )",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className="fixed w-full px-[30px] lg:px[0px] z-50 h-[100px] lg:h-[140px]">
      <div className="flex w-full justify-between lg:items-center lg:max-w-[1600px] lg:mx-auto">
        <div className="">
          <a
            to={'/'}
            className="max-w-[100px] flex flex-row gap-2 items-center"
          >
            <img src={Logo} alt="" className="w-[100%] h-[100%]" />
          </a>
        </div>
        <div className="my-8 lg:hidden">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='flex justify-end'
          >
            <motion.div className="absolute top-0 right-0 -z-0 h-screen w-[300px] bg-primary" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
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
        <div className='flex-row gap-2 items-center justify-center text-primary hidden lg:flex'>
          <a href="https://github.com/kzldlgr" target="_blank" rel="noreferrer" className="hover:scale-125 duration-200"><FaGithubSquare className='w-8 h-8' /></a>
          <a href="https://www.linkedin.com/in/kazeldeligero/" target="_blank" rel="noreferrer" className="hover:scale-125 duration-200"><FaLinkedin className='w-8 h-8' /></a>
          <a href="https://www.facebook.com/kazel.deligero/" target="_blank" rel="noreferrer" className="hover:scale-125 duration-200"><FaFacebookSquare className='w-8 h-8' /></a>
        </div >
      </div >
    </header >
  )
}
