import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import d1 from './image/d1.jpg'
import d2 from './image/d3.jpg'
import d5 from './image/d5.jpg'


export default function Index(){
    return(
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
        src={d5}
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