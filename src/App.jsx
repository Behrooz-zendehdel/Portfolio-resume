import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import Hero from "./Components/UI/Hero";
import Services from "./Components/UI/Services";
import Portfolio from "./Components/UI/Portfolio";
import Contant from "./Components/UI/Contant";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contant />
      </main>
      <Footer />
    </>
  );
}

export default App;
