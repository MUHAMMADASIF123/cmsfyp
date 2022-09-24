import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function Home() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings1 = {
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <div>
      <div className=''>
        <div className='slider'>
          <Slider {...settings}>
            <div>
              {/* <h3>1</h3> */}

              <img
                className='justify sliderimg'
                src='./images/Slider/hajvery_hall.jpeg'
              />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='./images/Slider/galary_2.jpeg'
              />
            </div>{' '}
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='./images/Slider/gallary_1.jpeg'
              />
            </div>{' '}
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='./images/Slider/education_dptcrop.jpeg'
              />
            </div>
          </Slider>
        </div>
      </div>
      <div id='Programs' className=''>
        <section className='shadow container rounded prg-container'>
          <h1 className='container program_border'>Programs</h1>
          {/* <hr className='mr-25 ml-25' /> */}
          <div className='d-flex justify-content-center  '>
            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 '>
              <div class='card '>
                <img
                  src='/images/interstdnt.jpg'
                  className='card-img-top programimage'
                  alt='...'
                />
                <div class='card-body programs '>
                  <h5 class='card_title'>Intermediate</h5>
                  <p class='textp'>
                    Done with Matrric? Now its time to move on to
                    the next phase of your journey of knowledge.
                  </p>
                  <a
                    href='/Intermediate'
                    class='button_programs'
                  >
                    All Courses
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 '>
              <div class='card '>
                <img
                  src='/images/bechlorimggirl.jpg'
                  className='card-img-top programimage'
                  alt='...'
                />
                <div class='card-body programs'>
                  <h5 class='card_title'>Bechelors</h5>
                  <p class='textp'>
                    Now its all upto you to choose wisely in
                    which field you have most interest and want
                    to harn your specifical skills.
                  </p>
                  <a
                    href='/Bacholer_programs_list'
                    class='button_programs'
                  >
                    All Courses
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4'>
              <div class='card'>
                <img
                  src='/images/postgraduatepics.jpg'
                  className='card-img-top programimage'
                  alt='...'
                />
                <div class='card-body programs'>
                  <h5 class='card_title'>Post Graduate</h5>
                  <p class='textp'>
                    You are going to enter in the phase where you
                    will master those specific skills.
                  </p>
                  <a href='PostGraduate' class='button_programs'>
                    All Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='Departments'>
          <div class='container mt-3 dept_container rounded shadow mb-5'>
            <h1 className='custom_head mt-5 '>
              {' '}
              BS Departments
            </h1>

            <div class='row'>
              <div className='col-md-2  bsdept mt-3 col-lg-3'>
                <a className='' href='/ComputerScience'>
                  Computer Science
                </a>
              </div>

              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Chemistry_'>
                  Chemistry
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Physics_'>
                  Physics
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Mathematics_'>
                  Mathematics
                </a>
              </div>
            </div>
            <div class='row'>
              <div className='col-md-2 bsdept mt-3 col-lg-3'>
                <a className='' href='/Economics_'>
                  Economics
                </a>
              </div>

              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Islamiyat_'>
                  Islamiyat
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/BBA'>
                  BBA
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/MassCom'>
                  Mass Communication
                </a>
              </div>
            </div>
            <div class='row'>
              <div className='col-md-2 bsdept mt-3 col-lg-3'>
                <a className='' href='/Sociology'>
                  Sociology
                </a>
              </div>

              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Botany'>
                  Botany
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Zoology_'>
                  Zoology
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Education'>
                  Education
                </a>
              </div>
            </div>
            <div class='row'>
              <div className='col-md-2 bsdept mt-3 col-lg-3'>
                <a className='' href='/English'>
                  {' '}
                  English
                </a>
              </div>

              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Urdu'>
                  Urdu
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/PoliticalScience'>
                  Political Science
                </a>
              </div>
              <div class='col-md-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/Statistics'>
                  Statistics
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=' container shadow rounded mb-5 gallary-container '>
        <h2 className='mb-5 h2_border'> Gallary </h2>
        <Slider {...settings1} className='slide mb-5'>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify gallary'
              src='./images/Gallary/gallary_3.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/gallary_4.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/gallary_5.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/gallary_6.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/gallary_7.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/gallary_8.png'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/canteen.jpeg'
              alt='...'
            />
          </div>
          <div className=''>
            {/* <h3>1</h3> */}
            <img
              className='justify '
              src='./images/Gallary/cricket_Ground.jpeg'
              alt='...'
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
