import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({children}) => {
 const [ theme, setTheme ] = useState(initialTheme); 
 
 const handleTheme = (e) => {
 console.log(e.target.value)
 if (e.target.value === "light") {
  setTheme("light")
 }
 else if (e.target.value === "fire") {
  setTheme("fire")
 }
 else if (e.target.value === "water") {
  setTheme("water")
 }
 else {
  setTheme("dark")
 }
 };
 
 const data ={ theme, handleTheme }; 
return (
 <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
)
};


export { ThemeProvider };
export default ThemeContext