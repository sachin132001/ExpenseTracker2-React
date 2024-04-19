import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import d1 from './image/d1.jpg'
import d2 from './image/d3.jpg'
import d4 from './image/d4.jpg'


export default function Home() {
  

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/logout'); // Adjust the URL as per your backend endpoint
      localStorage.removeItem('token'); // Clear token or any other stored data
      window.location.href = '/map-login'; // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">EXPENSE TRACKER</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/map-view">CATEGORY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/map-Vview">VENDOR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/map-Pview">PAYMENT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/map-Tview">TRANSACTION</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/report">REPORT</Link>
            </li>
            
          </ul>
          <button onClick={handleLogout} className="btn btn-light ms-auto">Logout</button>
        </div>
      </div>
    </nav>

    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"
        src={d1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h5>WELCOME TO EXPENSE TRACKER</h5>
          <p>Manage Your Personal Expenses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"
        src={d2}
        alt="Second slide"
        />
        
        <Carousel.Caption>
        <h5>WELCOME TO EXPENSE TRACKER</h5>
          <p>Manage Your Payments</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"
        src={d4}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h5>WELCOME TO EXPENSE TRACKER</h5>
          <p>Empower Yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
