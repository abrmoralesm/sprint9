import React from 'react';
import Navbar from './Navbar';
import logo from "../assets/logo.png";

const Header = () => {
    return(
        <div>
            
          
            <img src={logo} alt='Logo' width='80px' height='80px' />
       
         
            <Navbar/>
        </div>
    )
}
export default Header;