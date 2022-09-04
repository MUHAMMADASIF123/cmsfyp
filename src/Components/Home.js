import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

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
      <div className="conatiner">
        <div className="slider">
          <Slider {...settings}>
            <div>
              {/* <h3>1</h3> */}

              <img className="justify" src="./images/hajverihall.jpg" />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img className="justify" src="./images/clgentrance.jpg" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="shadow rounded ">
      <section>
        <h1 className="bg-warning  container">Programs</h1>
        <hr/>
        <div className="d-flex justify-content-center  ">
          <div className="col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 ">
            <div class="card ">
              <img
                src="/images/interstdnt.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body programs ">
                <h5 class="card_title">Intermediate</h5>
                <p class="textp">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button_programs bg-warning">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4 ">
            <div class="card">
              <img
                src="/images/interstdnt.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body programs">
                <h5 class="card_title">Bechelors</h5>
                <p class="textp">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button_programs bg-warning">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 h-25 w-25 ms-4 me-4 mt-4 mb-4">
            <div class="card">
              <img
                src="/images/interstdnt.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body programs">
                <h5 class="card_title">Post Graduate</h5>
                <p class="textp">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button_programs bg-warning">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
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
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img
                src="https://source.unsplash.com/collection/190727/1500x900"
                class="img-fluid"
                alt="image"
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
