import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

// forces CSSPlugin to be included in build -- although ScrollTrigger works just fine locally, CSSPlugin seems to be dropped during build
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

function App() {
  return (
    <>
      <Nav />
      <Title />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
