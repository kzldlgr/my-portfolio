import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        x: 200,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const liVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.div variants={variants} className="absolute top-[20%] -right-24 w-[280px]">
        <div className="flex justify-start items-center gap-2 border-b border-secondary p-1 mb-12 text-secondary shadow-xl">
            <a href="https://github.com/kzldlgr" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaGithubSquare className='w-8 h-8' /></a>
            <a href="https://www.linkedin.com/in/kazeldeligero/" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaLinkedin className='w-8 h-8' /></a>
            <a href="https://www.facebook.com/kazel.deligero/" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaFacebookSquare className='w-8 h-8' /></a>
        </div>
        <motion.ul
            variants={liVariants}
            className="flex flex-col space-y-2"
        >
            <Link
                to='home'
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className='nav-mobile'>
                Home
            </Link>
            <Link
                to='about'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav-mobile'>
                About
            </Link>
            <Link
                to='skills'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav-mobile'>
                Skills
            </Link>
            <Link
                to='qualifications'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav-mobile'>
                Qualifications
            </Link>
            <Link
                to='project'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav-mobile'>
                Projects
            </Link>
            <Link
                to='contact'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav-mobile'>
                Contact
            </Link>
        </motion.ul>
    </motion.div>
);


