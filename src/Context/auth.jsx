import { useContext, createContext} from 'react';
import { useState , useEffect } from 'react'
import db from "../lib/util";

export const Authcontext = createContext();

 export function Authprovider({children}){
  const [user, setUser] = useState(null);
   
   useEffect(() => {
    const checkAuth = async () => {
  const isAuth = await db.isAuthenticated();
      if (isAuth) setUser(db.user);
    };
    checkAuth();
  }, []);
  
  
  const register = async(userName, Email, PhoneNumber, Password, ConfirmPassword) =>{
    try{
    return await db.register(userName, Email, PhoneNumber, Password, ConfirmPassword);
    if(db.isAuthenticated()){
      setUser(db.user)
    }
    }catch(error){
      console.log(error)
    }
  }
  
  const Login = async(Email, Password)=>{
   try{
     return await db.login(Email, Password);
     if(db.isAuthenticated()){
       setUser(db.user)
     }
   }catch(error){
     console.log(error)
   }
  }
  
  const Logout = async () => {
    try {
     return await db.logout();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
   return(
     <Authcontext.Provider value={{user, Login, register, Logout}}>
       {children}
       </Authcontext.Provider>
     )
 }
 
 export const useAuth = ()=> useContext(Authcontext)
 