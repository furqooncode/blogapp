import { useNavigate } from 'react-router-dom';
export default function Footer(){
  const navigate = useNavigate()
  function handleHome(){
    navigate("/Home")
  }
  function handleAdd(){
    navigate("/")
  }
  function handleProfile(){
    navigate("/?")
  }
  return(
    <div>
      <footer>
        <div className="foot">
        <div className="menu">
        <button onClick={handleHome}>
       <i className="fas fa-home"></i>
        </button>  
        </div>
        
         <div className="menus" style={{
           background:'black',
           padding:'3px',
           borderRadius:'50%',
           height:'50px',
           width:'50px',
           display:'flex',
           alignItems:'center',
           justifyContent:'center',
         }}>
           <button onClick={handleAdd}>
        <i className="fas fa-plus"></i>   
           </button>

        </div>
        
         <div className="menu">
           <button onClick={handleProfile}>
          <i className="fas fa-user"></i>
           </button>
        </div>
         </div>
      </footer>
     
    </div>
    )
}