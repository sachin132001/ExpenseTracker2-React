import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function UpdateCategory() {
  const { id } = useParams();
  const [cat_name, setCatName] = useState('');
  const [cat_desc, setCatDesc] = useState('');
  const [cat_type, setCatType] = useState('');
  const [p_cat, setPCat] = useState('');
  const [parentCat, setParentCat] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/map-addCategory')

    .then(response=>{
      setParentCat(response.data)
    })
    .catch(error=>console.log("ERROR HAS OCCURED!",error))
},[] );

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/update/${id}`);
        const { cat_name, cat_desc, cat_type, p_cat } = response.data;
        setCatName(cat_name);
        setCatDesc(cat_desc);
        setCatType(cat_type);
        setPCat(p_cat);
      } catch (error) {
        console.log("ERROR HAS OCCURRED!", error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/update/${id}`, {
        cat_name,
          cat_desc,
          cat_type,
          p_cat
        });
        if(response.data==='category'){
          alert("CATEGORY UPDATED SUCCESSFULLY!")
          window.location.href='/map-view'
        }else{
          alert("FAILED TO ADD CATEGORY !")
        }

      }catch(error){
        alert("ERROR OCCURED DURING UPDATING CATEGORY")
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
            <Link className="nav-link active" aria-current="page" to="/map-view">CATEGORY</Link>
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
		
			<h4 className="text-center bg-primary text-white">UPDATE CATEGORY</h4> 
		<br></br>
		 <form onSubmit={handleSubmit}>
		 
			     <div className="mb-3">
			          <label>Category Name:</label>
			           <input type="text" className="form-control"
                  name="cat_name" 
                  placeholder="Category Name" 
                  value={cat_name}
                  onChange={(e)=>setCatName(e.target.value)}
                  required/>
			                        
			        </div>
		
		
		               <div className="mb-3">
		                 <label>Category Description:</label>
		                 <input type="text" className="form-control" name="cat_desc" 
                      placeholder="Category Description"
                      value={cat_desc}
                      onChange={(e)=>setCatDesc(e.target.value)}
                      required/>
		              </div>
		
		               
		              <div className="mb-3">
		               <label>Category Type:</label>
		              <select className="form-control" name="cat_type" value={cat_type} 
                  onChange={(e)=>setCatType(e.target.value)}required>
                       <option value="">Category Type</option>
                       <option value="INFLOW">INFLOW</option>
                       <option value="OUTFLOW">OUTFLOW</option>

                     </select>   


		              </div>
		
		             <div className="mb-3">
    <label>Parent Category:</label>
    <select className="form-control" name="p_cat" value={p_cat} onChange={(e)=>setPCat(e.target.value)}>
    <option value="">Select Parent Category</option>
          {parentCat.map(category => (
            <option key={category.cid} value={category.cat_name}>{category.cat_name}</option>
          ))}
    </select>
</div>


		
		
		
		
		
		
		
		              <div className="mb-3">
		
		
		                 <button className="btn btn-primary" type="submit">UPDATE Category</button>
		
		
		              </div>
		
		
		           </form>
		           </div>
		
		<div className="col-md-4"></div>
		
		</div>
		
		
		</div>


    </div>
  )
}
