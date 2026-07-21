import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaChartLine
} from "react-icons/fa";

import "./industry.css";


function RealEstate(){

return(

<div className="industry-page">


<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>
Real Estate Solutions
</p>


<h1>
Digital Presence For
<span> Property Brands</span>
</h1>


<h3>
Helping real estate companies attract more buyers
through modern digital solutions.
</h3>


</motion.div>



<div className="industry-services">


<div className="industry-card">

<FaBuilding/>

<h2>
Property Websites
</h2>

<p>
Beautiful websites for property showcases.
</p>

</div>



<div className="industry-card">

<FaHome/>

<h2>
Virtual Experience
</h2>

<p>
Interactive property presentations.
</p>

</div>



<div className="industry-card">

<FaChartLine/>

<h2>
Lead Generation
</h2>

<p>
Strategies that help businesses grow.
</p>

</div>


</div>


</div>

)

}


export default RealEstate;