import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud
} from "react-icons/fa";

import "./industry.css";


function Technology(){

return(

<div className="industry-page">


<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>
Technology Solutions
</p>


<h1>
Building The Future With
<span> Digital Products</span>
</h1>


<h3>
We design websites, applications and digital products
for technology companies.
</h3>


</motion.div>



<div className="industry-services">


<div className="industry-card">

<FaLaptopCode/>

<h2>
Software Solutions
</h2>

<p>
Modern digital products built for users.
</p>

</div>



<div className="industry-card">

<FaMobileAlt/>

<h2>
Mobile Applications
</h2>

<p>
Beautiful and functional app experiences.
</p>

</div>



<div className="industry-card">

<FaCloud/>

<h2>
Cloud Platforms
</h2>

<p>
Scalable digital solutions for businesses.
</p>

</div>


</div>


</div>

)

}


export default Technology;