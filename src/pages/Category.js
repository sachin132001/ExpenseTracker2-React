import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Category() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/map-view')
      .then(response => {
        console.log(response.data);
        setCat(response.data);
      })
      .catch(error => console.log("THERE WAS AN ERROR", error));
  }, []);

  const handleDelete=async(id)=>{
    try{
      const response=await axios.post(`http://localhost:8080/delete/${id}`)
      if(response.data==='deleted'){
        setCat(cat.filter(category=>category.cid !==id));
        alert("Category deleted successfully")
      }else{
        alert("Could not delete")
      }
    }catch(error){
      alert("ERROR OCCURED!")
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
                <Link className="nav-link disable" aria-current="page">CATEGORY</Link>
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
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron p-3">
              <h2><b>Category</b> <Link className="btn btn-primary" to="/map-addCategory">ADD CATEGORY</Link></h2>

              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th>CategoryID</th>
                    <th>Category Name</th>
                    <th>Category Description</th>
                    <th>Category Type</th>
                    <th>Parent Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.map(category => (
                    <tr key={category.cid}>
                      <td>{category.cid}</td>
                      <td>{category.cat_name}</td>
                      <td>{category.cat_desc}</td>
                      <td>{category.cat_type}</td>
                      <td>{category.p_cat}</td>
                      <td><Link to={`/edit/${category.cid}`}><button className="btn btn-warning">Edit</button></Link></td>
                      <td>
                        <form onSubmit={(e) => {e.preventDefault();alert("Are u sure u wanna delete!"); handleDelete(category.cid); }}>
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
