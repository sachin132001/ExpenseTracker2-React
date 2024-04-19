import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'

export default function UpdateVendor() {
    const {id}=useParams();
     const[vname,setVname]=useState('')
     const[vloc,setVloc]=useState('')

     useEffect(()=>{
        const fetchVendor=async()=>{
        try{
            
                const response=await axios.get(`http://localhost:8080/Vupdate/${id}`)
                const{vname,vloc}=response.data;
                setVname(vname);
                setVloc(vloc)
            }
            catch(error){
            alert("ERROR OCCURED!")
        } };
         fetchVendor();
        
     },[id]);
    
     const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post(`http://localhost:8080/Vupdate/${id}`,{
                vname,
                vloc
            });
            if(response.data==='vendor'){
                window.location.href='/map-Vview'
            }else{
                alert("ERROR OCCURED WHILE UPDATING VENDOR!")
            }

        }catch(error){
            alert("ERROR OCCURED!")
        }
     }



  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
       <Link className="navbar-brand">EXPENSE TRACKER</Link>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/map-Vview">VENDOR</Link>
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
       
           <h4 className="text-center bg-primary text-white">UPDATE VENDOR</h4> 
       <br></br>
        <form onSubmit={handleSubmit}>
        
                <div className="mb-3">
                     <label>Vendor Name:</label>
                      <input type="text" className="form-control" 
                      name="vname"
                      value={vname}
                      onChange={(e)=>setVname(e.target.value)}
                      placeholder="Vendor Name" 
                       required/>
                                   
                   </div>
       
       
                      <div className="mb-3">
                        <label>Vendor Location:</label>
                        <input type="text" className="form-control"
                         name="vloc" 
                         value={vloc}
                         onChange={(e)=>setVloc(e.target.value)}
                         placeholder="Vendor Location" 
                         required/>
                     </div>
       
                     <div className="mb-3">
       
       
                        <button className="btn btn-primary" type="submit">Update Vendor</button>
       
       
                     </div>
       
       
                  </form>
                  </div>
       
       <div className="col-md-4"></div>
       
       </div>
       
       
       </div>
                  


   </div>
  )
}
