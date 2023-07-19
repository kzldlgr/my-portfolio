import Header from './components/Header';
import Banner from './components/Banner';
// import Nav from './components/Nav';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {


  return (
    <div className='bg-white text-black overflow-hidden mx-auto'>
      <Header />
      <Banner />
      {/* <Nav /> */}
      <About />
      <Skills />
      <Qualifications />
      <Portfolio />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
