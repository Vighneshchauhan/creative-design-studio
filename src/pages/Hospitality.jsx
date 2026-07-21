import { motion } from "framer-motion";
import {
  FaHotel,
  FaCalendarCheck,
  FaStar
} from "react-icons/fa";

import "./industry.css";


function Hospitality(){

return(

<div className="industry-page">


<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>
Hospitality Solutions
</p>


<h1>
Create Memorable
<span> Guest Experiences</span>
</h1>


<h3>
Digital solutions for hotels, resorts and travel brands.
</h3>


</motion.div>



<div className="industry-services">


<div className="industry-card">

<FaHotel/>

<h2>
Hotel Branding
</h2>

<p>
Premium identities for hospitality businesses.
</p>

</div>



<div className="industry-card">

<FaCalendarCheck/>

<h2>
Booking Experience
</h2>

<p>
Smooth digital booking journeys.
</p>

</div>



<div className="industry-card">

<FaStar/>

<h2>
Guest Satisfaction
</h2>

<p>
Design experiences customers remember.
</p>

</div>


</div>



</div>

)

}


export default Hospitality;