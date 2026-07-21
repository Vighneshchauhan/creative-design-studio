import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import "./css/about.css";

const points = [
  "Creative and modern design solutions",
  "User-focused digital experiences",
  "Professional branding strategies",
  "Scalable solutions for every business",
];

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="about-box">
            <h2>10+</h2>
            <p>
              Years of Creative
              Experience
            </p>
          </div>

        </motion.div>



        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="section-tag">
            About Our Studio
          </p>


          <h2>
            <span>We Transform Ideas Into
             Powerful Designs</span>
          </h2>


          <p className="about-text">
            We are a creative design studio helping brands
            build strong digital identities through
            innovative design, branding, and technology.
          </p>


          <div className="about-points">

            {points.map((item,index)=>(
              <div className="point" key={index}>
                <FiCheckCircle />
                <p>{item}</p>
              </div>
            ))}

          </div>


        </motion.div>

      </div>

    </section>
  );
}

export default About;