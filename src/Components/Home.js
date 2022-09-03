import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

 function Home() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (<>
      <div className="conatiner">
      <Slider {...settings}>
      <div className="justify">
        {/* <h3>1</h3> */}
        
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>2</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>3</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>4</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>5</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
     
    </Slider>
  <div>
    <p>
      <h1>Principle's Message</h1>
      <h2>Dear New Entrants:</h2>
It is a matter of great pleasure for me to welcome you at Government College of Science, Wahdat Road, Lahore. After getting admission, I am hopeful, you would be able to get, maximum benefit from the excellent academic traditions of this institution. Necessary information about college and its smooth working have been included in this new bilingual prospectus students should study it to get update and relevant information.
When I assumed the principal ship of this college. I had a determination to strive for the restoration of the excellent academic traditions of this institution. It has shared excellent and remarkable learning conditions with extracurricular activities, dignified and discipline. Not only renowned scholars and intellectuals have taught here, many students of this college earned outstanding repute in various walks of life. I should mention Ph.D. and M.Phil teachers greater in number here than any other college.
I have pinned following targets as head of this institution.

Regular class work according to timetable, at all levels would be ensured.
Discipline would be maintained with strict compliance of dress code, for boys and girls.
Convening of extracurricular activities like English/Urdu debates, declamation contest, poetry recitation competition and sports related activities would be promoted.
Special attention would be paid to overall security measures and allied arrangements so that security is ensured for all male and female students.
General conditions in library would be improved so that students of M.Sc. /M.A and BS (Hons) 4 years program could get books without any difficulty.
College academic magazine “Dabistan” would be published on yearly bases by talent hunt and by polishing their hidden capabilities and creative traits.
I am confident of utmost co-operation from worthy colleagues, respected faculty member’s and office staff. Through joint efforts we can make beautiful addition in the glowing traditions of this high seat of learning.



Prof. Dr. Tahseen Razzaq

Principal</p>
  </div>
    </div>
    <section>
      <h1>Programs</h1>
      <div className="d-flex">
        <div className="col-md-4 bg-primary h-75">Intermediate Programs</div>
        <div className="col-md-4 bg-success h-75">BS Programs</div>
        <div className="col-md-4 bg-warning h-75">master Programs</div>
      </div>
    </section>
    <section>
      <h1>Bs Departements</h1>
      <div className="d-flex">
        <div className="col-md-3 bg-primary h-75">Intermediate Programs</div>
        <div className="col-md-3 bg-success h-75">BS Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
      </div>
      <div className="d-flex">
        <div className="col-md-3 bg-primary h-75">Intermediate Programs</div>
        <div className="col-md-3 bg-success h-75">BS Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
      </div>
      <div className="d-flex">
        <div className="col-md-3 bg-primary h-75">Intermediate Programs</div>
        <div className="col-md-3 bg-success h-75">BS Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
        <div className="col-md-3 bg-warning h-75">master Programs</div>
      </div>
    </section>
 <section>

 <div class="container mb-5">
            <div class="row">
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-4 mt-3 col-lg-3">
                    <img src="https://source.unsplash.com/collection/190727/1500x900" class="img-fluid" alt="image"/>
                </div>
            </div>
        </div>
 </section>
    </>
    );
  }

  export default Home