import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Section from './Section.jsx';
import { Blog } from './post.jsx'
export function Typed(){
  return(
    <div>
      
      <div className="search">
      <input 
      type="text"
      placeholder="Search for latest update"
      />
       </div>
    
    <div className="rel">
      <p>Related search</p>
      <span>Found 20 results</span>
    </div>
    
    <div className="report">
      <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    </div>
    
    </div>
    )
}
export default function Search(){
  return(
    <div style={{
      marginTop:'120px',
       marginBottom:'80px',
    }}>
    <Header />
    <Section />
    <Typed />
    <Footer />
    </div>
    )
}