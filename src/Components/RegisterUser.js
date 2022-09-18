import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegisterUser() {
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
        // console.log(res.data)
        history('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section class='mt-5 wraper '>
        <div class='container vh-100'>
          <div class='col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center'>
            <div class='logo '>
              {/* <img class="w-25 h-25" src="/images/1218776_company_logo_apple_ipad_iphone_icon.png"/> */}
            </div>
            <form
              class=' shadow p-5 w-100 mt-5'
              style={{ backgroundColor: 'white' }}
            >
              <h1 className='mb-2 text-white rounded   '>
                Register Here !
              </h1>

              <div class='form-floating d-flex justify-content-center'>
                {/* <input type="text" class="form-control" id="floatingPassword" placeholder="Last Name"/> */}
                <input
                  type='text'
                  id='floatingPassword'
                  placeholder='name'
                  name='name'
                  value={name}
                  onChange={onInputChange}
                  className='form-control mt-2 w-75 border-warning '
                  style={{ height: '40px' }}
                />
                <label for='floatingPassword'>Your Name</label>
              </div>
              <div class='form-floating  d-flex justify-content-center mt-2 mb-3'>
                {/* <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> */}
                <input
                  type='email'
                  id='floatingInput'
                  placeholder='email'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  className='form-control mt-2 w-75 border-warning'
                  style={{ height: '40px' }}
                />
                <label for='floatingInput'>Email address</label>
              </div>
              <div class='form-floating d-flex justify-content-center'>
                <input
                  type='password'
                  id='floatingPassword'
                  placeholder='password'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  className='form-control w-75 mt-2 border-warning'
                  style={{ height: '40px' }}
                />
                {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> */}
                <label for='floatingPassword'>Password</label>
              </div>
              <div class='information mt-1 text-warning d-inline-block '>
                <p>
                  Use 0 or more characters with a mix of
                  letters,numbers{' '}
                </p>
              </div>
              <div class='form-floating d-flex justify-content-center'>
                {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> */}
                <input
                  type='password'
                  id='floatingPassword'
                  placeholder='confirm password'
                  name='cpassword'
                  value={cpassword}
                  onChange={onInputChange}
                  className='form-control mt-2 w-75 border-warning'
                  style={{ height: '40px' }}
                />
                <label for='floatingPassword'>
                  {' '}
                  Conform Password
                </label>
              </div>

              {/* <button type="submit" class="btn btn-primary w-100 my-4">Continue</button>
               */}
              <button
                type='submit'
                onClick={handleuser}
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-75 border-0 rounded-pill '
              >
                {' '}
                Signup
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterUser;
