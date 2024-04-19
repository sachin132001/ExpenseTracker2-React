import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function AddPayment() {
     const[ptype,setPtype]=useState('')
     const[pmode,setPmode]=useState('')
     const[pdesc,setPdesc]=useState('')
     

    const handleSubmit= async(event)=>{
      event.preventDefault();

      try{
        const response= await axios.post('http://localhost:8080/addPay',{
          ptype,
          pmode,
          pdesc
        });
        if(response.data==='payment'){
          alert("PAYMENT ADDED SUCCESSFULLY!")
          window.location.href='/map-Pview'
        }else{
          alert("FAILED TO ADD PAYMENT !")
        }

      }catch(error){
        alert("ERROR OCCURED DURING ADDING PAYMENT")
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
            <Link className="nav-link active" aria-current="page" to="/map-Pview">PAYMENT</Link>
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
		
			<h4 className="text-center bg-primary text-white">ADD PAYMENT</h4> 
		<br></br>
    <form onSubmit={handleSubmit}>
		 
     <div className="mb-3">
          <label>Payment Type:</label>
            <select className="form-control" name="ptype" value={ptype} onChange={(e)=>setPtype(e.target.value)}   required>
                   <option value="">Payment Type</option>
                   <option value="CASH">CASH</option>
                   <option value="DEBIT CARD">DEBIT CARD</option>
                   <option value="CREDIT CARD">CREDIT CARD</option>
                   <option value="NETBANKING">NETBANKING</option>
                   <option value="WALLET/UPI">WALLET/UPI</option>
                   <option value="CHEQUE">CHEQUE</option>
                   <option value="CRYPTO">CRYPTO</option>
                   
               </select>       

                        
        </div>


             <div className="mb-3">
               <label>Payment Mode:</label>
              <select className="form-control" name="pmode" value={pmode} onChange={(e)=>setPmode(e.target.value)} required>
                  <option value="">Payment Mode</option>
                  <option value="RUPEE">RUPEE</option>
                  <option value="DEBIT CARD-HDFC">DEBIT CARD-HDFC</option>
                  <option value="DEBIT CARD-SBI">DEBIT CARD-SBI</option>
                  <option value="CREDIT CARD-HDFC">CREDIT CARD-HDFC</option>
                  <option value="CREDIT CARD-SBI">CREDIT CARD-SBI</option>
                  <option value="PAYTM WALLET">PAYTM WALLET</option>
                  <option value="GPAY">GPAY</option>
                  <option value="PHONE PAY">PHONE PAY</option>
                  <option value="HDFC-ITPB">HDFC-ITPB</option>
                  <option value="HDFC-SADASHIVA NAGAR">HDFC-SADASHIVA NAGAR</option>
                  <option value="SBI-AECS LAYOUT">SBI-AECS LAYOUT</option>
                  <option value="BITCOIN">BITCOIN</option>
                  <option value="SBI CHECKBOOK">SBI CHECKBOOK</option>
                  <option value="AIRTEL MONEY">AIRTEL MONEY</option>
                  
              </select>       
            </div>
            
             <div className="mb-3">
               <label>Payment Description:</label>
               <input type="text" className="form-control" name="pdesc" value={pdesc} onChange={(e)=>setPdesc(e.target.value)}  placeholder="Payment Description" required/>
            </div>


            <div className="mb-3">


               <button className="btn btn-primary" type="submit">Add Payment</button>


            </div>


         </form>
		           </div>
		
		<div className="col-md-4"></div>
		
		</div>
		
		
		</div>


    </div>
  )
}
