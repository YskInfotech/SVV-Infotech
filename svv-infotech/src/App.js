import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import QuickContact from './components/QuickContact';
import ClientsSection from './components/ClientsSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection id="home"/>
      <About id="about"/>
      <ServicesSection id="services"/>
      <WhyChooseUs id="why-choose-us"/>
      <QuickContact id="quick-contact"/>
      <ClientsSection id="clients"/>
      <ContactUs id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
