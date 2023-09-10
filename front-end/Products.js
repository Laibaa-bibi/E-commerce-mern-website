
import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";


const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => 
  {
    getResult();

  }, []);

  const getResult = async () => {
    let result = await fetch('http://localhost:3001/products');
    result = await result.json();
    setProduct(result);
  };


  const DeleteProduct = async (id) => {
    try {
      let result = await fetch(`http://localhost:3001/del/${id}`, {
        method: "DELETE",
      });
  
      if (result.ok) {
        // Successful deletion
        getResult(); // Refresh the product list
      } else {
        // Handle error response
        console.error("Delete request failed:", result.status, result.statusText);
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("An error occurred:", error);
    }
  };

  const handleSearch=async(event)=>{
      let key=event.target.value;
      if(key)
      {
      let result = await fetch(`http://localhost:3001/search/${key}`);
      result = await result.json();

      if(result)
      {
        setProduct(result);
      }
    }

    else{
      getResult();
    }
  }


  return (
    <div className='productsmain'>
      <br></br>
      <h1 className='hp'>Products</h1>
      <input placeholder='search' className='searching' onChange={handleSearch}></input>
 
 <div className='divp'>

      <ul className="table">
        <li className="header">
          <div>No.</div>
          <div>Product name</div>
          <div>Product price</div>
          <div>Category</div>
          <div>Company name</div>
          <div>Operation</div>
          <div> </div>
        </li>

        {
         product.length>0 ? product.map((item, index) => (
          <li className="row" key={index}>
            <div>{index + 1}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.category}</div>
            <div>{item.company}</div>
            <div className='du'><button onClick={()=>DeleteProduct(item._id)}>Delete</button>
           <Link to={`/Updatep/${item._id}`} className='lu'>Update</Link></div>


            <div> </div>
          </li>
        ))
        :
        <h3 className='headingres'>No results found</h3>
        }
      </ul>
      </div>
    </div>
  );
};

export default Products;
