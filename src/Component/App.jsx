import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App(){
    
    return (
       <>
        <header>
              <Navbar />
       </header>
        <main>
            <Outlet />
        </main>
        
       </>
    );
}
export default App;