import { motion } from "framer-motion"
import { fadeIn } from "../variant"
import { data } from "../portfolio"
import { FaExternalLinkAlt, FaGithub, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react"

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 250;
    const newIndex = isFirstSlide ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 250;
    const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <section className="section" id="project">
      <div className="lg:max-w-[1300px] mx-auto mt-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-2">
            <div>
              <h2 className="lg:h2 leading-tight text-accent mb-0 px-6">
                My Projects at Avion School
              </h2>
            </div>

            {/*  active preview */}
            <div className="w-full lg:w-[1200px] lg:h-[550px] relative flex flex-col justify-center items-center lg:p-6 p-2 mx-auto">
              <div className="group relative overflow-hidden rounded-2xl m-18 my-12">
                <div className="group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300 p-2"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={data[currentIndex].img} alt="/" />
                <div className="absolute -bottom-full lg:left-12 left-4 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-accent lg:text-3xl text-[16px]">{data[currentIndex].tools}</span>
                </div>
                <div className="absolute -bottom-full lg:left-12 left-4 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="lg:text-2xl text-sm text-white">{data[currentIndex].name}</span>
                </div>
                <div className="absolute -bottom-full right-10 lg:right-12 lg:group-hover:bottom-16 group-hover:bottom-4 transition-all duration-500 z-50">
                  <div className="flex-row w-full flex lg:gap-4 gap-2">
                    <a
                      href={data[currentIndex].live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row lg:w-[200px] lg:h-[50px] w-[150px] h-[30px] justify-center items-center text-background bg-accent rounded-lg hover:scale-105 active:bg-primary duration-300 ease-in-out">
                      <FaExternalLinkAlt className="mx-2" />
                      <p className="text-sm lg:text-lg"> Preview Link</p>
                    </a>
                    <a
                      href={data[currentIndex].sc}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row lg:w-[200px] lg:h-[50px]  w-[150px] h-[30px] justify-center items-center text-background bg-accent rounded-lg hover:scale-105 active:bg-primary duration-300 ease-in-out">
                      <FaGithub className="mx-2" />
                      <p className="text-sm lg:text-lg">Source Code</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom preview */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex items-center bg-white/20 rounded-xl group/slider px-14">
              {/* left arrow */}
              <button
                onClick={prevSlide}
                className={`${currentIndex === 0 ? "" : "group-hover/slider:opacity-100"} opacity-10 absolute h-full py-11 top-[50%] translate-x-10 translate-y-[-50%] -left-10 text-2xl rounded-l-lg p-2 bg-black/20 text-white cursor-pointer z-40 active:bg-white duration-300 ease-in-out`}>
                <FaAngleLeft size={30} />
              </button>
              <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-6 lg:px-0 px-6 rounded-xl">
                {data.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.img}
                      alt=""
                      onClick={() => setCurrentIndex(item.id)}
                      className={`${currentIndex === item.id ? "" : "blur-sm"} w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl`}
                    />
                  )
                })}
              </div>
              {/* right arrow */}
              <button
                onClick={nextSlide}
                className={`${currentIndex === data.length - 1 ? "" : "group-hover/slider:opacity-100"} opacity-10 absolute h-full py-11 top-[50%] translate-x-10 translate-y-[-50%] right-10 text-2xl rounded-r-lg p-2 bg-black/20 text-white cursor-pointer z-40 active:bg-white duration-300 ease-in-out`}>
                <FaAngleRight size={30} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div >
    </section >
  )
}
