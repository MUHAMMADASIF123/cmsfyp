import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RegistrationForm () {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    
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
      userid:uniqid()
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post("/api/post/registeruser", users)
      .then((res) => {
        alert(res.data);
        // localStorage.getItem("user",JSON.stringify(result));
        // localStorage.setItem('token-info', JSON.stringify(users));
        
          history('/login')
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div>
    
   
    <div class="mt-5  wraper  ">
<div class="container">
    <div class=" text-center">
        <h1>Government Graduate Science College Wahdat Road Lahore</h1>
        <h1 className="border rounded-pill h-25 w-75 d-inline-block" >Application For Admission-2022</h1>

        <form class="rounded shadow p-5 mt-5 h-100">
        <div className="row">
  <div className="col-md-4">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
    <h6>Group For Intermediate</h6>
    
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{width:200}}>
    <option selected>F.Sc(Pre-Medical)</option>
    <option value="1">F.Sc(Pre-engineering)</option>
    <option value="2">F.A</option>
    <option value="2">I.Com</option>
    <option value="2">I.C.S</option>
    <option value="3">G.Sc</option>
  </select>
</div>
</div>
<div className="col-md-4">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
    <h6>Major discipline for BS 4 year</h6>
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{width:214}}>
    <option selected>BSIT</option>
    <option selected>BSCS</option>
    <option value="1">BBA</option>
    <option value="2">Botany</option>
    <option value="3">Chemistry</option>
    <option value="3">Communication Studies</option>
    <option value="3">Economics</option>
    <option value="3">Education</option>
    <option value="3">English</option>
    <option value="3">Political Science</option>
    <option value="3">Mathematics</option>
    <option value="3">Sociology</option>
    <option value="3">Staistics</option>
    <option value="3">Urdu</option>
    <option value="3">Zoology</option>
    <option value="3">Physics</option>



  </select>
</div>
</div>
<div className="col-md-4">
<div class="input-group mb-3 ">
  <div class="input-group-prepend">
    {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
   
    <h6>Departments For M.A/M.Sc</h6>
  </div>
  <select className="custom-select " id="inputGroupSelect01" style={{width:214}}>
    <option selected>Chemistry</option>

   
    <option value="3">Economics</option>
   
    <option value="3">English</option>
    
    <option value="3">Mathematics</option>
    <option value="3">Physics</option>
    <option value="3">B.Com(Information Technology)</option>
    <option value="3">Urdu</option>
    <option value="3">Zoology</option>
  </select>
</div>
</div>
</div>
        <div class="row g-3">
  <div className="col">
    <input type="text" class="form-control" placeholder="Student name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" class="form-control" placeholder="Phone" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div className="col">
    <input type="text" class="form-control" placeholder="Father name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" class="form-control" placeholder="Phone" aria-label="Last name"/>
  </div>
</div>
<div className="row">
<div className="col-md-4">
    <label for="inputCity" class="form-label">Cnic</label>
    <input type="number" class="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" class="form-label">Relign</label>
    <select id="inputState" class="form-select">
      <option selected>Relgin</option>
      <option>islam</option>
    </select>
  </div>
  <div className="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  </div>
  {/* address section */}
  <div class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Date Of Birth</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div className="row">
  <div className="col-md-6">
    <input type="text" class="form-control" placeholder="Father Occupation" aria-label="First name"/>
  </div>

  <div className="col-md-6">
    <input type="number" class="form-control" placeholder="Father's Cnic Number" aria-label="First name"/>
  </div>
  </div>
  <div className="row">
  <div className="col-md-4">
    <input type="text" class="form-control" placeholder="Gradian's Name" aria-label="First name"/>
  </div>

  <div className="col-md-4">
    <input type="number" class="form-control" placeholder="Occupation" aria-label="First name"/>
  </div>
  <div className="col-md-4">
    <input type="number" class="form-control" placeholder="phone" aria-label="First name"/>
  </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

 {/* table for qualifications */}
 <table className="table border">
  <thead>
    <tr>
      <th scope="col">Examination</th>
      <th scope="col">Year</th>
      <th scope="col">Roll No</th>
      <th scope="col">Marks</th>
      <th scope="col">%age</th>
      <th scope="col">Subject</th>
      <th scope="col">Board</th>
      <th scope="col">School/College</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Matric</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    
    </tr>
    <tr>
      <th scope="row">Intermediate</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      
    </tr>
    <tr>
      <th scope="row">BA/B.SC</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  
 
</div>
                <button
            type="submit"
            onClick={handleuser}
            className="mt-2  btn btn-primary w-100"
          >
            {" "}
            Signup
          </button>

        </form>
    </div>
</div>




</div>

    </div>
  );
}

export default RegistrationForm;
