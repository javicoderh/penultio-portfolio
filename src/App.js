import logo from './logo.svg';
import './App.css';
import { IndexLinks } from './components/Index';
import ScrumIndex from './components/ScrumIndex';
import ScrumOverview from './components/ScrumOverview';
import ScrumHistory from './components/ScrumHistory';
import DevSkillsOverview from './components/DevSkills';
import { HtmlDetails, CssDetails, SassDetails, JsDetails, ReactDetails, FigmaDetails } from './components/DevSkillsDetails';
import { BrowserRouter, Route, Routes, Link, NavLink, Outlet } from "react-router-dom";
import Router from './components/router/router';
import StickyNav from './components/Nav';
import { VisualDiv } from './components/visualDiv';
import { Logout } from './components/Logout';
import { UserWelcome } from './components/Welcome';
import { LoginButton } from './components/Login';
import StateEffect from './components/stateEffect';
import { Button } from '@mui/material';



function App() { 

  return (
    <div className="App">
      <header className="App-header">
        <div className='indexHeader'>
          <div className='headerFirstLine'>
            <a href='/'><img src="https://scontent.fkna2-1.fna.fbcdn.net/v/t39.30808-6/311318312_2344342782387191_419389458548399302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VH7tc2mp18AAX8pufWt&_nc_ht=scontent.fkna2-1.fna&oh=00_AfCaNLhutUZOxLVsTteWSo4cTyw1VdtROWCKvTxeIM-WEg&oe=637291DA" className='Logo' alt="logo"></img></a>
            <h1 className='tittle'>Javier Bravo Zapico</h1>
          </div>
          <h2 className='subtittle'>Developer Briefcase</h2>                                                    
        </div>       
        <div className='overView'>
          <h5 className='jobQuote'>Looking for a junior front end developer job</h5>
            <Router/>                                               
        </div>
        <div className='linksContainer'>                                                          
        </div>        
        <footer>          
          <div className='visualDiv bottom'></div>
          <h4 className='footQuote'>Learning is an endless loop ...</h4>
        </footer>
      </header>        
    </div>
    );
  }

export default App;
