import React from 'react'
import '../../components/aspectBox/SuscriptionBox.css';
import { IoDiamondOutline } from "react-icons/io5";

export default function SuscriptionBox(props) {
    return(
        <div className="suscription-box">
            <h4>Pro Version ON</h4>
            <p>You have access to all functions</p>  
            <h4 className="suscription">Edit Suscription<IoDiamondOutline className='diamond-icon'/></h4>
        </div>
    )
}
