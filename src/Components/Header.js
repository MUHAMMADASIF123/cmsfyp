import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
  const history=useNavigate();
  const logout = () => {
    localStorage.clear('token-info');
    // setIsLoggedin(false);
    history('/login')
  };
  // const auth= localStorage.getItem("token-info")
  var auth = JSON.parse(localStorage.getItem("token-info"));
  console.log(auth);
  return (
<div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">GCS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contactus">Contact Us</a>
        </li>

       
      </ul>
    
    {
        localStorage.getItem("token-info") ?
        <>
      <button onClick={logout} className="btn btn-primary me-2"> logout </button>
      {/* <Link to={'/login'} className="btn btn-primary me-2"> Login </Link> */}
      <Link to={'/profile'} className="btn btn-primary me-2"> {auth.email}</Link>
      </> :
      <>
      <Link to={'/login'} className="btn btn-primary me-2"> Login </Link>
      <Link to={'/registeruser'} className="btn btn-primary me-2"> Register</Link>
      
      </>
    
}
    

    </div>
  </div>

</nav>
</div>
  )
}

export default Header