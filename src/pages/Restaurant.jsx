import { motion } from "framer-motion";
import { FaUtensils, FaGlobe, FaChartLine } from "react-icons/fa";
import "./industry.css";
import restaurantImage from "../assets/image/restaurant.jpg";
function Restaurant(){

return(
<div className="industry-page">
<section 
className="industry-hero-image"
style={{
backgroundImage:`url(${restaurantImage})`
}}
>

<div className="hero-content">

<p>
Restaurant Solutions
</p>

<h1>
Building Digital Brands For
<span> Restaurants</span>
</h1>

<h3>
We design premium websites, branding and digital experiences that help restaurants grow.
</h3>

<button>
Start Your Project
</button>

</div>

</section>

<motion.div
className="industry-hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
>

<p>Restaurant Solutions</p>

<h1>
Digital Growth For
<span> Restaurants</span>
</h1>

<h3>
We create powerful websites, branding and digital
experiences for restaurants and food businesses.
</h3>

</motion.div>


<div className="industry-services">

<div className="industry-card">
<FaUtensils/>
<h2>Brand Identity</h2>
<p>
Creative branding that makes your restaurant memorable.
</p>
</div>


<div className="industry-card">
<FaGlobe/>
<h2>Restaurant Websites</h2>
<p>
Modern websites designed to attract customers.
</p>
</div>


<div className="industry-card">
<FaChartLine/>
<h2>Business Growth</h2>
<p>
Digital strategies that increase online visibility.
</p>
</div>

</div>


<div className="industry-about">

<h2>
Built For Food Brands
</h2>

<p>
From cafes to premium restaurants, we design experiences
that connect brands with customers.
</p>

</div>


</div>
)

}

export default Restaurant;