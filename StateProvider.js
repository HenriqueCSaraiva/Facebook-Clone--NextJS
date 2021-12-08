import { createContext, useContext, useReducer } from "react";

//Prepare the Data Layer
export const AppContext = createContext();

//Wrap App and provide the Data Layer
export const AppProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

//Pull information from the data Layer
export const useAppValue = () => useContext(AppContext);
