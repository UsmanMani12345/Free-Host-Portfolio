import React, {useState} from 'react';
import Home from '../../pages/Home/Home';
import { AiFillFastBackward,AiFillFastForward  } from "react-icons/ai";
import './Sidebar.css';
import Menu from '../Menu/Menu';


const Sidebar = () => {
    const [toggle,setToggle] =useState(true);

    //change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <>
    
    
    <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : " sidebar"}>
            <div className="sidebar-toggle-icons">
            
                <p onClick={handleToggle}>
                    {
                        toggle ? (<AiFillFastBackward size={30}/>) : (<AiFillFastForward size={30}/>)
                    }
                    
                </p>
            </div>
            <Menu toggle={toggle}/>
        </div>

        <div className="container">
            <Home/>
        </div>




    </div>
    
    
    
    
    
    
    </>
  )
}

export default Sidebar