import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Founder from '../components/Founder';
import About from '../components/About';
import Packages from '../components/Packages';
import Diagnostic from '../components/Diagnostic';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Espaçamento para compensar o navbar fixo */}
      <div className="h-16"></div>

      <main>
        <Hero />
        <Founder />
        <About />
        <Packages />
        <Diagnostic />
        <Team />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
