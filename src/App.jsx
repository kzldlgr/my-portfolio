import Header from './components/Header';
import Banner from './components/Banner';
// import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {


  return (
    <div className='bg-white text-black overflow-hidden mx-auto'>
      <Header />
      <Banner />
      {/* <Nav /> */}
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  )
}

export default App
