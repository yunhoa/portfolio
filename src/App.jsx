import { useState } from 'react';
import Header from './components/Header.jsx';
import IntroGate from './components/IntroGate.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import VisualWork from './components/VisualWork.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#eef6ff] text-slate-900">
      {!hasEntered && <IntroGate onEnter={() => setHasEntered(true)} />}
      <Header />
      <main>
        <Hero />
        <Profile />
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
