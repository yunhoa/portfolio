import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Header />
      <main>
        <Hero />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
