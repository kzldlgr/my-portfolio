import { Link } from 'react-scroll';
import resume from '../assets/cv/Resume.pdf';
import { TiDownload, TiExport } from 'react-icons/ti';
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="lg:max-w-[1200px] mx-auto my-12 px-6 lg:py-0">
        <div className="flex flex-col gap-y-10 lg:flex-row gap-12">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-cover bg-no-repeat h-[440px] bg-top about-img">
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col">
            <h2 className="h2 text-accent">About me</h2>
            <p className='text-[12px] lg:text-xl lg:leading-10'>I&apos;m Kazel and I am a Software Engineer. I graduated at Colegio De San Lorenzo with a degree of BS Computer Science. I went to a bootcamp at Avion School where I learned HTML5, Javascript, React JS and Ruby on Rails and created various projects. Previously I am a Senior System Support Specialist at Bounty Agro Ventures, Inc. where I managed POS (point of sales) system/pheriperals of more than 1000 outlets of Chooks To Go.</p>
            <div className="lg:flex flex-row gap-2 mt-4">
              <Link
                to="project"
                smooth={true}
                spy={true}
                className="cursor-pointer py-[18px] px-[50px] h-[42px] flex items-center justify-center text-base uppercase font-secondary font-semibold bg-primary text-background gap-1 mb-4 lg:mb-0 hover:bg-accent">
                View my projects <TiExport />
              </Link>
              <a href={resume} download="Kazel Deligero (Resume)" className="py-[18px] px-[50px] h-[42px] flex items-center justify-center text-base uppercase font-secondary font-semibold  text-text border border-accent gap-1 hover:border-secondary">Download CV<TiDownload /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
