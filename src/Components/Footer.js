import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className='d-flex footer2'>
        <div className='row'>
          <div className='text-white col-md-4'>
            <a>
              <img
                className='logimg d-flex mt-2 ms-2 mb-2'
                src='/images/colglogo.png'
              ></img>
            </a>
            <p className='text-align w-50 text_space'>
              Our has built a level of trust and confidence among
              its existing and aspiring students due to the
              launch of innovative but effective study and work
              plans.
            </p>
          </div>
          <div className='col-md-4 text-white '>
            <h1 className='info'> Information</h1>
            <div className='address'>
              {/* GCS Wahdat Road,Lahore  */}
              <h6 class='align-baseline me-4'>
                <i class='fa-solid fa-location-dot text-warning me-2'></i>
                GCS Wahdat Road,Lahore{' '}
              </h6>
              <h6 class='align-baseline'>
                <i className='fa-solid fa-phone text-warning me-2'></i>
                Phone No +42-99260039-40{' '}
              </h6>
              <h6 class='align-baseline me-5'>
                <i className='fa-solid fa-envelope text-warning me-2'></i>{' '}
                Email:abc@gmail.com
              </h6>
            </div>
          </div>
          <div className='col-md-4 '>
            {/* <h6 className='text-white '>Map</h6> */}
            <a href='https://bit.ly/3RdWnox' target='_blank'>
              {' '}
              <img
                className='IMG'
                src='./images/gcsMap.PNG'
              />{' '}
            </a>
          </div>
        </div>
      </div>
      <div className='foter'>
        <div className='txt'>
          All &copy; Right Reserved By Government Graduate
          college Science | GCS
        </div>
        <div className='icons'>
          <i class='fa-brands fa-facebook'></i>
          <i class='fa-brands fa-instagram'></i>
          <i class='fa-brands fa-twitter'></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
