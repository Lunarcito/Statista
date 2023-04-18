import React from 'react'
import data from '../../data/menu.json';
import '../../components/navbar/Navbar.css';
import * as Icons from 'react-icons/ri';

const CustomRiIcon=({name})=>{
    const RiIcon = Icons[name];
    if(!RiIcon) return <p> Icon not found</p>;
    return <RiIcon/>;
};

function Navbar() {
    return(
        <div className="nav-container">
            <div className="logo">
                <h1>ReQiew</h1>
            </div>
            <ul className="nav-menu"> 
                {
                data.menu.map((i=>{return [
                    <li  id="linkid">
                        <div className="custom-icon">
                            <CustomRiIcon name={i.emoticon}/> 
                        </div>
                        <a href={i.link}> {i.name}</a>
                    </li>]}))
                }
            </ul>
        </div>
    )
}
export default Navbar;
