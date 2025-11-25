import userImg from '../assets/user.jpg';
import Footer from '../Footer.jsx'
import Post  from '../News/post.jsx'
export function Field(){
  return(
    <div style={{
      padding:'10px',
      marginBottom:'-85px'
    }}>
      
      <div className="profileHead">
        
        <div className="profilePic">
          <img src={userImg} alt="" />
        </div>
        
        <div className="profileAbout">
          <h2 style={{
            marginTop:'0',
          }}>Furqooncode</h2>
          <p style={{
            marginTop:'-20px',
            color:'gray',
          }}>@Furqooncode</p>
        </div>
      </div>
      
      <div className="ProfileDecs">
        <div className="bio">
          <span>hey my name  id Furqooncode call me that zaddy Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box. </span>
        </div>
        
        <div className="update">
          <button>edit</button>
        </div>
      
      </div>
      
       <div className="history">
        <span><strong>5</strong> posted blogs</span>
      </div>
      
    </div>
    )
}
export default function Profile(){
  return(
    <div>
      <Field />
      <Post />
      <Footer />
    </div>
    )
}