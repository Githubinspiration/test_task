import { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("world");
  return (
    <>
      <Context.Provider value={name}>
        <div className="layout">
          {children}
        </div>
      </Context.Provider>
    </>
  );
};

export default Context;
