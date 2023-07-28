import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
    </motion.div>
);


