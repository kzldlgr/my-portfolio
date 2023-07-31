/* eslint-disable react/jsx-key */
import skill from '../skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import { useState } from 'react';

export default function Skills() {
  const [toggle, setToggle] = useState('frontend');

  const arrayToggle = skill.filter(ski => {
    if (ski.type === toggle) {
      return ski
    }
  })
  const frontEndArray = skill.filter(ski => {
    if (ski.type === "frontend") {
      return ski
    }
  })
  const backEndArray = skill.filter(ski => {
    if (ski.type === "backend") {
      return ski
    }
  })
  const othersArray = skill.filter(ski => {
    if (ski.type === "others") {
      return ski
    }
  })

  return (
    <section className="section" id="skills">
      <div className="container mx-auto lg:max-w-[1600px] mt-12 lg:mt-16 rounded-xl py-4">
        <motion.h1
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='h2 text-accent mb-0 text-center font-bold'>Skills</motion.h1>
        <motion.h1
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='mb-4 text-center text-text font-bold'>Technologies I have used</motion.h1>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
          {/* mobile */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='block lg:hidden'>
            <div className='flex flex-row justify-between items-center text-accent text-center'>
              <p onClick={() => setToggle('frontend')} className={`${toggle === 'frontend' ? 'bg-primary' : 'bg-transparent'} w-full mx-2 rounded-lg p-2`}>Frontend</p>
              <div className='w-1 h-8 bg-accent' ></div>
              <p onClick={() => setToggle('backend')} className={`${toggle === 'backend' ? 'bg-primary' : 'bg-transparent'} w-full mx-2 rounded-lg p-2`}>Backend</p>
              <div className='w-1 h-8 bg-accent'></div>
              <p onClick={() => setToggle('others')} className={`${toggle === 'others' ? 'bg-primary' : 'bg-transparent'} w-full mx-2 rounded-lg p-2`}>Others</p>
            </div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="grid grid-cols-3 place-items-center py-2 gap-y-2">
              {arrayToggle.map((ski, index) => {
                return (
                  <div key={index} className='w-24 h-24 text-center shadow-xl bg-secondary rounded-2xl flex flex-col justify-center items-center'>
                    <img src={ski.url} alt="" className='w-16 aspect-square	object-contain p-2' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-text text-[12px]'>{ski.name}</h1>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
          {/* front end */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:block flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-accent'>Front end</h1>
            <div className="grid grid-cols-3 gap-y-4">
              {frontEndArray.map((ski, index) => {
                return (
                  <div
                    key={index} className='w-32 h-32 text-center shadow-xl bg-secondary rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-24 aspect-square	object-contain p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-text'>{ski.name}</h1>
                  </div>
                )
              })}
            </div>
          </motion.div>
          {/* divider */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:block border max-h-full border-secondary mt-10'>
          </motion.div>
          {/* backend */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:block flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-accent'>Back end</h1>
            <div className="grid grid-cols-3 gap-y-4">
              {backEndArray.map((ski, index) => {
                return (
                  <div
                    key={index} className='w-32 h-32 text-center shadow-xl bg-secondary rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-24 aspect-square	object-contain p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-text text-[14px]'>{ski.name}</h1>
                  </div>
                )
              })}
            </div>
          </motion.div>
          {/* divider */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:block border max-h-full border-secondary mt-10'>
          </motion.div>
          {/* others */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:block flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-accent'>Others</h1>
            <div className="grid grid-cols-3 gap-y-4">
              {othersArray.map((ski, index) => {
                return (
                  <div
                    key={index} className='w-32 h-32 text-center shadow-xl bg-secondary rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-24 aspect-square	object-contain p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-text text-[14px]'>{ski.name}</h1>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
