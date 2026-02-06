import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </div>
    </>
  );
}


export default App
