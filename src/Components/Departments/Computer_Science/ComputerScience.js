import React from 'react';
import './ComputerScience.css';
function ComputerScience() {
  return (
    <div>
      <div className='container mt-5'>
        <div>
          <h2 className='mb-5 rounded'>
            Computer Science Department
          </h2>
          <div className=' d-flex head_p rounded shadow mb-5'>
            <div className=' heading rounded w-100 shadow mb-5'>
              <h1 className='ms-3 me-3 rounded'>
                Introduction of Department
              </h1>
              <p className='ms-3'>
                The Department of Computer Sciences is to ensure
                that the students take maximum advantage of the
                modern computer sciences to solve a wide range of
                complex scientific, technological and social
                problems.The mission of the department is to
                provide exemplary education and training to our
                students in the field of computer so that they
                productively contribute to academia and industry
              </p>
            </div>
            <div className=' image rounded '>
              <img
                src='/images/interstdnt.jpg'
                alt='Computer Departmnet Pic'
                width='400'
                height='300'
              ></img>
            </div>
          </div>
        </div>

        <div className='d-flex rounded shadow mb-5'>
          <div className='col-md-3 mt-3 col-lg-3'>
            <p>
              {' '}
              <b>Mr. Ejaz Ahmad</b>
              <br />
              Assistant Professor./HOD M.S
            </p>
          </div>
          <div className='col-md-3 mt-3'>
            <p>
              {' '}
              <b>Ms. Sadaf Siddiqi</b>
              <br />
              Assistant Professor. M.Phil.
            </p>
          </div>
          <div className='col-md-3 mt-3 col-lg-3'>
            <p>
              {' '}
              <b>Mr. Abdul Wahab</b>
              <br />
              Assistant Professor. M.Phil.
            </p>
          </div>
        </div>
        <div>
          <button className='button'>
            <a> See Programe Detail</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComputerScience;
