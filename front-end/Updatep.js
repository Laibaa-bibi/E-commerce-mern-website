
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Updatep = () => {
  const { id } = useParams(); // Use the correct variable name id

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    setAlldata();
  }, []);

  const setAlldata = async () => {
    console.warn(id); // Use id from useParams
    let result = await fetch(`http://localhost:3001/uproduct/${id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }

  const handleUpdate = async() => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:3001/updateproduct/${id}`,
    {
      method:"Put",
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':'application/json' }
    })

    
    result = await result.json();
    if(result)
    {
      navigate('/');
    }

  }

  return (
    
    <div className='productsmain'>
     <br></br>
      <h2 className='hp'>Update Product</h2>

      <div className='sign2'>
        <input className='sinp' type="text" placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} required />
        <input className='sinp' type="text" placeholder='Enter product price' value={price} onChange={(e) => { setPrice(e.target.value) }} required />
        <input className='sinp' type="text" placeholder='Enter product category' value={category} onChange={(e) => { setCategory(e.target.value) }} required />
        <input className='sinp' type="text" placeholder='Enter company name' value={company} onChange={(e) => { setCompany(e.target.value) }} required />
        <button className='sbtn' onClick={handleUpdate}>Update</button>
      </div>
    </div>
  )
}

export default Updatep;

