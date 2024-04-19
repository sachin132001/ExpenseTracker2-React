import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Vendor() {
  const [ven, setVen]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/map-Vview')
    .then(response=>{
      setVen(response.data)
    })
    .catch(error=>console.log("ERROR OCCURRED WHILE FETCHING DATA ",error))
  },[]);

  const handleDelete=async(id)=>{
    try{
      const response=await axios.post(`http://localhost:8080/Vdelete/${id}`)
      if(response.data==='deleted'){
        setVen(ven.filter(Vendor=>Vendor.vid !==id));
        alert("Vendor deleted successfully")
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
              <Link className="nav-link active" aria-current="page" to="/map-view">CATEGORY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disable" aria-current="page" >VENDOR</Link>
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
       <h2><b>Vendor</b>  <Link className="btn btn-primary " to="/map-addVendor">
          ADD VENDOR
        </Link></h2>


        <table className="table table-hover table-dark">
          <thead>
          <tr>
            <th>Vendor ID</th>
            <th>Vendor Name</th>
            <th>Vendor Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {ven.map(Vendor=>(
          <tr key={Vendor.vid}>
          <td>{Vendor.vid}</td>
          <td>{Vendor.vname}</td>
          <td>{Vendor.vloc}</td>
          <td><Link to={`/Vedit/${Vendor.vid}`}><button className="btn btn-warning">Edit</button></Link></td>
          <td>
            <form onSubmit={(e)=>{e.preventDefault(); alert("Are u sure u wanna delete?"); handleDelete(Vendor.vid);}}>
            <button className="btn btn-danger btn-xs">Delete</button>
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
  )
}
