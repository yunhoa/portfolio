import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import VisualWork from './components/VisualWork.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#eef6ff] text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <VisualWork />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
