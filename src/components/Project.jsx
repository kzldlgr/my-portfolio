import { motion } from "framer-motion"
import { fadeIn } from "../variant"
import { data } from "../portfolio"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from "react"

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <section className="section" id="project">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-4">
            <div>
              <h2 className="h2 leading-tight text-accent mb-0">
                My Projects at Avion School
              </h2>
            </div>

            {/*  active preview */}
            <div className=" w-full h-full relative flex flex-col justify-center items-center p-6 group/slider">
              <div className="group relative overflow-hidden border-4 border-black/50 rounded-2xl m-18">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 p-2"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={data[currentIndex].img} alt="" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">{data[currentIndex].tools}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">{data[currentIndex].name}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-2 transition-all duration-500 z-50">
                  <div className="flex-auto w-full flex gap-6">
                    <a
                      href={data[currentIndex].live}
                      target="_blank"
                      className="border border-black bg-white text-black font-bold text-lg p-2" rel="noreferrer">
                      Preview Link
                    </a>
                    <a
                      href={data[currentIndex].sc}
                      target="_blank"
                      className="border border-black bg-white text-black font-bold text-lg p-2" rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* left arrow */}
              <div className="hidden group-hover/slider:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>

              {/* right arrow */}
              <div className="hidden group-hover/slider:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>

            {/* bottom preview */}
            <div className="relative flex items-center mx-auto">
              {data.map((item, index) => {
                return (
                  <div
                    className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    onClick={() => setCurrentIndex(index)}
                    key={index}
                  >
                    <img src={item.img} alt="" />
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
