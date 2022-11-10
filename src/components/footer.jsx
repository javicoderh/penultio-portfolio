import React from "react";
import { useContext } from "react";
import ThemeContext from "./contexts/themeContext";
import LanguageContext from "./contexts/languageContext";
import LoginContext from "./contexts/loginContext";


export const Footer = () => {
const{ theme, handleTheme } = useContext(ThemeContext);
const{ texts, handleLanguage } = useContext(LanguageContext)
return(
<footer className={theme}>  
  <h5>
  {texts.footerText}
  </h5>
</footer>
)};