import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import Hero from "./Components/UI/Hero";
function App() {
  useEffect(() => { 
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
