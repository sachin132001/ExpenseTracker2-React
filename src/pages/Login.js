import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
    const[userOrPass,setUserOrPass]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit= async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/login',{
            userOrPass:userOrPass,
            password:password

            });
            if(response.data==='home'){
                window.location.href='/home';
            }else{
                alert("LOGIN FAILED!")
            }
        }catch(error){
            alert("ERROR IN LOGIN")
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

<h4 className="text-center bg-success text-white">Login</h4> 
<br></br>

<form onSubmit={handleSubmit}>
    

    <div className="mb-3">
      <label for="text" className="form-label">Email or Username</label>
      <input type="text"
       className="form-control" 
       id="email"
       name="userOrPass"
       value={userOrPass}
       onChange={(e)=>setUserOrPass(e.target.value)}
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
    
    <button type="submit" className="btn btn-success btn-large btn block">LOGIN</button>
  </form>

  <br></br>
  Not a User? <Link to='/map-register'>REGISTER</Link>

</div>

<div className="col-md-4"></div>

</div>


</div>



    </div>
  )
}
