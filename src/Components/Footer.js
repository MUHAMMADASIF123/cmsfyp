import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='d-flex footer2' >

  <div className='row'>
    <div className=' col-md-4 text-white '>
    <h6>Information</h6>
    <p>Government College Of Science <br/>Wahdat Road, Lahore Pakistan</p>
    <p>Phone No:  +92 - +42-99260039-40</p>
    <p>Fax No:       +92 - +42-99260041</p>
    <p>Official Facebook Page:    <a href='/'> www.facebook.com/gcswrlahore </a></p>
  </div>
  <div className='text-white col-md-4'>
    <h6>Government Graduate College of Science</h6>
    <p>Our has built a level of trust<br/> and confidence among its existing <br/>and aspiring students due 
      to <br/>the launch of innovative but <br/>effective study and work plans.</p>
  </div>
  <div className='col-md-4 '>
    {/* <h6 className='text-white '>Map</h6> */}
   <a href='https://bit.ly/3RdWnox'> <img className='IMG' src='./images/gcsMap.PNG'/> </a>
  </div>
  </div>
  </div>
    <div className='foter'>
     
      <div className='txt'>

 All &copy; Right Reserved By Government Graduate college Science | GCS
      </div>
      <div className='icons'>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      
      </div>
    </div>
    </>
    
  )
}

export default Footer