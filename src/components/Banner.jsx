import Image from '../assets/image/ImageTransparent.png'
import { motion } from 'framer-motion'
import { fadeIn, transition1 } from '../variant'


export default function Banner() {
  return (
    <section className="min-h-[100vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-4'>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[1000px] rounded-full overflow-hidden'>
            <motion.img
              whileHover={{ scale: 1.3 }}
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
              className='text-4xl font-bold m-2'>Hi, I am </motion.h1>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Kazel Deligero
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] my-2'>
              <h1 className='text-accent'>Full Stack Web Developer</h1>
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-xl mx-auto lg:mx-0 text-2xl'>
            High level knowledge and experience in Web Development and producing quality work.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='py-[18px] px-[50px] h-[66px] flex items-center justify-center text-base uppercase font-secondary font-semibold bg-primary text-white'>Hire me</button>
          </motion.div>
        </div>
      </div>
    </div>
    </section >
  )
}
