import Text from './Text.jsx';
import { useState } from 'react';
export function Head(){
  return(
    <div className="head">
      <div className="headoption">
        <button style={{
          background:'transparent',
          weight:'50px',
          height:'50px',
          borderRadius:'50%',
        }}>
     <i className="fas fa-multiply"></i>
        </button>
        <button style={{
          padding:'10px',
          background:'#3b82f6',
          borderRadius:'16px',
          weight:'90px',
          color:'white',
          fontWeight:'500'
        }}>post</button>
      </div>
    </div>
    )
}

export default function Add(){
  const [isPost, setisPost] = useState(true);
  return(
    <div>
      <Head />
     <Text />
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
      }}>
        <button style={{
          background:'transparent',
          border:'none',
          outline:'none',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginRight:'20px',
          color:'#3b82f6'
        }}><i style={{
          fontSize:'12px'
        }} className="fas fa-info-circle"></i>add image</button>
      </div>
    </div>
    )
}