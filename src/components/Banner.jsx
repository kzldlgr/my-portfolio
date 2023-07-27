import Image from '../assets/image/ImageTransparent.png'
import { motion } from 'framer-motion'
import { fadeIn, transition1 } from '../variant'
import { TiLocationArrow } from 'react-icons/ti';
import { Link } from 'react-scroll';

export default function Banner() {
  return (
    <section className="min-h-[100vh] flex items-center" id="home">
      <div className="container mx-auto z-30">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-4'>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[1000px] overflow-hidden'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={Image} alt="" />
          </motion.div>
          {/* text */}
          <div className='flex-2 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-4xl font-bold m-2 text-text'>Hi, I am </motion.h1>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px] text-accent my-6'>
              Kazel Deligero
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] my-2'>
              <h1 className='text-primary font-bold'>Full Stack Web Developer</h1>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-xl mx-auto lg:mx-0 text-2xl text-text'>
              High level knowledge and experience in Web Development and producing quality work.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                className='cursor-pointer py-[18px] px-[50px] h-[66px] flex items-center justify-center text-2xl uppercase font-secondary font-semibold bg-primary text-text'>Hire me <TiLocationArrow className='w-6 h-6 pb-1' /></Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  )
}
