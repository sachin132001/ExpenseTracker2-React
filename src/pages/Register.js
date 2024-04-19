import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit= async(event)=>{
        event.preventDefault();

        try{
            const response= await axios.post('http://localhost:8080/register',{
            name,
            email,
            password


            });
            if(response.data==='login'){
                window.location.href='/map-login';
            }else{
                alert("LOGIN FAILED!")
            }

        }catch(error){
            alert("ERROR DURING REGISTRATION!")
        }
    };

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" >EXPENSE TRACKER</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/map-register">REGISTER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/map-login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<div className="container mt-3">

<div className="row">

<div className="col-md-4">

</div>

<div className="col-md-4 jumbotron">

<h4 className="text-center bg-primary text-white">REGISTER</h4> 
<br></br>







<form onSubmit={handleSubmit}>
    

    <div className="mb-3">
      <label for="text" className="form-label">Username</label>
      <input type="text" 
      className="form-control"
       id="name" 
       name="name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
      required/>
    
    </div>
     <div className="mb-3">
      <label for="email" className="form-label">Email</label>
      <input type="email" 
      className="form-control" 
      id="email" 
      name="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required/>
    
    </div>
    <div className="mb-3">
      <label for="password" className="form-label">Password</label>
      <input type="password" 
      className="form-control" 
      id="password" 
      name="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required/>
    </div>
    
    <button type="submit" className="btn btn-primary btn-large btn block">REGISTER</button>
  </form>

  <br></br>
  Already a User? <Link to='/map-login'>LOGIN</Link>

</div>

<div className="col-md-4"></div>

</div>


</div>






    </div>
  )
}
