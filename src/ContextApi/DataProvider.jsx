import { createContext, useContext } from "react";

const dataProvider = createContext();

const AppData = ({ children }) => {
  // DATA FOR CREATE CONTEXT
  let myData = {
    name: "Muhammad Adnan",
    age: 21,
    city: "Pindigheb",
  };
  return <dataProvider.Provider value={myData} >{children}</dataProvider.Provider>;
};


const useCustomHook = () => {
  return useContext(dataProvider);
};
export { dataProvider, AppData , useCustomHook };
