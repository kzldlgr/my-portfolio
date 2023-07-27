import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-black'>
      <ul className='flex flex-row gap-2 text-accent '>
        <li className='shadow-lg'><a href="https://github.com/kzldlgr" target="_blank"><FaGithubSquare className='w-12 h-12' /></a></li>
        <li className='shadow-lg'><a href="https://www.linkedin.com/in/kazeldeligero/" target="_blank"><FaLinkedin className='w-12 h-12' /></a></li>
        <li className='shadow-lg'><a href="https://www.facebook.com/kazel.deligero/" target="_blank"><FaFacebookSquare className='w-12 h-12' /></a></li>
      </ul>
    </nav >
  )
}
