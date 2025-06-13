import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Apartments from './components/Apartments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className='flex flex-col min-h-screen bg-white'>
        <Header />
        <main className='flex-grow'>
          <Hero />
          <About />
          <Services />
          <Benefits />
          <Testimonials />
          <Apartments />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
