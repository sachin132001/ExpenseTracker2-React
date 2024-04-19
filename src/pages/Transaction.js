import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Transaction() {
  const [trans, setTrans] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8080/map-Tview')
    .then(response => {
      setTrans(response.data);
    })
    .catch(error => console.log("ERROR OCCURRED!", error));
}, []);


  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8080/Tdelete/${id}`)// Send the id of the payment to delete
      if (response.data==='deleted') {
        // Remove the deleted payment from the local state
        setTrans(trans.filter(transaction => transaction.tid !== id));
        alert("TRANSACTION DELETED SUCCESSFULLY!");
      } else {
        alert("FAILED TO DELETE TRANSACTION!");
      }
    } catch (error) {
      alert("ERROR OCCURRED DURING DELETING TRANSACTION");
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
                <Link className="nav-link disable" aria-current="page" >TRANSACTION</Link>
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
              <h2><b>Transaction</b> <Link className="btn btn-primary" to="/map-addTransaction">ADD TRANSACTION</Link></h2>

              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                  <th>Transaction ID</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Transaction Date</th>
                  <th>Particulars</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {trans.map(transaction => (
                    <tr key={transaction.tid}>
                      <td>{transaction.tid}</td>
                      <td>{transaction.tcat}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.tdate}</td>
                      <td>{transaction.particulars}</td>
                      <td><Link to={`/Tedit/${transaction.tid}`}><button className="btn btn-warning">Edit</button></Link></td>
                      <td>
                        <form onSubmit={(e) => {e.preventDefault();alert("Are u sure u wanna delete!"); handleDelete(transaction.tid); }}>
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
