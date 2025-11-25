
import { useNavigate, Link } from 'react-router-dom';
export default function Login(){
  const navigate = useNavigate()
  function handlesubmit(e){
    e.preventDefault();
    navigate("/Home")
  }
  return(
    <div className="login">

      <form onSubmit={handlesubmit} style={{
        padding:'5px',
      }}>
              <h1 style={{
                fontFamily:'cursive'
              }}>WELCOME BACK, HAMZAT</h1>
        
         
        <input 
        type="email"
        placeholder="Enter your email"
        />
        
        
        <input 
        type="password"
        placeholder="Enter your password"
        />
        
        <button>Login</button>
        <div className="already">
          <small>don't have an account ?</small>
          <p><Link to="/" style={{
            color: "lightgreen",
             fontSize: "15px",
          }}>Register</Link></p>
        </div>
      </form>
    </div>
    )
}