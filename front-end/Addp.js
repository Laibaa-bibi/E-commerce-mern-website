import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addp = () => {

  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[category,setCategory]=useState("");
  const[company,setCompany]=useState("");
  const navigate=useNavigate();

  const handleAdd=async()=>{

    console.log({name,price,category,company});

    let userId=JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId);

    let result=await fetch('http://localhost:3001/add' , {
      method: 'post' ,
      body: JSON.stringify({name,price,category,company,userId}),
      headers:{
      'Content-Type':'application/json' }
    });

    result = await result.json();
    if(result)
    {
      alert("Product Added successfully");
      navigate('/');
    }
    console.warn(result);
  
  }

  return (

    <div className='productsmain'>
    <br>
    </br>
   
          <h2 className='hp'>Add Product</h2>
    
          <div className='sign2'>
           
            <input className='sinp' type="text" placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} required />
           
            <input className='sinp' type="text" placeholder='Enter product price' value={price} onChange={(e) => { setPrice(e.target.value) }} required />

            <input className='sinp' type="text" placeholder='Enter product category' value={category} onChange={(e) => { setCategory(e.target.value) }} required />

            <input className='sinp' type="text" placeholder='Enter company name' value={company} onChange={(e) => { setCompany(e.target.value) }} required />

            <button className='sbtn' onClick={handleAdd}>Add</button>
    
          </div>
    
        </div>

  )
}

export default Addp
