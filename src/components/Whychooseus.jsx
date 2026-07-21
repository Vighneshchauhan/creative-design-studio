import { motion } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiZap,
  FiTarget
} from "react-icons/fi";

import "./css/whychooseus.css";


const reasons = [
  {
    icon: <FiAward />,
    title: "Creative Excellence",
    text: "We create unique designs that help your brand stand apart from competitors."
  },
  {
    icon: <FiUsers />,
    title: "Client Focused",
    text: "We understand your goals and create solutions based on your business needs."
  },
  {
    icon: <FiZap />,
    title: "Fast & Reliable",
    text: "Our team delivers high-quality projects with efficient workflows."
  },
  {
    icon: <FiTarget />,
    title: "Result Driven",
    text: "Every design decision is focused on improving user experience and growth."
  }
];


function WhyChooseUs() {

  return (

    <section className="why-section" id="whychooseus">

      <div className="why-container">


        <motion.div

          className="why-content"

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.7
          }}

        >

          <p className="section-tag">
            Why Choose Us
          </p>


          <h2>
            Building Brands With
            <span> Creativity & Strategy</span>
          </h2>


          <p className="why-description">
            We combine creative thinking, modern technology,
            and strategic planning to deliver digital solutions
            that create real impact.
          </p>


          <button className="why-btn">
            Let's Work Together
          </button>


        </motion.div>



        <div className="why-cards">


          {
            reasons.map((item,index)=>(

              <motion.div

                className="why-card"

                key={index}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}

              >

                <div className="why-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>


              </motion.div>

            ))
          }


        </div>


      </div>

    </section>

  );

}


export default WhyChooseUs;