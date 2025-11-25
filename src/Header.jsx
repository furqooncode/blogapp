
export default function Header(){
  return(
    <nav>
      <ul className="header">
        <li>
          <button><i style={{
            color:"white",
             fontSize:"24px",
          }} className="fas fa-gear"></i></button>
        </li>
       <li>
          <img src="?" alt="logo" />
        </li>
       <li>
  <button style={{
    position:'relative',
  }}>
    <i style={{
    color:"white",
    fontSize:"24px",
  }} className="fas fa-bell"></i>
  <sup style={{
    position:'absolute',
    top:'0',
    right:'4px',
    background:'red',
    color:'white',
    height:'10px',
    width:'10px',
    borderRadius:'50%',
    padding:'7px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'400',
    fontSize:'14px'
  }}>99+</sup>
  </button>
        </li>
      </ul>
    </nav>
    )
}