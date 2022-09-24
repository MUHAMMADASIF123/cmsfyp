import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegistrationForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const history = useNavigate();
  const { name, email, password, cpassword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [program, setProgram] = useState('intermediate');
  const [programList, setProgramList] = useState('preEng');

  const handleProgram = (e) => {
    console.log('called');
    setProgram(e.target.value);
    console.log(program);
  };

  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
      userid: uniqid(),
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post('/api/post/registeruser', users)
      .then((res) => {
        alert(res.data);
        // localStorage.getItem("user",JSON.stringify(result));
        // localStorage.setItem('token-info', JSON.stringify(users));

        history('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class='mt-5  wraper  '>
        <div class='container '>
          <div class=' text-center '>
            <h1>
              Government Graduate Science College Wahdat Road
              Lahore
            </h1>
            <h1 className='border rounded-pill h-25 w-75 d-inline-block'>
              Application For Addmission-2022
            </h1>

            <form class='rounded shadow p-5 mt-5 h-100 w-100 bg-white'>
              <div class='input-group mb-3 d-flex justify-content-end'>
                <h6 className='me-3 mt-2'>Shift</h6>
                <select
                  class='custom-select me-5'
                  id='inputGroupSelect01'
                  style={{ width: 220 }}
                >
                  <option selected value='morning'>
                    Morning
                  </option>

                  <option value='evening'>Evening</option>
                </select>
              </div>

              <div className='row '>
                <div className='col-md-4'>
                  <div class='form-check'>
                    <div class='input-group mb-3'>
                      <select
                        class='custom-select'
                        id='inputGroupSelect01'
                        style={{ width: 220 }}
                        onChange={(e) =>
                          setProgram(e.target.value)
                        }
                      >
                        <option selected value='intermediate'>
                          Intermediate
                        </option>
                        <option value='graduate'>
                          Graduate
                        </option>
                        <option value='postGraduate'>
                          Post Graduate
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div class='form-check'>
                    <div class='input-group mb-3'>
                      <div>
                        {program === 'graduate' ? (
                          <select
                            class='custom-select'
                            id='inputGroupSelect01'
                            style={{ width: 214 }}
                          >
                            <option selected>BSIT</option>
                            <option selected>BSCS</option>
                            <option value='1'>BBA</option>
                            <option value='2'>Botany</option>
                            <option value='3'>Chemistry</option>
                            <option value='3'>
                              Communication Studies
                            </option>
                            <option value='3'>Economics</option>
                            <option value='3'>Education</option>
                            <option value='3'>English</option>
                            <option value='3'>
                              Political Science
                            </option>
                            <option value='3'>
                              Mathematics
                            </option>
                            <option value='3'>Sociology</option>
                            <option value='3'>Staistics</option>
                            <option value='3'>Urdu</option>
                            <option value='3'>Zoology</option>
                            <option value='3'>Physics</option>
                          </select>
                        ) : program === 'intermediate' ? (
                          <select
                            class='custom-select'
                            id='inputGroupSelect01'
                            style={{ width: 214 }}
                          >
                            <option value='i.com'>I.Com</option>
                            <option value='i.c.s'>I.C.S</option>
                            <option value='general science'>
                              General Science
                            </option>
                          </select>
                        ) : (
                          <select
                            className='custom-select '
                            id='inputGroupSelect03'
                            style={{ width: 214 }}
                          >
                            <option selected value='chemistry'>
                              Chemistry
                            </option>
                            <option value='3'>Economics</option>

                            <option value='3'>English</option>

                            <option value='3'>
                              Mathematics
                            </option>
                            <option value='3'>Physics</option>
                            <option value='3'>
                              B.Com(Information Technology)
                            </option>
                            <option value='3'>Urdu</option>
                            <option value='3'>Zoology</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row g-3'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    for='exampleInputName'
                  >
                    Student Name:
                  </label>
                  {/* <h6 className="ms-0">name</h6> */}
                  <input
                    type='text'
                    class='form-control'
                    id='exampleInputName'
                    placeholder='Enter Your Name'
                    aria-label='First name'
                  />
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    for='exampleInputPhone'
                  >
                    Student's Phone Number:
                  </label>
                  <input
                    type='number'
                    class='form-control'
                    id='exampleInputPhone'
                    placeholder='Enter Your Phone Number'
                    aria-label='Last name'
                  />
                </div>
              </div>
              <div class='row g-3 mt-2'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    for='exampleInputName'
                  >
                    Student's Father Name:
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter Your Father Name'
                    id='exampleInputName'
                    aria-label='First name'
                  />
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    for='exampleInputPhone'
                  >
                    Student's Father Phone Number:
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleInputPhone'
                    placeholder='Phone'
                    aria-label='Last name'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <label
                    className='d-flex justify-content-start'
                    for='exampleInputCnic'
                  >
                    Student's Cnic Number:
                  </label>
                  <input
                    type='number'
                    class='form-control'
                    id='exampleInputCnic'
                  />
                </div>
                <div className='col-md-4'>
                  <label
                    for='inputState'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Religion
                  </label>
                  <select id='inputState' class='form-select '>
                    <option selected>Islam</option>
                    <option>Chrision</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <label
                    for='inputZip'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Domicile
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputZip'
                  />
                </div>
              </div>
              {/* address section */}
              <div class='row g-3'>
                <div class='col-md-6'>
                  <label
                    for='inputEmail4'
                    className='form-label d-flex justify-content-start'
                  >
                    Date Of Birth
                  </label>
                  <input
                    type='date'
                    class='form-control'
                    id='inputEmail4'
                  />
                </div>
                <div class='col-md-6'>
                  <label
                    for='inputPassword4'
                    className='form-label d-flex justify-content-start'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='inputPassword4'
                  />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label
                      for='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Father Occupation
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='inputOccupation4'
                      placeholder='Enter Father Occupation'
                      aria-label='First name'
                    />
                  </div>

                  <div className='col-md-6'>
                    <label
                      for='inputCnic'
                      className='form-label d-flex justify-content-start'
                    >
                      {' '}
                      Father's Cnic Number
                    </label>
                    <input
                      type='number'
                      class='form-control'
                      id='inputCnic'
                      placeholder="Enter Father's Cnic Number"
                      aria-label='First name'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <label
                      for='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gradian's Name
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='inputOccupation4'
                      placeholder="Enter Gradian's Name"
                      aria-label='First name'
                    />
                  </div>

                  <div className='col-md-4'>
                    <label
                      for='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gradian's Occupation
                    </label>
                    <input
                      type='number'
                      class='form-control'
                      placeholder="Enter gardian's Occupation"
                      aria-label=' First name'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label
                      for='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gardian's Phone Number
                    </label>
                    <input
                      type='number'
                      class='form-control'
                      placeholder="Enter Gradian's phone Number"
                      aria-label='First name'
                    />
                  </div>
                </div>
                <div class='col-12'>
                  <label
                    for='inputAddress'
                    className='form-label d-flex justify-content-start'
                  >
                    Address
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputAddress'
                    placeholder='1234 Main St'
                  />
                </div>
                <div class='col-12'>
                  <label
                    for='inputAddress2'
                    className='d-flex justify-content-start form-label'
                  >
                    Address 2
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputAddress2'
                    placeholder='Apartment, studio, or floor'
                  />
                </div>
                <div class='col-md-6'>
                  <label
                    for='inputCity'
                    className=' d-flex justify-content-start form-label'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputCity'
                  />
                </div>
                <div class='col-md-4'>
                  <label
                    for='inputState'
                    className=' d-flex justify-content-start form-label'
                  >
                    State
                  </label>
                  <select id='inputState' class='form-select'>
                    <option selected>Punjab</option>
                    <option>Balochistan</option>
                    <option>Sindh</option>
                    <option>Khyber Pakhtunkhwa</option>
                    <option>Gilgit-Baltistan</option>
                  </select>
                </div>
                <div class='col-md-2'>
                  <label
                    for='inputZip'
                    className='form-label d-flex justify-content-start '
                  >
                    Zip
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputZip'
                  />
                </div>
                <div className='container mt-5 ml-75'>
                  {' '}
                  {/* table for qualifications */}
                  <table className='table border w-25'>
                    <thead>
                      <tr>
                        <th scope='col'>Examination</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Roll No</th>
                        <th scope='col'>Marks</th>
                        <th scope='col'>%age</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Board</th>
                        <th scope='col'>School/College</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Matric</th>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>Intermediate</th>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text '
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>BA/B.SC</th>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                type='submit'
                onClick={handleuser}
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-75 border-0 rounded-pill'
              >
                {' '}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
