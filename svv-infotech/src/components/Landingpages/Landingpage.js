import React from "react";
import Navbar from "../Navbar"
import HeroSection from '../HeroSection';
import About from '../About';
import ServicesSection from "../ServicesSection";
import WhyChooseUs from '../WhyChooseUs';
import QuickContact from '../QuickContact';
import ClientsSection from '../ClientsSection';
import ContactUs from '../ContactUs';
import Footer from '../Footer';
// import Login from "../adminlogin/Login";



function Landingpage() {
    return (
        <>
            <Navbar />
            <HeroSection id="home" />
            <About id="about" />
            <ServicesSection id="services" />
            <WhyChooseUs id="why-choose-us" />
            <QuickContact id="quick-contact" />
            <ClientsSection id="clients" />
            <ContactUs id="contact" />
            <Footer />


        </>
    )
}
export default Landingpage;