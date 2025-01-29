import React, { useContext } from "react";

const TogglerContext = React.createContext();

const TogglerProvider = ({ children }) => {
  const [togglerVal, setTogglerVal] = React.useState(false);

  return (
    <TogglerContext.Provider value={{ togglerVal, setTogglerVal }}>
      {children}
    </TogglerContext.Provider>
  );
};

export { TogglerContext, TogglerProvider };

export const useTogglerContext = () => useContext(TogglerContext);