import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>

      <div className='container '>
        <Slider {...settings}>
          <div className=' d-inline'>
            {/* <h3>1</h3> */}
            <img src='./images/colglogo.png' />
          </div>
          <div className=''>
            {/* <h3>2</h3> */}
            <img src='./images/colglogo.png' />
          </div>
          <div className=''>
            {/* <h3>3</h3> */}
            <img src='./images/colglogo.png' />
          </div>
          <div className=''>
            {/* <h3>4</h3> */}
            <img src='./images/colglogo.png' />
          </div>
          <div className=''>
            {/* <h3>5</h3> */}
            <img src='./images/colglogo.png' />
          </div>
        </Slider>
        <div>
          <p>
            <h1>Principle's Message</h1>
            <h2>Dear New Entrants:</h2>
            It is a matter of great pleasure for me to welcome
            you at Government College of Science, Wahdat Road,
            Lahore. After getting admission, I am hopeful, you
            would be able to get, maximum benefit from the
            excellent academic traditions of this institution.
            Necessary information about college and its smooth
            working have been included in this new bilingual
            prospectus students should study it to get update and
            relevant information. When I assumed the principal
            ship of this college. I had a determination to strive
            for the restoration of the excellent academic
            traditions of this institution. It has shared
            excellent and remarkable learning conditions with
            extracurricular activities, dignified and discipline.
            Not only renowned scholars and intellectuals have
            taught here, many students of this college earned
            outstanding repute in various walks of life. I should
            mention Ph.D. and M.Phil teachers greater in number
            here than any other college. I have pinned following
            targets as head of this institution. Regular class
            work according to timetable, at all levels would be
            ensured. Discipline would be maintained with strict
            compliance of dress code, for boys and girls.
            Convening of extracurricular activities like
            English/Urdu debates, declamation contest, poetry
            recitation competition and sports related activities
            would be promoted. Special attention would be paid to
            overall security measures and allied arrangements so
            that security is ensured for all male and female
            students. General conditions in library would be
            improved so that students of M.Sc. /M.A and BS (Hons)
            4 years program could get books without any
            difficulty. College academic magazine “Dabistan”
            would be published on yearly bases by talent hunt and
            by polishing their hidden capabilities and creative
            traits. I am confident of utmost co-operation from
            worthy colleagues, respected faculty member’s and
            office staff. Through joint efforts we can make
            beautiful addition in the glowing traditions of this
            high seat of learning. Prof. Dr. Tahseen Razzaq
            Principal
          </p>
        </div>
      </div>
      <section>
        <h1>Programs</h1>
        <div className='d-flex'>
          <div className='col-md-4 bg-primary h-75'>
            Intermediate Programs
          </div>
          <div className='col-md-4 bg-success h-75'>
            BS Programs
          </div>
          <div className='col-md-4 bg-warning h-75'>
            master Programs
          </div>
        </div>
      </section>
      <div class='container mt-3 dept_container rounded shadow mb-5'>
        <h1 className='custom_head mt-1 '> BS Departments</h1>

        <div class='row'>
          <div className='col-md-2  bsdept mt-3 col-lg-3'>
            <a className='' href='/'>
              Computer Science
            </a>
          </div>

          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Chemistry
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Physics
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Mathematics
            </a>
          </div>
        </div>
        <div class='row'>
          <div className='col-md-2 bsdept mt-3 col-lg-3'>
            <a className='' href='/'>
              Economics
            </a>
          </div>

          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Islamiyat
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              BBA
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Mass Communication
            </a>
          </div>
        </div>
        <div class='row'>
          <div className='col-md-2 bsdept mt-3 col-lg-3'>
            <a className='' href='/'>
              Sociology
            </a>
          </div>

          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Botany
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Zoology
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Education
            </a>
          </div>
        </div>
        <div class='row'>
          <div className='col-md-2 bsdept mt-3 col-lg-3'>
            <a className='' href='/'>
              {' '}
              English
            </a>
          </div>

          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Urdu
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Political Science
            </a>
          </div>
          <div class='col-md-2 mt-3 bsdept col-lg-3'>
            <a className='' href='/'>
              Statistics
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div class='row'>
          <div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />

            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
          </div>

          <div class='col-lg-4 mb-4 mb-lg-0'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Mountains in the Clouds'
            />

            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
          </div>

          <div class='col-lg-4 mb-4 mb-lg-0'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Waves at Sea'
            />

            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
              class='w-100 shadow-1-strong rounded mb-4'
              alt='Yosemite National Park'
            />
          </div>
        </div>
      <div className='conatiner'>
        <div className='slider'>
          <Slider {...settings}>
            <div>
              {/* <h3>1</h3> */}

              <img
                className='justify'
                src='./images/hajverihall.jpg'
              />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img
                className='justify'
                src='./images/clgentrance.jpg'
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className='shadow rounded '>
        <section>
          <h1 className='container program_border'>Programs</h1>
          {/* <hr className='mr-25 ml-25' /> */}
          <div className='d-flex justify-content-center  '>
            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 '>
              <div class='card '>
                <img
                  src='/images/interstdnt.jpg'
                  class='card-img-top'
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
                    class='button_programs bg-warning'
                  >
                    All Courses
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 '>
              <div class='card'>
                <img
                  src='/images/bechlorimg.jpg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body programs'>
                  <h5 class='card_title'>Bechelors</h5>
                  <p class='textp'>
                    Now its all upto you to choose wisely, which
                    field you have most interest and harn your
                    specifical skills.
                  </p>
                  <a
                    href='/Bacholer_programs_list'
                    class='button_programs bg-warning'
                  >
                    All Courses
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4'>
              <div class='card'>
                <img
                  src='/images/interstdnt.jpg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body programs'>
                  <h5 class='card_title'>Post Graduate</h5>
                  <p class='textp'>
                    You are going to enter in the phase where you
                    will master those specific skills.
                  </p>
                  <a href='#' class='button_programs bg-warning'>
                    All Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1>Bs Departement</h1>
          <div className='d-flex'>
            <div className='col-md-3 bg-primary h-75'>
              Intermediate Programs
            </div>
            <div className='col-md-3 bg-success h-75'>
              BS Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-md-3 bg-primary h-75'>
              Intermediate Programs
            </div>
            <div className='col-md-3 bg-success h-75'>
              BS Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-md-3 bg-primary h-75'>
              Intermediate Programs
            </div>
            <div className='col-md-3 bg-success h-75'>
              BS Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
            <div className='col-md-3 bg-warning h-75'>
              master Programs
            </div>
          </div>
        </section>
        <section>
          <div class='container mb-5'>
            <div class='row'>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
              <div class='col-md-4 mt-3 col-lg-3'>
                <img
                  src='https://source.unsplash.com/collection/190727/1500x900'
                  class='img-fluid'
                  alt='image'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
