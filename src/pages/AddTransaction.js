import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AddTransaction() {
    const[tdate,setTdate]=useState('')
    const[category,setCategory]=useState([])
    const[tcat,setTcat]=useState('')
    const[particulars,setParticulars]=useState('')
    const[amount,setAmount]=useState('')
    const[tven,setTven]=useState('')
    const[vendor,setVendor]=useState([])
    const[tpay,setTpay]=useState('')
    const[payment,setPayment]=useState([])
    const[tdetails,setTdetails]=useState('')
    const[remarks,setRemarks]=useState('')
     
    useEffect(() => {
      axios.get('http://localhost:8080/map-addCategory')
        .then(response => {
          // Check the response data
          setCategory(response.data);
        })
        .catch(error => console.log("ERROR OCCURRED!", error));
    }, []);
    

    useEffect(() => {
      axios.get('http://localhost:8080/map-addVendor')
        .then(response => {
          // Check the response data
          setVendor(response.data);
        })
        .catch(error => console.log("ERROR OCCURRED!", error));
    }, []);

    useEffect(() => {
      axios.get('http://localhost:8080/map-addPayment')
        .then(response => {
          // Check the response data
          setPayment(response.data);
        })
        .catch(error => console.log("ERROR OCCURRED!", error));
    }, []);
    
    const handleSubmit=async(event)=>{
      event.preventDefault();
      try{
        const response=await axios.post('http://localhost:8080/addTrans',{
          tdate,
          tcat,
          particulars,
          amount,
          tven,
          tpay,
          tdetails,
          remarks
        });
        if(response.data==='transaction'){
          window.location.href='/map-Tview'
        }else{
          alert("COULD NOT ADD TRANSACTION!")
        }

      }catch{
        alert("ERROR OCCURED!")
      }
    };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand">EXPENSE TRACKER</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/map-Tview">TRANSACTION</Link>
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
		
			<h4 className="text-center bg-primary text-white">ADD TRANSACTION</h4> 
		<br></br>
		 <form onSubmit={handleSubmit}>
		 
			     <div className="mb-3">
			           <label>Transaction Date:</label>
                       <input type="date" 
                       className="form-control"
                       name="tdate"
                       value={tdate}
                       onChange={(e)=>setTdate(e.target.value)}
                       placeholder="date" 
                       required/>
			                        
			        </div>
		
		
		               <div className="mb-3">
		                  <label>Category:</label>
		                   <select className="form-control" name="tcat" value={tcat} onChange={(e)=>setTcat(e.target.value)}>
                        <option value="">Choose Category</option>
                        {category.map(cat=>(
                          <option key={cat.cid} value={cat.cid}>{cat.cat_name}</option>
                        ))}
        				
   						 </select>   
		              </div>
		              
		               <div className="mb-3">
		                 <label>Particulars:</label>
                           <input type="text" 
                           className="form-control"
                           name="particulars" 
                           value={particulars}
                           onChange={(e)=>setParticulars(e.target.value)}
                           placeholder="particulars"  
                           required/>
		              </div>
		              
		               <div className="mb-3">
		                 <label>Amount:</label>
                         <input type="text"
                          className="form-control" 
                          name="amount"  
                          value={amount}
                          onChange={(e)=>setAmount(e.target.value)}
                          placeholder="Amount" 
                          required/>
		              </div>
		              
		               <div className="mb-3">
		                  <label>Vendor:</label>
                           <select className="form-control" name="tven" value={tven} onChange={(e)=>setTven(e.target.value)}>
                           <option value="">Choose Vendor</option>
        				           {vendor.map(ven=>(
                            <option key={ven.vid} value={ven.vid}>{ven.vname}</option>
                           ))}
   						 </select>
		              </div>
		              
		               <div className="mb-3">
		                  <label>Payment:</label>
                           <select className="form-control" name="tpay" value={tpay} onChange={(e)=>setTpay(e.target.value)}>
                           <option value="">Choose Payment</option>
        				           {payment.map(pay=>(
                            <option key={pay.pid} value={pay.pid}>{pay.ptype}</option>
                           ))}
   						 </select>
		              </div>
		              
		                <div className="mb-3">
		                 <label>Transaction Details:</label>
                <textarea className="form-control" 
                name="tdetails"  
                value={tdetails}
                onChange={(e)=>setTdetails(e.target.value)}
                placeholder="Transaction Details" 
                required></textarea>
		              </div>
		              
		               <div className="mb-3">
		                  <label>Remarks:</label>
                <textarea className="form-control"
                 name="remarks"  
                 value={remarks}
                 onChange={(e)=>setRemarks(e.target.value)}
                 placeholder="Remarks" 
                 required></textarea>
		            </div>
		
		
		              <div className="mb-3">
		
		
		                 <button className="btn btn-primary" type="submit">Add Transaction</button>
		
		
		              </div>
		
		
		           </form>
		           </div>
		
		<div className="col-md-4"></div>
		
		</div>
		
		
		</div>



    </div>
  )
}
