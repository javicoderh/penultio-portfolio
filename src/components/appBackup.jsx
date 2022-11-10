function App() { 

 return (
   <div className="App">
     <header className="App-header">
       <div className='indexHeader'>
         <div className='headerFirstLine'>
           <img src='https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/311318312_2344342782387191_419389458548399302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFnjZncoLrbgknbhK5nMnlxuDjS0p1ZjI-4ONLSnVmMj8qy7YI95Thu1dp3kI4wO92oKeUvDrHCvx1C1Y4DMqAV&_nc_ohc=Mtu6ysGBpUcAX99v41N&_nc_ht=scontent-scl2-1.xx&oh=00_AT_ZRvSzhQ9p5kwJXVkvGV35Jl-EKEJRQQIhiNAK2Pj7ew&oe=6352EDDA' className='Logo' alt="logo"></img>
           <h1 className='tittle'>Javier Bravo Zapico</h1>
         </div>
         <h2 className='subtittle'>Developer Briefcase</h2>
                                                   
       </div>       
       <div className='overView'>
         <h5 className='jobQuote'>Looking for a junior front end developer job</h5>
           <Router/>                          
         <div className='visualDiv top'><img src=''></img></div>
       </div>
       <div className='linksContainer'>                                                          
       </div>
       <footer>
         <div className='visualDiv bottom'></div>
         <h4 className='footQuote'>Learning is an endless loop</h4>
       </footer>
     </header>        
   </div>
   );
 }
 
 export default App;