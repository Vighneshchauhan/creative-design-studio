import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaLaptopMedical
} from "react-icons/fa";

import "./industry.css";


function Healthcare(){

return(

<div className="industry-page">


<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>
Healthcare Solutions
</p>


<h1>
Digital Care For
<span> Healthcare Brands</span>
</h1>


<h3>
We design trusted digital experiences for hospitals,
clinics and healthcare companies.
</h3>


</motion.div>



<div className="industry-services">


<div className="industry-card">

<FaHeartbeat/>

<h2>
Healthcare Branding
</h2>

<p>
Building trust through professional digital identity.
</p>

</div>



<div className="industry-card">

<FaUserMd/>

<h2>
Patient Experience
</h2>

<p>
Better platforms for patients and healthcare teams.
</p>

</div>



<div className="industry-card">

<FaLaptopMedical/>

<h2>
Medical Platforms
</h2>

<p>
Modern websites and digital healthcare solutions.
</p>

</div>


</div>



<div className="industry-about">

<h2>
Technology With Trust
</h2>

<p>
We create healthcare solutions focused on accessibility,
clarity and better user experience.
</p>

</div>



</div>

)

}


export default Healthcare;