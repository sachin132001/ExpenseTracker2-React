import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Report() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [report, setReport] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/report', {
        fromDate,
        toDate
      });
      
      setReport(response.data);
    } catch (error) {
      alert("AN ERROR OCCURRED!");
    }
  }
  const resetValues = () => {
    setFromDate('');
    setToDate('');
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
                <Link className="nav-link disable" aria-current="page" >REPORT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 jumbotron">
            <h4 className="text-center bg-info text-white">Report</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <div className="form-group col-md-6">
                  <label className="col-sm-2 col-form-label">FROM</label>
                  <input type="date" id="fromDate" name="fromDate" 
                    value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
                </div>
                <div className="form-group col-md-6">
                  <label className="col-sm-2 col-form-label">TO</label>
                  <input type="date" id="toDate" name="toDate" 
                    value={toDate} onChange={(e) => setToDate(e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-secondary" type="button" onClick={resetValues}>Reset</button>
              </div>
            </form>
            <div className="row">
              <div className="col-md-8">
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th>Category Type</th>
                      <th>Category Name</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.map((transaction, index) => (
                      <tr key={index}>
                        <td>{transaction[0]}</td>
                        <td>{transaction[1]}</td>
                        <td>{transaction[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}
