import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q32cskp', 'template_gqgah4g', form.current, 'j-G073_85dr0O_r_K')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent! Thank you', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto mt-8">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              <h4 className='text-text uppercase text-md lg:text-xl font-medium lg:mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[30px] lg:text-[90px] leading-none mb-6 lg:mb-12'>
                Let&apos;s work together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className='flex-1 border rounded-2xl flex flex-col gap-y-2 lg:gap-y-6 lg:pb-24 pb-12 p-6 items-start bg-gray-600'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-text focus:border-accent transition-all' name="from_name" type="text" placeholder='Your name' />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-text focus:border-accent transition-all' name="from_email" type="text" placeholder='Your email' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-text focus:border-accent transition-all resize-none mb-12' name="message" placeholder='Your message'></textarea>
            <button className='py-[18px] px-[50px] h-[66px] flex items-center justify-center text-2xl uppercase font-secondary font-semibold bg-primary text-background hover:brightness-75' type='submit' value="Send">Send message</button>
          </motion.form>
          <ToastContainer />
        </div>
      </div>
    </section>
  )
}
