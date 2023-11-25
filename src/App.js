import React from "react";
import Sidebar from "./components/Layout/Sidebar";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/project/Project";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import Responsive from "./components/Layout/ResponsiveNav/Responsive";
function App() {
  const [theme] =useTheme();
  return (

    <div className="App">
      <div id={theme}>
        <Responsive/>
     <Sidebar/>
     <div class="container-fluid">
     <About/>
     <TechStack/>
     <Education/>
     <Project/>
     <Contact/>
     </div>
    </div>

    <div className="footer  mb-3 ms-3">
      <h4 className="text-center">
        All Reserved Right Is Here! &copy; MUJ PRODUCTION 
      </h4>
    </div>
    <ScrollToTop smooth color="#fff" style={{backgroundColor: '#270808'} } />
    </div>
  );
}

export default App;
