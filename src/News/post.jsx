import userImg from '../assets/user.jpg'
import userPost from '../assets/react.svg'
export function Blog(){
  let poem = `I sit alone  in silent though,
 the code I write, the bugs I've fought.  
 Each line a whisper,
each semicolon a scream
Still chasing downthat perfect dream.
  
  In JSX fields where components grow,  
State and props in endless flow.  
Hooks arise, with useEffect’s might,  
Binding logic, day and night.

From class to function, shifts align,  
Virtual DOM redraws the line.  
Events respond, the UI sings,With every render, fresh life brings.When errors strike and then is screens go blank,  
DevTools guide through every rank.  
Console logs reveal the tale,  
Debugging journeys never fail.

With React Router, paths expand,  
Single-page dreams across the land.  
Code and craft, in harmony,  
Build the future’s tapestry.
  `;
        
  return(
    <div>
        <hr style={{
       color:'linear-gradient(145deg, black, white)',
     }}/>
     <div className="blog">
       
       <div className="poster">
         <img src={userImg} alt="" />
       </div>
       
       <div className="blogBody">
         <div className="blogname">
           <h5 style={{
             marginTop:'0',
             fontSize:'17px'
           }}>Hamzat furqoon</h5>
           <span style={{
              marginTop:'-25px',
              color:'gray',
              fontSize:'12px',
              textTransform:'uppercase',
              fontWeight:'500'
           }}>POSTED ON:wednesday,12th, 2025 12/03</span>
           
           </div>
           
      <div className="mediaType">
             <div className="blogDecs">
          <span style={{
         display: '-webkit-box',
         WebkitLineClamp: 10,
         WebkitBoxOrient: 'vertical',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
          whiteSpace: 'normal',
          width: '87%',
          fontSize: '13px',
          fontFamily: 'sans-serif',
}}>
  {poem}
</span>
 <p style={{
   textAlign:'right',
   fontSize:'12px',
   marginTop:'-3px',
 }}>see more</p>
       </div>     
      
      
         <div className="blogmedia">
         <div className="blogImg">
           <img src={userPost} alt="n" />
         </div>
         </div>
         
      <div className="link">
       <span>https://react.dev/learn</span>
        </div>
      </div>
           
        
       <div className="comments">
   <small>256k<button> <i className="far fa-heart"></i></button></small>
    <small>792<button> <i className="far fa-comment"></i></button></small>
    <small>20<button> <i className="far fa-bookmark"></i></button></small>
    <small>112<button> <i className="fas fa-retweet"></i></button></small>
    <small><button> <i className="fas fa-share-nodes"></i></button></small>
         
       </div>
       </div>
     </div> 
         
    </div>
    )
}

export default function Post(){
  return(
  <div style={{
      marginBottom:'80px',
      paddingTop:'79px'
  }}>
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
 
  </div>
  )
}