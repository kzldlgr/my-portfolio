import roadmap from '../assets/image/rocket.gif';
import { motion } from 'framer-motion';
import { rocket, divider, qualifyData } from '../variant';
import qualifications from '../qualification';
import { TiCalendarOutline } from "react-icons/ti";

export default function Qualifications() {
  return (
    <section className="section" id="qualifications">
      <div className="container mx-auto mt-12 lg:mt-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="h2 text-accent mb-0 whitespace-pre-line">Education & Work Experience</h1>
          <h1 className="text-center">My personal journey</h1>
          <div className="w-[1150px] h-[650px] mt-4 relative flex justify-center items-center">
            {/* rocket */}
            <motion.img
              variants={rocket('up', 0.01)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              src={roadmap} alt="" className='h-16 absolute inset-x-0 top-0 mx-auto z-20'
            />
            {/* divider */}

            <motion.div
              variants={divider()}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
              className={`h-full absolute inset-x-0 bottom-0 w-2 mx-auto  border border-accent bg-accent z-10`}>
            </motion.div>

            {/* data */}
            <div
              className='flex flex-col w-[60%] mt-6 '>
              {qualifications.reverse().map((quali, index) => {
                return (
                  <motion.div
                    variants={qualifyData(`${quali.type === 'work' ? 'left' : 'right'}`, quali.id)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    key={index}
                    className='flex w-full'>
                    <div className={`${quali.type === 'education' ? 'self-start pr-8 text-end' : 'pl-8 ml-auto'} min-w-[50%] relative`}>
                      <div className={`${quali.type === 'education' ? 'inset-y-0 -right-3' : ' inset-y-0 -left-3'} w-6 h-6 absolute my-auto bg-accent rounded-full`}></div>
                      <div className='px-2 my-2 border border-black rounded-xl shadow-xl bg-white text-black'>
                        <h1 className='text-accent text-xl font-bold'>{quali.position}</h1>
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
