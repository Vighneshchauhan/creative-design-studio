import { motion } from "framer-motion";
import { FaShoppingCart, FaMobileAlt, FaRocket } from "react-icons/fa";
import "./industry.css";


function Ecommerce(){

return(

<div className="industry-page">

<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>E-Commerce Solutions</p>

<h1>
Build Online Stores That
<span> Convert</span>
</h1>

<h3>
We create high-performing ecommerce experiences
that turn visitors into customers.
</h3>

</motion.div>


<div className="industry-services">

<div className="industry-card">
<FaShoppingCart/>
<h2>Online Stores</h2>
<p>
Complete ecommerce website solutions.
</p>
</div>


<div className="industry-card">
<FaMobileAlt/>
<h2>Mobile Experience</h2>
<p>
Responsive shopping experiences.
</p>
</div>


<div className="industry-card">
<FaRocket/>
<h2>Growth Strategy</h2>
<p>
Optimization for better conversions.
</p>
</div>

</div>

</div>

)

}

export default Ecommerce;