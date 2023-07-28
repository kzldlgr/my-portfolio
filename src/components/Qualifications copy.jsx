import { motion } from 'framer-motion';
import { divider, qualifyData } from '../variant';
import qualifications from '../qualification';
import { TiCalendarOutline } from "react-icons/ti";

export default function Qualifications() {
  return (
    <section className="section" id="qualifications">
      <div className="container mx-auto mt-12 lg:mt-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="h2 text-accent mb-0 whitespace-pre-line">Education & Work Experience</h1>
          <h1 className="text-center">My personal journey</h1>
          <div className="w-full lg:w-[1150px] h-[650px] mt-4 relative flex justify-center items-center">
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
              className='flex flex-col w-[80%] mt-6 '>
              {qualifications.map((quali, index) => {
                return (
                  <motion.div
                    variants={qualifyData(`${quali.type === 'work' ? 'left' : 'right'}`, quali.id)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    key={index}
                    className='flex flex-row w-full justify-center items-center'>
                    <div className={`${quali.type === 'education' ? 'lg:self-start lg:pr-8 lg:text-end' : 'lg:pl-8 lg:ml-auto'} min-w-[50%] relative`}>
                      <div className={`${quali.type === 'education' ? 'lg:inset-y-0 lg:-right-3' : 'lg:inset-y-0 lg:-left-3'} hidden lg:block w-6 h-6 absolute my-auto bg-accent rounded-full`}></div>
                      <div className='px-2 my-2 border border-text rounded-xl shadow-xl bg-accent text-text'>
                        <h1 className='text-secondary text-xl font-bold'>{quali.position}</h1>
                        <span className=''>{quali.name}</span>
                        <p className={`${quali.type === 'education' ? 'justify-end' : 'justify-start'} flex`}><TiCalendarOutline className='mr-1 mt-1'/>{quali.date}</p>
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
