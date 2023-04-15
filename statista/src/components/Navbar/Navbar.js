import React from 'react'
import data from '../../data/menu.json';
import '../../components/Navbar/Navbar.css';

function Navbar (props){

    return(
        <div className="nav-container">
            <div className="logo">
                <h1>ReQiew</h1>
            </div>
            <ul className="nav-menu"> 
                {data.menu.map((i=>{return [<li>{i}</li>]
                }))} 
                
            </ul>
        </div>
    )
}
export default Navbar
