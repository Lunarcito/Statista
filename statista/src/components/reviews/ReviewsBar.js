import React from 'react'
import '../../components/reviews/ReviewsBar.css';
import { Progress } from '@chakra-ui/react'

export default function ReviewsBar(props) {
    return(
        <div>
            {props.value
            .map((i => (
                <p className="stars-bars"> {i.code}/5 <span><Progress value={(i.percentage)*100} width='9rem' height="0.5rem" colorScheme='yellow' /></span> {i.total} Reviews</p>
                )))
            }
        </div>
    )
}
