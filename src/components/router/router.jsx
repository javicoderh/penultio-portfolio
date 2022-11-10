import React from "react"; 
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import DevSkillsOverview from "../DevSkills";
import { HtmlDetails } from "../DevSkillsDetails";
import { IndexLinks } from "../Index";
import StickyNav from "../Nav";
import  VisualDiv  from "../visualDiv";
import { CssDetails } from "../DevSkillsDetails";
import { SassDetails } from "../DevSkillsDetails";
import { ReactDetails } from "../DevSkillsDetails";
import { JsDetails } from "../DevSkillsDetails";
import { FigmaDetails } from "../DevSkillsDetails";
import ScrumIndex from "../ScrumIndex";
import ScrumOverview from "../ScrumOverview";
import ScrumHistory from "../ScrumHistory";
import { ScrumHistory2, ScrumHistory3 } from "../scrumHistoryComponents";
import { Roles } from "../scrumRoles";
import { LoginButton } from "../Login";
import { Logout } from "../Logout";
import { UserWelcome } from "../Welcome";
import { GalleriesIndex } from "../galleries";
import StateEffect from "../stateEffect";
import { ThemedIndex } from "../themedIndex";

export default function Router() {  
return (
  <div>  
<HashRouter>
<Routes> 
  <Route path="/" element={<LoginButton/>}/>          
  <Route path="/index" element={<StickyNav/>}>     
  <Route path="/index" element={<IndexLinks/>}/>  
  </Route> 
  <Route path="/projects" element={<ul className="projList">
    <h2>Projects</h2>
    <Link to="/stateeffect">
    <li>useState + useEffect</li>
    </Link>
    <Link to="/usecontext">
    <li>useContext</li>
    </Link>
        
    <Link to="/index"><button id="projectBackButton" className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link>
    
    </ul>}
    />  
  <Route path="/stateeffect" element={<StateEffect />}/>
  <Route path="/usecontext" element={<ThemedIndex />}/>
  <Route path="/devSkills" element={<DevSkillsOverview/>}>
  <Route path="/devSkills" element={<Link to="/index"><button className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link>}/>
  <Route path="/devSkills/html" element={<HtmlDetails />}/>
  <Route path="/devSkills/css" element={<CssDetails />}/>
  <Route path="/devSkills/sass" element={<SassDetails />}/>
  <Route path="/devSkills/js" element={<JsDetails />}/>
  <Route path="/devSkills/react" element={<ReactDetails />}/>
  <Route path="/devSkills/figma" element={<FigmaDetails />}/>
  </Route>
  <Route path="/scrumov" element={<ScrumOverview />}>
  <Route path="/scrumov" element={<ScrumIndex />}/>
  <Route path="/scrumov/history" element={<ScrumHistory />}/>
  <Route path="/scrumov/history2" element={<ScrumHistory2 />}/>
  <Route path="/scrumov/history3" element={<ScrumHistory3 />}/>
  <Route path="/scrumov/roles" element={<Roles />}/>
  </Route> 
  <Route path="*" element={<div className="underConstruction"><img src="https://webngfx.com/wp-content/uploads/2021/11/website-development.svg" height="150"></img><h5 className="uConstruction">sorry this section is under construction...</h5><a href="/index"><button className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>Home</h5></button></a></div>}/>  
  <Route path="/galleries" element={<GalleriesIndex />}/>
</Routes>
</HashRouter>

</div>
)}

