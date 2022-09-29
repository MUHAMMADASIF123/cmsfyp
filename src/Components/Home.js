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
  const settings1 = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                src='https://res.cloudinary.com/azeem413/image/upload/v1664275312/images/Slider/entrance_hyz8jh.jpg'
              />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664035593/images/Slider/gallary_1_oxlnfo.jpg'
              />
            </div>{' '}
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664035593/images/Slider/galary_2_ev11u3.jpg'
              />
            </div>{' '}
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664035591/images/Slider/hajvery_hall_vrojec.jpg'
              />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify sliderimg'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664035588/images/Slider/education_dptcrop_dgmaz0.jpg'
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
                  src='https://res.cloudinary.com/azeem413/image/upload/v1664035583/images/interstdnt_jcsrv3.jpg'
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
                  src='https://res.cloudinary.com/azeem413/image/upload/v1664035545/images/bechlorimggirl_lfiell.jpg'
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
                  src='https://res.cloudinary.com/azeem413/image/upload/v1664035586/images/postgraduatepics_popj9n.jpg'
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
            <h1 className='custom_head rounded mt-5 '>
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
                  Mass Comm.
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
        <h2 className='mb-5 h2_border rounded'> Gallary </h2>
        <Slider {...settings1}>
          <div>
            <img
              className='Img'
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035572/images/Gallary/cricket_Ground_wx2nun.jpg'
              alt='Credit to Joshua Earle on Unsplash'
            />
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035583/images/Gallary/library_jf2ldg.jpg'
              alt='Credit to Alisa Anton on Unsplash'
            />
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035591/images/Gallary/gallary_6_rgpbi1.png'
              alt='Credit to Igor Ovsyannykov on Unsplash'
            />
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035586/images/Gallary/gallary_5_xmvaqf.png'
              alt='Credit to Pierre Châtel-Innocenti on Unsplash'
            />
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035582/images/Gallary/pricipal_vj8zjp.jpg'
              alt='Credit to Richard Nolan on Unsplash'
            />
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035582/images/Gallary/registrar_office_rev0mz.jpg'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035581/images/Gallary/hostel_ejydew.jpg'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035580/images/Gallary/gallary_7_xtvup8.png'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035580/images/Gallary/hajveri_ground_oer61m.jpg'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035578/images/Gallary/gallary_8_hrl1ny.png'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035578/images/Gallary/gallary_4_kaeszw.png'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Gallary/gallary_3_bmjsf1.png'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>{' '}
          <div>
            <img
              src='https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Gallary/canteen_dum0xo.jpg'
              alt='Credit to Cristina Gottardi on Unsplash'
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
