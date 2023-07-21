/* eslint-disable react/jsx-key */
import { motion } from "framer-motion"
import { fadeIn } from "../variant"
import { data } from "../portfolio"
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Element } from 'react-scroll';

export default function Portfolio() {

  const slideUp = () => {
    const slider = document.getElementById('slider');
    slider.scrollBy({
      top: -400,
      behavior: 'smooth',
    });
  };

  const slideDown = () => {
    const slider = document.getElementById('slider');
    slider.scrollBy({
      top: 400,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section" id="portfolio">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 gap-y-12 my-auto">
            <div>
              <h2 className="h2 leading-tight text-gradient">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores asperiores recusandae perferendis iure.</p>
              <button className="btn btn-sm">View all projects</button>
            </div>
          </motion.div>
          <div className="flex-1 relative flex flex-row items-center overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[150px] w-full z-50 blur-lg"></div>
            <MdExpandLess onClick={slideUp} size={40} className=" cursor-pointer" />
            <Element id='slider' className="w-full h-[700px] overflow-hidden scrollbar-hidden">
              <div className="h-full whitespace-nowrap scroll-smooth">
                {data.map((item) => (
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl z-30">
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                    <img
                      key={item.id} // Don't forget to add a unique key to each image when using map
                      className="w-full h-full block p-2 cursor-pointer "
                      src={item.img}
                      alt="/"
                    />
                    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                      <span className="text-gradient">UI/UX Design</span>
                    </div>
                    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                      <span className="text-3xl text-white">Project Title</span>
                    </div>
                  </div>
                ))}
              </div>
            </Element>
            <MdExpandMore onClick={slideDown} size={40} className=" cursor-pointer" />
            <div className="absolute inset-x-0 bottom-0 h-[150px] w-full z-50 blur-lg "></div>
          </div>
        </div>
      </div>
    </section>
  )
}
