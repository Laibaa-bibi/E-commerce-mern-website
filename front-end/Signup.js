import React from 'react'
import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Products from './Products';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const verify=localStorage.getItem('user');
    if(verify)
    {
      navigate('/');
    }
  }
  )


  const collectData = async () => {

    console.log(name, email, password);
    let result = await fetch('http://localhost:3001/Signup', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    result = await result.json();
    console.warn(result);

    //it is used because when user signup then save the user in local storage and there is no need to signup again
    localStorage.setItem('user', JSON.stringify(result));


    if (result) {
      navigate('/');
    }

  }

  return (
    <div className='smain'>
      <br></br>
      <h2 className='sh'>Register Now</h2>

      <div className='sign2'>

        <input className='sinp' type="text" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} pattern="[A-Za-z]{3,15}" minlength="3" maxlength="15" required />
        <input className='sinp' type="email" placeholder='e-mail' value={email} onChange={(e) => { setEmail(e.target.value) }} minlength="5" maxlength="50" required />
        <input className='sinp' type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} minlength="3" maxlength="5" required />
        <button className='sbtn' onClick={collectData}>Submit</button>

      </div>

    </div>
  )
}

export default Signup
