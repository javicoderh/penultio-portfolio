import { createContext } from "react";
import { useState } from "react";

const LoginContext = createContext();

const initialAuth = null

const LoginProvider = ({children}) => {
 const [ auth, setAuth ] = useState(initialAuth)

const handleAuth = (e) => {
 console.log(auth)
if(auth) {
 setAuth(null);
}
else {
 setAuth(true);
}
};
const data = { auth, handleAuth }
return (
 <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
)
};


export { LoginProvider };
export default LoginContext


