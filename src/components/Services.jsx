import { motion } from "framer-motion";
import {
  FiMonitor,
  FiPenTool,
  FiLayers,
  FiSmartphone,
  FiTrendingUp,
  FiCamera
} from "react-icons/fi";

import "./css/services.css";


const services = [
  {
    icon: <FiMonitor />,
    title: "Web Design & Development",
    text: "Modern, responsive websites designed to improve your online presence."
  },
  {
    icon: <FiPenTool />,
    title: "Brand Identity",
    text: "Complete branding solutions including logos, colors, and visual identity."
  },
  {
    icon: <FiLayers />,
    title: "UI/UX Design",
    text: "User-focused interfaces that create smooth digital experiences."
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile App Design",
    text: "Creative mobile experiences designed for modern users."
  },
  {
    icon: <FiTrendingUp />,
    title: "Digital Marketing",
    text: "Strategies that help brands grow and reach more customers."
  },
  {
    icon: <FiCamera />,
    title: "Creative Content",
    text: "Professional graphics, visuals, and marketing content."
  }
];


function Services() {

  return (

    <section className="services" id="services">

      <div className="services-heading">

        <p className="section-tag">
          Our Services
        </p>

        <h2>
          <span>Creative Solutions For
           Growing Brands</span>
        </h2>

        <p>
          We provide complete digital solutions
          that help businesses build a strong identity.
        </p>

      </div>



      <div className="services-grid">

        {
          services.map((service,index)=>(

            <motion.div

              className="service-card"

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>


            </motion.div>

          ))
        }


      </div>


    </section>

  );

}


export default Services;