import image from '../phone.jpg';
import '../App.css';



function Contact(){
 return (<div className='contC'>
 <p className='textContact'>Prefer to speak with a customer service representative?</p>

 < div className="contact">
 <img className='imgContact' src={image} alt="phone" width="150px"/>
 </div>
 <div className='textContact'>

<p>Call 800-309-2500 and we'll be happy to help!</p>
<p>For existing furniture orders, call 800-732-2306 (8 am – 10 pm ET, Monday through Friday, 8 am – 5 pm ET on Saturdays).</p>
</div>

</div>
)}

export default Contact;