import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import db from "../lib/util";

export const Authcontext = createContext();

export function Authprovider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    db.auth.initAuth().then(() => {
      if (db.auth.isAuthenticated()) {
        setUser(db.auth.getUser());
      } else {
        if (user) setUser(null);
      }
    });
  }, []);

  const register = async (userName, Email, PhoneNumber, Password) => {
    //  await db.auth.register(userName, Email, PhoneNumber, Password); U DONT DO LIKE THIS
    await db.auth.register(Email, Password, {
      userName,
      phoneNumber: PhoneNumber,
    });
    if (db.auth.isAuthenticated()) {
      setUser(db.auth.getUser());
    }
  };

  const Login = async (Email, Password) => {
    await db.login(Email, Password);
    if (db.isAuthenticated()) {
      setUser(db.user);
    }
  };

  const Logout = async () => {
    await db.logout();
    setUser(null);
  };

  return (
    <Authcontext.Provider value={{ user, Login, register, Logout }}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => useContext(Authcontext);
