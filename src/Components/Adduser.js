import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Adduser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    
  });

  const history = useNavigate();
  const { name, email, password, cpassword, userid } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
      userid:uniqid()
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post("/api/post/adduser", users)
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
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={onInputChange}
            className="form-control mt-2"
          />
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
          <input
            type="password"
            placeholder="confirm password"
            name="cpassword"
            value={cpassword}
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

export default Adduser;
