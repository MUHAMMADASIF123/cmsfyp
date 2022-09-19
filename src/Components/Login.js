import React, { useState } from 'react';
// import uniqid from "uniqid";
import axios from 'axios';
import './Login.css';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var user = {
      email: email,
      password: password,
    };
    // console.log(users);
    e.preventDefault();
    await axios
      .post('/api/post/login', user)
      .then((res) => {
        localStorage.setItem('token-info', JSON.stringify(user));
        alert(JSON.stringify(res.data));
        history('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section class='Wraper  sm-mt-5 '>
        <div class='container '>
          <div class='col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center mt-5 vh-100'>
            <form
              class='shadow p-5 mt-5 w-100 rounded-top'
              style={{ backgroundColor: 'white' }}
            >
              <h3 class='text-white fw-bolder fs-4 rounded  w-100 mb-2'>
                Login to Here !
              </h3>
              <div class='fw-normal text-warning fw-bold mb-4'>
                New here ?{' '}
                <a
                  href='#'
                  class='text-decoration-none text-warning fw-bolder'
                >
                  create a account
                </a>
              </div>
              <div class='form-floating mb-3 d-flex justify-content-center '>
                {/* <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> */}
                <input
                  type='email'
                  // id="floatingInput"
                  placeholder='Enter Your Email'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  className='form-control w-75 text-center mt-2 border-warning'
                />
                <label for='floatingInput'>Email address</label>
              </div>
              <div class='form-floating d-flex justify-content-center'>
                {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                 */}
                <input
                  type='password'
                  id='floatingPassword'
                  placeholder='password'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  className='form-control w-75 text-center mt-2 border-warning'
                />
                <label for='floatingPassword'>Password</label>
              </div>
              <div class='mt-2 text-end'>
                <a
                  href='#'
                  class='fw-bold text-primary text-decoration-none me-5 text-warning '
                >
                  {' '}
                  Forget password ?
                </a>
              </div>
              {/* <button type="submit" class="btn btn-primary w-100 my-4">Continue</button> */}
              <button
                type='submit'
                onClick={handleuser}
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-75 border-0 rounded-pill '
              >
                {' '}
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
