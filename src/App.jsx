import React from "react";
import Header from "./components/Header";
import Slide from "./components/Slide";
import OurProductsPreview from "./components/OurProductsPreview";
import Reasons from "./components/Reasons";
import About from "./components/About";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-backgroundLighter">
      <Header />
      <Slide />
      <OurProductsPreview />
      <Reasons />
      <About />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
