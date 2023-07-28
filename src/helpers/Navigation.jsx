import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import navigate from "../navigate";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variants} className="absolute top-[100%] right-0 w-[280px] mx-2">
        {navigate.map(i => (
            <MenuItem name={i.name} link={i.link} offset={i.offset} key={i} />
        ))}
    </motion.ul>
);


