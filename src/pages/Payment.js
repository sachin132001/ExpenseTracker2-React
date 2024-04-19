import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Payment() {
  const [pay, setPay] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/map-Pview')
      .then(response => {
        setPay(response.data);
      })
      .catch(error => console.log("THERE WAS AN ERROR", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8080/Pdelete/${id}`)// Send the id of the payment to delete
      if (response.data==='deleted') {
        // Remove the deleted payment from the local state
        setPay(pay.filter(payment => payment.pid !== id));
        alert("PAYMENT DELETED SUCCESSFULLY!");
      } else {
        alert("FAILED TO DELETE PAYMENT!");
      }
    } catch (error) {
      alert("ERROR OCCURRED DURING DELETING PAYMENT");
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
                <Link className="nav-link disable" aria-current="page">PAYMENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/map-Tview">TRANSACTION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/report">REPORT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron p-3">
              <h2><b>Payment</b> <Link className="btn btn-primary" to="/map-addPayment">ADD PAYMENT</Link></h2>

              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Payment Type</th>
                    <th>Payment Mode</th>
                    <th>Payment Desc</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {pay.map(payment => (
                    <tr key={payment.pid}>
                      <td>{payment.pid}</td>
                      <td>{payment.ptype}</td>
                      <td>{payment.pmode}</td>
                      <td>{payment.pdesc}</td>
                      <td><Link to={`/Pedit/${payment.pid}`}><button className="btn btn-warning">Edit</button></Link></td>
                      <td>
                        <form onSubmit={(e) => {e.preventDefault();alert("Are u sure u wanna delete!"); handleDelete(payment.pid); }}>
                          <button type="submit" className="btn btn-danger btn-xs">Delete</button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
