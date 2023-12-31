import { FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export default function ArrowUp() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <nav className="fixed lg:bottom-12 lg:right-12 bottom-4 right-4 z-40 group ">
            {backToTop &&
                <motion.button
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 4 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={scrollUp}
                    className="rounded-full border w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] border-text flex justify-center items-center group-hover:border-primary text-text group-hover:text-primary ">
                    <FaArrowUp size={20} />
                </motion.button>
            }
        </nav>
    )
}
