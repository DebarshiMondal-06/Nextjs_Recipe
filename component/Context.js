import React, { createContext, useState } from 'react';
const createMainContext = createContext();




const Context = ({ children }) => {
  const [text, setText] = useState({});


  return <createMainContext.Provider value={{
    text,
    setText
  }}>
    {children}
  </createMainContext.Provider>
};


export { Context, createMainContext };