import { motion } from 'framer-motion';
import { divider, qualifyData } from '../variant';
import qualifications from '../qualification';
import { TiCalendarOutline } from "react-icons/ti";

export default function Qualifications() {
  return (
    <section className="section" id="qualifications">
      <div className="container mx-auto lg:mt-24 mt-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:h2 text-accent mb-0 whitespace-pre-line">Education & Work Experience</h1>
          <h1 className="text-center lg:my-4">My personal journey</h1>
          <div className="w-full lg:w-[900px] h-[490px] lg:h-[650px] relative flex justify-center items-center">
            {/* divider */}
            <motion.div
              variants={divider()}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
              className={`hidden lg:block h-full absolute inset-x-0 bottom-0 w-2 mx-auto  border border-accent bg-accent z-10`}>
            </motion.div>

            {/* data */}
            <div
              className='flex flex-col w-full gap-y-2 lg:mt-6 text-[12px]'>
              {qualifications.map((quali, index) => {
                return (
                  <motion.div
                    variants={qualifyData(`${quali.type === 'work' ? 'left' : 'right'}`, quali.id)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    key={index}
                    className='flex w-full h-[90px] lg:h-full'>
                    <div className={`${quali.type === 'education' ? 'lg:self-start lg:pr-8 text-end' : 'lg:pl-8 lg:ml-auto'} lg:w-[50%] w-full relative`}>
                      <div className={`${quali.type === 'education' ? 'lg:inset-y-0 lg:-right-3' : 'lg:inset-y-0 lg:-left-3'} hidden lg:block w-6 h-6 absolute my-auto bg-accent rounded-full`}></div>
                      <div className='border border-text rounded-xl shadow-xl bg-accent text-text flex flex-col p-1'>
                        <h1 className='text-secondary lg:text-xl text-[16px] font-bold'>{quali.position}</h1>
                        <p className='text-[14px]'>{quali.name}</p>
                        <p className={`${quali.type === 'education' ? 'justify-end' : 'justify-start'} flex text-[14px]`}><TiCalendarOutline className='mr-1 mt-3 lg:mt-2'/>{quali.date}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
