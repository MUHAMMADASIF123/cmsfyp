import React from 'react';

function Admin() {
  return (
    //no addition
    <div className='container mt-5 mb-5 justify-content-center '>
      <form className='w-100 mb-5 '>
        <div className='row mt-5 shadow justify-content-start d-flex bg-white'>
          <div className='mt-3 ms-3 '>
            <h5 className='justify-content-start d-flex'>
              Search By
            </h5>
          </div>
          <div className='col-md-4 mt-5'>
            <h6 className='justify-content-start d-flex ms-3'>
              Departments
            </h6>
            <div class='input-group mb-3'>
              <div class='input-group-prepend'>
                {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
              </div>
              <select
                class='custom-select ms-3'
                id='inputGroupSelect01'
                style={{ width: 214 }}
              >
                <option selected>BSIT</option>
                <option selected>BSCS</option>
                <option value='1'>BBA</option>
                <option value='2'>Botany</option>
                <option value='3'>Chemistry</option>
                <option value='3'>Communication Studies</option>
                <option value='3'>Economics</option>
                <option value='3'>Education</option>
                <option value='3'>English</option>
                <option value='3'>Political Science</option>
                <option value='3'>Mathematics</option>
                <option value='3'>Sociology</option>
                <option value='3'>Staistics</option>
                <option value='3'>Urdu</option>
                <option value='3'>Zoology</option>
                <option value='3'>Physics</option>
              </select>
            </div>
          </div>
          <div className='col-md-4 mt-5'>
            <h5>Students Count</h5>
            <input placeholder='Enter number of Students'></input>
          </div>
          <div className='col-md-4 mt-5'>
            <h5 className='justify-content-start d-flex ms-3'>
              Shift
            </h5>
            <div class='input-group mb-3'>
              <div class='input-group-prepend'>
                {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
              </div>
              <select
                class='custom-select'
                id='inputGroupSelect01'
                style={{ width: 220 }}
              >
                <option selected>Morning</option>
                <option value='1'>Evening</option>
              </select>
            </div>
          </div>
          <div className='mt-5 mb-5'>
            <button type='submit'>Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Admin;
