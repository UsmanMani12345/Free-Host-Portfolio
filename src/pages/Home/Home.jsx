import React from 'react';
import './Home.css';
import { useTheme } from '../../Context/ThemeContext';
import Resume from '../../docs/new-cv-usman.pdf';
import Typewriter from 'typewriter-effect';
import { IoSunny , IoMoon } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme, setTheme] =useTheme();

    const handleTheme=()=>{
        setTheme((prevState)=>(prevState === "light" ? "dark" :"light"));
    };
  return (
    <>
    <div className="container-fluid home-container" id='home'>
    <div className="mode" onClick={handleTheme}>
            {theme === 'light' ?(<IoMoon className='moon'/>):(<IoSunny className='moon'/>)}
        </div>
      <div className="home-content container">
<Fade right>
      
        <h1>Hi ✌ I'm a</h1>

      <h2>

        <Typewriter
  options={{
    strings: ['Frontend Developer!', 'React Developer!','And In Future', 'MERN Stack Developer!'],
    autoStart: true,
    loop: true,
  }}
  
/>

</h2>
</Fade>
<Fade  bottom>
<div className="home-button">
  <a href='https://api.whatsapp.com/send?phone=0311005466' rel='noreferrer' target='_blank' className="btn btn-hire" >Hire Me</a>
  <a className="btn btn-cv" href={Resume} download="Usman-CV">My Resume</a>
</div>
</Fade>
      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Home