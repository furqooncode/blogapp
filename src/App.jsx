import { Routes, Route } from 'react-router-dom';


import Login from './Lock/Login.jsx';
import Signup from './Lock/Signup.jsx';
import Home  from './Home.jsx';
import Search from './News/Search.jsx';
import Add from './Tweet/Add.jsx'
import Profile from './Usercontrol/Profile.jsx'

export default function App(){
  return(
    <Routes>
  <Route path="/" element={<Signup />} />
  <Route path="/Add" element={<Add />} />
  <Route path="/Login" element={<Login/>} />
<Route path="/Search" element={<Search />} />
<Route path="/Home" element={<Home/>} />
  
    </Routes>
    )
}