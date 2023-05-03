import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import Footer from "./components/Fotter/Footer";

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
// import HowToBuy from "./components/HowToBuy/HowToBuy";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics.";

function App() {
  return (
    <div className="bg-[#4f9843] m-0 p-0 box-border">
      <Header />
      <MobileHeader />
      <Banner />
      <About />
      {/* <HowToBuy /> */}
      <Tokenomics />
      <Roadmap />
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default App;
