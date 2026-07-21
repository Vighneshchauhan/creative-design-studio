import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaHotel,
  FaHeartbeat,
  FaBuilding,
  FaShoppingCart,
  FaLaptopCode
} from "react-icons/fa";

import "./css/industries.css";


function Industries(){

const industries = [

{
title:"Restaurant",
description:"Digital experiences for restaurants, cafes and food brands.",
icon:<FaUtensils/>,
link:"/industries/restaurant"
},

{
title:"Hospitality",
description:"Modern websites and solutions for hotels and resorts.",
icon:<FaHotel/>,
link:"/industries/hospitality"
},

{
title:"Healthcare",
description:"Reliable digital platforms for healthcare businesses.",
icon:<FaHeartbeat/>,
link:"/industries/healthcare"
},

{
title:"Real Estate",
description:"Powerful digital solutions for property brands.",
icon:<FaBuilding/>,
link:"/industries/real-estate"
},

{
title:"E-Commerce",
description:"Online stores designed to increase conversions.",
icon:<FaShoppingCart/>,
link:"/industries/ecommerce"
},

{
title:"Technology",
description:"Innovative digital products for tech companies.",
icon:<FaLaptopCode/>,
link:"/industries/technology"
}

];


return(

<section className="industries" id="industries">


<div className="section-heading">

<p>Industries</p>

<h2>
Solutions Built For
<span> Every Industry</span>
</h2>

</div>



<div className="industries-grid">


{
industries.map((industry,index)=>(

<Link 
to={industry.link}
className="industry-card"
key={index}
>


<div className="industry-icon">

{industry.icon}

</div>


<h3>
{industry.title}
</h3>


<p>
{industry.description}
</p>


<span>
Explore →
</span>


</Link>

))
}


</div>


</section>

)

}


export default Industries;