import React, { useContext } from "react";

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Olaitan Samuel",
    email: "olait@gmail.com",});
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };

export const useUserContext = ()=> useContext(UserContext);




























