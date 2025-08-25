import React from "react";
import Navbar from "./components/NavigationBar/Navbar";
import Dashboard from "./components/NavigationBar/Dashboard";
import Donations from "./components/NavigationBar/Donations";
import Login from "./components/NavigationBar/Login";
import Register from "./components/NavigationBar/Register";
import BabyForm from "./components/NavigationBar/BabyForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




//import Sidebar from "./components/NavigationBar/Sidenavbar";

function App() { 
    return (
        <Router>
        <Routes>
          <Route path="/" element={<BabyForm />} />
          {/* or any other path */}
        </Routes>
      </Router>
    

        
      
        

    
    );
}

export default App;