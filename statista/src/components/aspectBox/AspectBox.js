import React from 'react'
import '../../components/aspectBox/AspectBox.css';
import { ArrowUpIcon,
    ArrowDownIcon, 
} from '@chakra-ui/icons'

export default function AspectBox(props) {
    return(
        <div className="aspectBox-container">
            <div className= { (props.value > 70) ? "aspect-box-positive" : "aspect-box-negative"} >
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
                    <div className="porcentages">
                        <h2>{props.value}%</h2>
                            <div className="porcentage-arrows">
                                {
                                (props.value > 70) ? <ArrowDownIcon boxSize={2} w={8} h={10} /> : <ArrowUpIcon boxSize={5} w={8} h={10} /> 
                                } 
                            </div>
                    </div>              
            </div>
        </div>
    )
}
