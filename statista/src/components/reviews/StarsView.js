import React from 'react'
import '../../components/reviews/StarsView.css';
import { HStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {BsStarHalf,BsStarFill, BsStar} from "react-icons/bs";

export default function StarsView(props) {
    return(
        <div className="stars-score">
            <span>{props.value}/5</span>
                <div className="custom-star">
            <HStack>
            {
                (() => {
                    return [...new Array(5)].map(((e,i) =>
                        (props.value >= i + 1) ? 
                        <Icon as={BsStarFill} boxSize={5} color='yellow.500' />
                        :
                        (i + 1 - props.value < 1) ?
                        <Icon as={BsStarHalf} boxSize={5} color='yellow.500' />
                        :
                        <Icon as={BsStar} boxSize={5} color='yellow.500' />
                    ));
                })()
            }
            </HStack>
                </div>            
            <p><span>{props.total}</span> Reviews</p>
        </div>

    )
}
