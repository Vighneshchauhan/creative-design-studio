
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import "./css/hero.css";


function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-tag">
            Creative Digital Agency
          </p>

          <h1>
            We Create
            <span> Digital Experiences </span>
            That Grow Brands
          </h1>

          <p className="hero-description">
            We design powerful websites, branding solutions,
            and digital experiences that help businesses stand out
            in the modern world.
          </p>


          <div className="hero-buttons">

            <a href="#contact" className="primary-btn">
              Start A Project
              <FiArrowRight />
            </a>


            <a href="#services" className="secondary-btn">
              <FiPlay />
              Explore Services
            </a>

          </div>


        </motion.div>



        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-card">

            <div className="circle"></div>

            <h3>
              Creative
              <br />
              Solutions
            </h3>

            <p>
              Design • Branding • Development
            </p>

          </div>

        </motion.div>


      </div>

    </section>
  );
}

export default Hero;