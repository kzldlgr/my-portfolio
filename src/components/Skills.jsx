import skill from '../skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
export default function Skills() {

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
      <div className="container mx-auto lg:max-w-[1600px] bg-accent mt-24 rounded-xl">
        <motion.h1
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='h2 text-secondary mb-0 text-center font-bold mt-4'>Skills</motion.h1>
        <motion.h1
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='mb-4 text-center text-background'>Technologies I have used</motion.h1>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
          {/* front end */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-secondary'>Front end</h1>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8 lg:gap-x-1 ">
              {frontEndArray.map((ski, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    key={index} className='w-24 h-24 lg:w-32 lg:h-32 text-center shadow-xl bg-primary rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-16 lg:w-24 aspect-square	object-contain p-2 lg:p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-background'>{ski.name}</h1>
                  </motion.div>
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
            className='border max-h-full border-secondary mt-10'>
          </motion.div>
          {/* backend */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-secondary'>Back end</h1>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8 lg:gap-x-1 ">
              {backEndArray.map((ski, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    key={index} className='w-24 h-24 lg:w-32 lg:h-32 text-center shadow-xl bg-primary rounded-2xl flex flex-col justify-center items-center hover:scale-125 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-16 lg:w-24 aspect-square	object-contain p-2 lg:p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-background'>{ski.name}</h1>
                  </motion.div>
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
            className='border max-h-full border-secondary mt-10'>
          </motion.div>
          {/* others */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex-col text-center justify-center'>
            <h1 className='h2 text-secondary'>Others</h1>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8 lg:gap-x-4 mb-4 ">
              {othersArray.map((ski, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    key={index} className='w-24 h-24 lg:w-32 lg:h-32 text-center shadow-xl bg-primary rounded-2xl flex flex-col justify-center items-center hover:scale-110 transition mx-auto'>
                    <img src={ski.url} alt="" className='w-16 lg:w-24 aspect-square	object-contain p-2 lg:p-4' />
                    <h1 className='w-full whitespace-nowrap text-center font-bold text-background'>{ski.name}</h1>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
