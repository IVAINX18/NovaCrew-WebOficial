import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Members from './components/Members';
import SubGroups from './components/SubGroups';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'members', 'subgroups', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Members />
      <SubGroups />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
