import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Booking from './components/pages/Booking';
//import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>
    //     Hello World
    //     made some changes
    //     made another changes
    //   </h1>
    // </div>
    <>
    <div className="grid content-evenly place-items-center bg-black" > 
      
    <h1 className="text-[white]">
        Hello World
        made some changes
        made another changes
      </h1>
  
      <Routes>

        <Route path="/booking" element={<Booking />} />
      </Routes>
      
    
     </div>
     
     {/*<Header></Header>*/}
    </>
  );
};

export default App;
