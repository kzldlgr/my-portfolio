import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import resume from '../assets/cv/Resume.pdf';
import { TiDownload, TiExport } from 'react-icons/ti';
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col">
          <h2 className="h2 text-accent">About me</h2>
          <TypeAnimation sequence={[
            `I'm Kazel and I am a Software Engineer. I graduated at Colegio De San Lorenzo with a degree of BS Computer Science. I went to a bootcamp at Avion School where I learned HTML5, Javascript, React JS and Ruby on Rails and created various projects. Previously I am a Senior System Support Specialist at Bounty Agro Ventures, Inc. where I managed POS (point of sales) system/pheriperals of more than 1000 outlets of Chooks To Go.`,
          2000
          ]}
            speed={100}
            wrapper='span'
            repeat={Infinity}
          />
          <div className="lg:flex flex-row gap-2 mt-4">
            <Link
              to="portfolio"
              smooth={true}
              spy={true}
              className="cursor-pointer py-[18px] px-[50px] h-[42px] flex items-center justify-center text-base uppercase font-secondary font-semibold bg-primary text-white gap-1 mb-4 lg:mb-0">
              View my projects <TiExport />
            </Link>
            <a href={resume} download="Kazel Deligero (Resume)" className="py-[18px] px-[50px] h-[42px] flex items-center justify-center text-base uppercase font-secondary font-semibold  text-black border border-black gap-1">Download CV<TiDownload /></a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
