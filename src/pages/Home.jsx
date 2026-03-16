import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import WhatWeDo from "../components/WhatWeDo";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <WhatWeDo />
      <Gallery />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;