import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ArrowUp from './helpers/ArrowUp';

function App() {


  return (
    <div className='bg-background text-text overflow-hidden mx-auto relative'>
      <Header />
      <ArrowUp />
      <Banner />
      <About />
      <Skills />
      <Qualifications />
      <Project />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
