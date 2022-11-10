import React from "react";
import { useContext } from "react";
import ThemeContext from "./contexts/themeContext";
import LanguageContext from "./contexts/languageContext";
import LoginContext from "./contexts/loginContext";


export const Main = ({}) => {
  const{ theme, handleTheme } = useContext(ThemeContext)
  const{ texts, handleLanguage } = useContext(LanguageContext)
  const{ auth, handleAuth } = useContext(LoginContext)
return (
<main className={theme}>
  {auth? <div class="mainContent"><h2 className="">
  {texts.mainSubtittle1}
  </h2>
  <p>{texts.mainWelcome}</p>
  <p className="">
  {texts.mainPar1}
  </p>  
  </div> : <p>{texts.notAuthenticated}</p>}
  </main>
)};