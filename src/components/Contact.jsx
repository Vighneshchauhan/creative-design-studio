import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./css/contact.css";


function Contact(){


return(

<section className="contact" id="contact">


<div className="contact-wrapper">


<div className="contact-info">

<p>
Contact Us
</p>

<h2>
Let's Build Something
<span> Great Together</span>
</h2>


<h3>
Have a project idea?
Let's create something amazing.
</h3>


<div className="contact-item">

<FaEnvelope/>

dc1330483@gmail.com

</div>


<div className="contact-item">

<FaPhone/>

+91 93730 11123

</div>


</div>



<form className="contact-form">


<input 
placeholder="Your Name"
/>


<input 
placeholder="Email Address"
/>


<textarea 
placeholder="Your Message"
/>



<button>
Send Message
</button>


</form>


</div>


</section>

)

}


export default Contact;