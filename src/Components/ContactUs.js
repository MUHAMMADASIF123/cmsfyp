import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './contactus.css'


 const ContactUs = () => {
  const form = useRef();
const history=useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyo59t8', 'template_nnn72km', form.current, '-mhcSLqHKxDPHScGn')
      .then((result) => {
          console.log(result.text);
history('/')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="row d-flex justify-content-center  vh-100  ">
    <h1 className=' mt-2 custom_heading'>Get in Touch !</h1>
    <p className='font-weight-bold  custom_para '> Contact us for a Quote, To reach our Team</p>
    <div className='col-md-6  text-center mb-5 '>
    <form ref={form} onSubmit={sendEmail} className=" rounded shadow  ">
      {/* <h1 className=''>Name</h1> */}
      <input type='text' placeholder='Enter your name'  className=' w-75 mt-2' name="from_name"  />
      {/* <label className='ms-0'>Email</label> */}
      <input type='email' placeholder='Enter your email' className=' w-75 mt-2'  name="email" />
      {/* <label className='ms-0'>Message</label> */}
      <textarea cols='10' rows='10' type='textarea' placeholder=' Enter your mesaage'  className='  w-75 mt-2' name="message" />
      <button className=' w-75 mt-2 btn btn-primary mt-2' type="submit" value="Send" >Send Message</button>
    </form>
    </div>
    </div>
  );
};
export default ContactUs