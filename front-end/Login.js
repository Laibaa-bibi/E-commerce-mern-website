import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    
  useEffect(()=>{
    const verify=localStorage.getItem('user');
    if(verify)
    {
      navigate('/');
    }
  }
  )

    const handleLogin = async () => {

        console.log(email, password);
        let result = await fetch('http://localhost:3001/login',{
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        console.warn(result);

        if(result.name)
        {
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
        }

        else{
          console.log("invalid");
           alert("Enter valid email and password");
        }

    }


    return (
         <div className='smain'>
      
      <br></br><br></br>
          <h2 className='sh'>Login Now</h2>
    
          <div className='sign2'>
    
           
            <input className='sinp' type="email" placeholder='Enter e-mail' value={email} onChange={(e) => { setEmail(e.target.value) }} minlength="5" maxlength="50" required />
            <input className='sinp' type="password" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} minlength="3" maxlength="5" required />
            <button className='sbtn' onClick={handleLogin}>Submit</button>
    
          </div>
    
        </div>
      )
}

export default Login
