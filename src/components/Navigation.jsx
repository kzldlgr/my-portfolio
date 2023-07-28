import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const liVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const ulVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.div variants={liVariants} className="absolute top-[100%] right-0 w-[280px] mx-2">
        <motion.ul
            variants={ulVariants}
            className="flex flex-col space-y-6"
        >
            <Link
                to='home'
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className='nav'>
                Home
            </Link>
            <Link
                to='about'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav'>
                About
            </Link>
            <Link
                to='skills'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav'>
                Skills
            </Link>
            <Link
                to='qualifications'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav'>
                Qualifications
            </Link>
            <Link
                to='project'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav'>
                Projects
            </Link>
            <Link
                to='contact'
                activeClass="active"
                smooth={true}
                spy={true}
                className='nav'>
                Contact
            </Link>
        </motion.ul>
        <div className="flex justify-center items-center gap-12 border-t border-black mt-[100%] p-4">
            <a href="https://github.com/kzldlgr" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaGithubSquare className='w-8 h-8' /></a>
            <a href="https://www.linkedin.com/in/kazeldeligero/" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaLinkedin className='w-8 h-8' /></a>
            <a href="https://www.facebook.com/kazel.deligero/" target="_blank" rel="noreferrer" className="active:scale-110 duration-300 hover:scale-125"><FaFacebookSquare className='w-8 h-8' /></a>
        </div>
    </motion.div>
);

