import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Geografi from "@/components/Geografi";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Organisasi from "@/components/Organisasi";
import Potensi from "@/components/Potensi";
import Profile from "@/components/Profile";
import Sejarah from "@/components/Sejarah";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Profile/>
    <Geografi/>
    <Sejarah/>
    <Organisasi/>
    <Potensi/>
    <Gallery/>
    <Footer/>
    </>

  );

};
export default Home;