import "./css/testimonials.css";


function Testimonials(){

const reviews=[

{
name:"Aarav Mehta",
role:"Restaurant Owner",
text:"The team transformed our online presence with an amazing website."
},

{
name:"Riya Shah",
role:"Startup Founder",
text:"Creative, professional and extremely easy to work with."
},

{
name:"Karan Patel",
role:"Business Owner",
text:"Their design quality and attention to detail is outstanding."
}

];


return(

<section className="testimonials" id="testimonials">


<div className="section-heading">

<p>Testimonials</p>

<h2>
<span>What Our Clients Say</span>
</h2>

</div>



<div className="testimonial-grid">


{
reviews.map((review,index)=>(

<div className="testimonial-card" key={index}>

<p>
"{review.text}"
</p>

<h3>
{review.name}
</h3>

<span>
{review.role}
</span>

</div>

))
}


</div>


</section>

)

}


export default Testimonials;