import React from 'react'
import './Navinsorts.css';
import HamburgerDrawer from "./HamburgerDrawer"
const Navinsorts = ({setCategory}) => {
    return (
        <div className='nav'>
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory}/>
            </div>

            <img
            
            style={{cursor: "pointer"}}

            src="https://inshorts.com/dist/images/home_page/logo.png" alt="logo" height="80%" />
        </div>
    )
}

export default Navinsorts
