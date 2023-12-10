import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return <>
    <Header />
    <main></main>
    <Footer />
  </>
}

export default App;
