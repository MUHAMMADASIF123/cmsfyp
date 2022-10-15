import React from 'react'
import './Slider.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
// import BaseComponent from 'bootstrap/js/dist/base-component';

function Slidermain () {
  return (
    <React.Fragment>
     <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100  d-block' style={{height:"400px"}}
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100  d-block' style={{height:"400px"}}
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100  d-block' style={{height:"400px"}}
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
    </React.Fragment>
  )
}

export default Slidermain