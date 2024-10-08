import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Get from "./components/GetInTounch";
import HeroPic from "./components/HeroPic";
import HeroText from "./components/HeroText";
import Logo from "./components/Logo";
import Mail from "./components/Mail";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <HeroText />
      <HeroPic />
      <About />
      <Cards />
      <Mail />
      <Get />
      <Footer />
      <Logo />
    </>
  );
}

export default App;
