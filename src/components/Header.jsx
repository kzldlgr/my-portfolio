// import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import Logo from '../assets/image/logo.png';
// import Socials from './Socials';
import { FaBars } from "react-icons/fa";
import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../variant";
import { MenuToggle } from '../helpers/MenuToggle';

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
    clipPath: "circle(100px at 300px 0px )",
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
      <div className="flex w-full justify-between">
        <div className="">
          <a
            to={'/'}
            className="max-w-[100px] flex flex-row gap-2 items-center"
          >
            <img src={Logo} alt="" className="w-[100%] h-[100%]" />
          </a>
        </div>
        <div className="my-8">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='flex justify-end'
          >
            <motion.div className="absolute top-0 right-0 -z-0 h-screen w-[300px] bg-primary" variants={sidebar} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      </div>
    </header>
  )
}
