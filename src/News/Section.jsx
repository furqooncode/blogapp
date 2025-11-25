import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Sections(){
const location = useLocation();
const navigate = useNavigate();
const isHome = location.pathname === "/";
const isSearch = location.pathname === "/Search";

function handleHomeClick(){
  navigate("/Home")
}
function handleSearchClick(){
  navigate("/Search")
}

  return(
    <div>
      <div className="section">
      <div className="all" style={{
        borderBottom: isHome ? ' 3px solid lightblue' : 'none'
      }} onClick={handleHomeClick} >
       <span><Link to="/" style={{
         fontSize: '15px',
        fontWeight: '500',
        color:'white',
        textDecoration:'none',
       }}>For you</Link></span>
        </div>
        
         <div className="searches" style={{
           borderBottom: isSearch ? ' 3px solid lightblue' : 'none'
         }} onClick={handleSearchClick}>
          <span><Link to="/Search" style={{
            fontSize: '15px',
        fontWeight: '500',
        color:'white',
        textDecoration:'none',
          }}>Search</Link></span>
        </div>
  
      </div>
    </div>
    )
}