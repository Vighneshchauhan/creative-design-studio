import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseus from "./components/WhyChooseus";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Restaurant from "./pages/Restaurant";
import Hospitality from "./pages/Hospitality";
import Healthcare from "./pages/Healthcare";
import RealEstate from "./pages/RealEstate";
import Ecommerce from "./pages/Ecommerce";
import Technology from "./pages/Technology";


function Home() {

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <WhyChooseUs />

      <Industries />

      <Process />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );

}



function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Main Website */}

        <Route 
          path="/" 
          element={<Home />} 
        />


        {/* Industry Pages */}

        <Route
          path="/industries/restaurant"
          element={<Restaurant />}
        />


        <Route
          path="/industries/hospitality"
          element={<Hospitality />}
        />


        <Route
          path="/industries/healthcare"
          element={<Healthcare />}
        />


        <Route
          path="/industries/real-estate"
          element={<RealEstate />}
        />


        <Route
          path="/industries/ecommerce"
          element={<Ecommerce />}
        />


        <Route
          path="/industries/technology"
          element={<Technology />}
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;