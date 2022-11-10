import { createContext } from "react";
import { useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en"

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
 buttonText: "volver",  
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
 buttonText: "back",
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
 buttonText: "retorna",
 }
};

const LanguageProvider = ({children}) => {
 const [ language, setLanguage ] = useState(initialLanguage);
 const [ texts, setTexts ] = useState(translations[language]); 
  

 const handleLanguage = (e) => {
  console.log(e.target.value)
 if (e.target.value === "es") {
 setLanguage("es")
 setTexts(translations.es)
 }
 else if (e.target.value === "en") {
 setLanguage("en")
 setTexts(translations.en)
 }
 else {
 setLanguage("por")
 setTexts(translations.por)
 }  
 };
 
const data ={ language, texts, handleLanguage };
return (
 <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
)
};


export { LanguageProvider };
export default LanguageContext



