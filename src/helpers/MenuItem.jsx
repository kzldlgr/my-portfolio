import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
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

// eslint-disable-next-line react/prop-types
export const MenuItem = ({ name, link, offset }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to={link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={offset}
                className='nav'>
                {name}
            </Link>
        </motion.li>
    );
};
