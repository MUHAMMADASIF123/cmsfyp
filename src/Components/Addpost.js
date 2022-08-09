import React, { useState } from 'react'
import  uniqid from 'uniqid';
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
function Addpost() {
  const[post,setPost]=useState({
    title:"",
    imgurl:"",
    description:""
    


})


  const history=useNavigate();
  const { title,imgurl,description,postid } = post;
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlepost = async (e) => {
    var posts={
      title:title,
      imgurl:imgurl,
      description:description,
      postid:uniqid()
          }
          console.log(posts)
    e.preventDefault();
    await axios.post("/api/post/addnewpost", posts).
    then(res=>{
      // alert(res.data)
      history('/')
    }).catch(err=>{
      console.log(err)
    });
    // history.push("/");
    // history("/home");

  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
      <Link to={'/'} className="btn btn-primary"> back to home</Link>
        <div>
        <input type='text' placeholder='title' name='title' value={title} onChange={onInputChange} className='form-control mt-2' />
        <input type='text' placeholder='imgurl' name='imgurl' value={imgurl} onChange={onInputChange} className='form-control mt-2' />
        <textarea rows='10' cols='30' placeholder='descripion'  name='description' value={description} onChange={onInputChange} className='form-control mt-2'></textarea>
        <button type='submit' onClick={handlepost} className='mt-2  btn btn-success'> addpost</button>
        
        </div>
      </div>
    </div>
  )
}

export default Addpost