import { FaLightbulb, FaPenNib, FaRocket } from "react-icons/fa";
import "./css/process.css";

function Process(){

const steps=[
{
icon:<FaLightbulb/>,
title:"Discover",
text:"We understand your business goals, audience and requirements."
},
{
icon:<FaPenNib/>,
title:"Design",
text:"Our team creates modern designs focused on user experience."
},
{
icon:<FaRocket/>,
title:"Launch",
text:"We deliver polished digital solutions ready for your customers."
}
];


return(

<section className="process" id="process">

<div className="section-heading">

<p>Our Process</p>

<h2>
How We Create
<span> Digital Experiences</span>
</h2>

</div>


<div className="process-grid">

{
steps.map((step,index)=>(

<div className="process-card" key={index}>

<div className="process-icon">
{step.icon}
</div>

<h3>
{step.title}
</h3>

<p>
{step.text}
</p>

</div>

))
}

</div>

</section>

)

}


export default Process;