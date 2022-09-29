import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function Admin() {
  return (
    <>
      <div className='container shadow rounded vh-100'>
        <div className='row mt-5'>
          <div className='col-3  mt-5 d-flex flex-column '>
            <div className='card'>
              <div className='card-body text-white rounded shadow'>
                <h5 className='card-title textLeft'>
                  Student Id: 55813t5487t
                </h5>
                <h5 className='card-title  textLeft'>
                  Student Name: ali
                </h5>
                <h5 className='card-title textLeft'>
                  Father Name: asif
                </h5>

                <Link
                  to={'/StudentView'}
                  className='btn mt-3  text-white btn-warning'
                >
                  {' '}
                  View Student
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3 mt-5 d-flex flex-column '>
            <div className='card'>
              <div className='card-body text-white rounded shadow'>
                <h5 className='card-title textLeft'>
                  Student Id: 55813t5487t
                </h5>
                <h5 className='card-title  textLeft'>
                  Student Name: ali
                </h5>
                <h5 className='card-title textLeft'>
                  Father Name: asif
                </h5>
                <Link
                  to={'/StudentView'}
                  className='btn mt-3  text-white btn-warning'
                >
                  {' '}
                  View Student
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3 col-md-3  mt-5 d-flex flex-column '>
            <div className='card'>
              <div className='card-body text-white rounded shadow'>
                <h5 className='card-title textLeft'>
                  Student Id: 55813t5487t
                </h5>
                <h5 className='card-title  textLeft'>
                  Student Name: ali
                </h5>
                <h5 className='card-title textLeft'>
                  Father Name: asif
                </h5>
                <Link
                  to={'/StudentView'}
                  className='btn mt-3  text-white btn-warning'
                >
                  {' '}
                  View Student
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3 mt-5 d-flex flex-column '>
            <div className='card'>
              <div className='card-body text-white rounded shadow'>
                <h5 className='card-title textLeft'>
                  Student Id: 55813t5487t
                </h5>
                <h5 className='card-title  textLeft'>
                  Student Name: ali
                </h5>
                <h5 className='card-title textLeft'>
                  Father Name: asif
                </h5>
                <Link
                  to={'/StudentView'}
                  className='btn mt-3  text-white btn-warning'
                >
                  {' '}
                  View Student
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
