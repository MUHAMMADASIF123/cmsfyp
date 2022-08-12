import React, { useState } from "react";
// import uniqid from "uniqid";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  // const history = useNavigate();
  const {  email, password, } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var users = {
    
      email: email,
      password: password,
    
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post("/api/post/login", users)
      .then((res) => {
        alert(res.data);
          // history('/')
      })
      .catch((err) => {
        console.log(err);
      });
    // history.push("/");
    // history("/home");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Link to={"/"} className="btn btn-primary">
          {" "}
          back to home
        </Link>
        <div>
         
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onInputChange}
            className="form-control mt-2"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
            className="form-control mt-2"
          />
         
          <button
            type="submit"
            onClick={handleuser}
            className="mt-2  btn btn-success"
          >
            {" "}
            signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
