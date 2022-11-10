import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { useState } from "react";
import { ThemeProvider } from "./contexts/themeContext";
import { LanguageProvider } from "./contexts/languageContext";
import { LoginProvider } from "./contexts/loginContext";
import { Link } from "react-router-dom";

export const ThemedIndex = () => {

const initialAuth = null

const translations = {
  es:{
  tittle: "Título",
  headerLight: "Claro",
  headerDark: "Oscuro",
  headerFire: "Fuego",
  headerWater: "Agua",
  buttonLogin: "Iniciar sesión",
  buttonLogout: "Cerrar sesión",
  mainSubtittle1: "Tema 1",
  mainWelcome: "bienvenido usuari@",
  mainPar1: "Aquí va el contenido del tema 1",
  mainSubtittle2: "Tema 2",
  mainGreeting: "felicitaciones querido usuario, llegaste al segundo tema",
  mainPar2: "Aquí va el contenido del tema 2",
  footerText: "Practica tu codigo todos los días",
  notAuthenticated:"Debes iniciar sesion para acceder al contenido",  
  },
  en:{
  tittle: "Tittle",
  headerLight: "Light",
  headerDark: "Dark",
  headerFire: "Fire",
  headerWater: "Water",
  buttonLogin: "Login",
  buttonLogout: "Logout",
  mainSubtittle1: "Theme 1",
  mainWelcome: "welcome user",
  mainPar1: "here comes theme 1 content",
  mainSubtittle2: "theme 2",
  mainGreeting: "Greetings dear User, you have reached the second theme",
  mainPar2: "here comes theme 2 content",
  footerText: "Coding is an everyday thing",
  notAuthenticated: "you must login to access this page content",
  },
  por: {
  tittle: "Título",
  headerLight: "Claro",
  headerDark: "Escuro",
  headerFire: "Fogo",
  headerWater: "Água",
  buttonLogin: "Iniciar sessão",
  buttonLogout: "Fechar Sessão",
  mainSubtittle1: "Tópico 1",
  mainWelcome: "Bem vind@ usuári@",
  mainPar1: "Aqui está o conteúdo do tópico 1",
  mainSubtittle2: "Tópico 2",
  mainGreeting: "Parabéns car@ usuári@, você chegou ao segundo tópico",
  mainPar2: "Aqui está o conteúdo do tópico 2",
  footerText: "Pratique seu código todos os dias",
  notAuthenticated: "Você deve fazer login para acessar o conteúdo",
  }
};

const [ auth, setAuth ] = useState(initialAuth)

 //console.log(texts);


const handleAuth = (e) => {
  console.log(auth)
if(auth) {
  setAuth(null);
}
else {
  setAuth(true);
}
}

return (

<div className="PageContainer">
  <ThemeProvider>
  <LanguageProvider>
    <LoginProvider>
  <Header />
  <Main />    
  </LoginProvider>
  </LanguageProvider> 
  </ThemeProvider>
  <Link to="/projects"><button id="contextHomeButton" className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>Back</h5></button></Link>
</div>

)};