import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from '../assets/icons/link.png';
import Delete from '../assets/icons/delete.png';
import facebook from '../assets/icons/facebook.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
// import { transition1 } from '../variant'

export default function Socials() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className='w-14 lg:w-16'>
      <button
        onClick={() => { setIsOpen(!isOpen) }}
        className='hover:scale-110 duration-200'>
        {isOpen ? <img src={Delete} alt="" className='w-12 h-12 p-1 lg:w-16 lg:h-16 lg:p-2' /> :
          <img src={Link} alt="" className='w-12 h-12 p-1 lg:w-16 lg:h-16 lg:p-2' />}
      </button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(0% 0% 100% 10% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        className='absolute flex flex-col gap-2'>
        <li><a href="/" target="_blank"></a><img src={linkedin} className='w-12 h-12 lg:w-16 lg:h-16 hover:scale-125 duration-200' /></li>
        <li><a href="/" target="_blank"></a><img src={github} className='w-12 h-12 lg:w-16 lg:h-16 hover:scale-125 duration-200' /></li>
        <li><a href="/" target="_blank"></a><img src={facebook} className='w-12 h-12 lg:w-16 lg:h-16 hover:scale-125 duration-200' /></li>
      </motion.ul>

    </motion.nav>
  )
}
