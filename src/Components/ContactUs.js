import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyo59t8', 'template_nnn72km', form.current, '-mhcSLqHKxDPHScGn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="row d-flex justify-content-center">
    <div className='col-md-6'>
    <form ref={form} onSubmit={sendEmail}>
      {/* <h1 className='me-5'>Name</h1> */}
      <input type='text' placeholder='Enter your name'  className='form-control mt-2' name="from_name" />
      {/* <label className='ms-0'>Email</label> */}
      <input type='email' placeholder='Enter your email' className='form-control mt-2'  name="email" />
      {/* <label className='ms-0'>Message</label> */}
      <textarea cols='20' rows='20' type='textarea' placeholder=' Enter your mesaage'  className='form-control mt-2' name="message" />
      <button   className='form-control mt-2 btn btn-primary' type="submit" value="Send" >send</button>
    </form>
    </div>
    </div>
  );
};
export default ContactUs