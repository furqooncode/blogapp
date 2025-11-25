import userImg from '../assets/user.jpg'
export default function Text(){
  return(
    <div className="text">
      
      <div className="blog">
        
       <div className="poster">
         <img src={userImg} alt="" />
       </div>
        
        <div className="postDecs">
          <textarea
        rows={5}
        cols={35}
        placeholder="Add your decription"
        style={{
    resize: 'none',
    overflow: 'hidden',
          }}
        onInput={(e) => {
       e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
  }}
/>
        </div>
        
        <div className="blogmedia">
         <div className="blogImg">
     <input type="file" id="image" />
        <label for="image">
       <i className="far fa-camera"></i>
          </label>
         </div>
         </div>
      
      </div>
      
    </div>
    )
}