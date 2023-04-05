import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);

  const register = async () => { }
  const login = async () => { }
  const logout = async () => { }

  useEffect(() => {
    async function findUser() {
      await axios.get(process.env.REACT_APP_SERVER+'/auth/users')
        .then(res => {
          setUser(res.data.currentUser);
          setLoading(false);
        }).catch(err => {
          setLoading(false);
        });
    }

    findUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setLoading,
        register,
        logout,
        login
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;