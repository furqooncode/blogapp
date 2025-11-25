import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Sections from './News/Section.jsx'
import Post from './News/post.jsx'
export default function Home(){
  return(
    <div>
      <Header />
      <Sections />
      <Post />
      <Footer />
    </div>
    )
}