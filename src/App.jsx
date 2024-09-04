import './App.css';
import Navbartop from './components/Navbartop'
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Scroll from './components/Scroll';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbartop /> 
      <Banner />  
      <About />  
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Scroll />
      <Footer />
    </div>
  )
}

export default App
