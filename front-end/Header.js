import { Link,NavLink ,useNavigate} from "react-router-dom";

const MyHeader = () => {

  const verify=localStorage.getItem('user');
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.clear();
    navigate('/Signup');
  }

    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
          color:isActive ? "skyblue" : "white",
          fontSize:isActive ?"25px": "20px",
          textDecoration: isActive ? "none" : "none",
        };
      };

return(
  <div className="head">

   

{verify ? (


<div className="head1">
    <NavLink to={'/'} style={navLinkStyles}>Products</NavLink> 

    
   <NavLink to={'/Addp'} style={navLinkStyles}> Add Products</NavLink> 

   {/* <NavLink to={'/Updatep'} style={navLinkStyles}>Update Products</NavLink>  */}


    < NavLink to={'/Signup'} style={navLinkStyles} onClick={logout}>Logout</NavLink>
    </div>
   
   ) 
  
     : 

   
   (
     <div className="head2"> 
   <NavLink to={'/Signup'} style={navLinkStyles}>Sign Up</NavLink> 
  
  <NavLink to={'/Login'} style={navLinkStyles}>Login</NavLink> 
  </div>

   )
}

</div>
)
}


export default MyHeader;                   
