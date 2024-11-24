// pages/index.tsx
import Navbar from "../../components/Navbar";
import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import AboutUs from "../../components/AboutUs";
import Chatbox from "../../components/Chatbox";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const Home = () => (
  <>
    <Navbar />
    <Hero/>
     <Features /> 
    <Pricing />
    <AboutUs />
    <Chatbox />
    <Footer />
  </>
);

export default Home;
