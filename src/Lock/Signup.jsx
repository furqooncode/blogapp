import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/auth.jsx';
import { useState } from 'react';




export default function Signup(){
  const { register } = useAuth();
const [userName, setuserName] = useState('')
const [Email, setEmail] = useState('')
const [PhoneNumber, setPhoneNumber] = useState('')
const [Password, setPassword] = useState('')

  const navigate = useNavigate();
async function handlesubmit(e){
    e.preventDefault()
    await register(userName, Email, PhoneNumber, Password);
    alert('successfully registered')
    navigate("/Login")
  }catch(error){
    alert(error.message)
  }
  return(
    <div className="login">

      <form onSubmit={handlesubmit} style={{
        padding:'5px',
      }}>
              <h1 style={{
                fontFamily:'cursive'
              }}>WELCOME TO BLOGAPP</h1>
      <span>username</span>
        <input 
        type="text"
        placeholder="username"
        onChange={(e) => setuserName(e.target.value)}  
        required
        />
        
          <span>email</span>
        <input 
        type="email"
        placeholder="Enter your email"
       onChange={(e) => setEmail(e.target.value)}  
       required
        />
        
         <span>phone number</span>
        <input 
        type="number"
        placeholder="Enter your phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}  
        required
        />
        
          <span>password</span>
        <input 
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}  
        required
        />
        
     
        
        <button style={{
          width:'100%',
        }}>SIGNUP</button>
        <div className="already">
     <small>already have an account ?
          </small>
          <p><Link to="/Login" style={{
            color: "lightgreen",
           fontSize: "15px",
          }}>Login</Link></p>
        </div>
      </form>
    </div>
    )
}


