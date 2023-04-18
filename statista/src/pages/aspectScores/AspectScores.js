import React from 'react';
import { useState, useEffect } from "react";
import '../../pages/aspectScores/AspectScores.css';
import rawData from '../../data/data.json';
import Filter from '../../components/filter/Filter';
import AspectBox from '../../components/aspectBox/AspectBox';
import SuscriptionBox from '../../components/aspectBox/Suscription';
import Reviews from '../../components/reviews/Reviews';
import StarsView from '../../components/reviews/StarsView';
import ReviewsBar from '../../components/reviews/ReviewsBar';

export default function Aspects() {
  
  const[activeSelect, setActiveSelect]=useState([]);
  const[aspectsData, setAspectsData]=useState([]);
  const[reviewsData, setReviewsData]=useState([]);

  useEffect(()=>{    
    if (activeSelect.length === 3){
      let filterData = rawData.data.filter(
        e => e.deviceType === activeSelect[0] 
        && e.brand === activeSelect[1]
        && e.model === activeSelect[2])
        console.log("FilterData")
        console.log(filterData)
        if (filterData.length > 0) {
          setAspectsData(filterData[0].aspects)
          setReviewsData(filterData[0].reviews)
        } else {
          setAspectsData(null)
        }
      }    
    },[activeSelect]);

    return (
      <div className="aspectScores">
        <Filter setActiveSelect={setActiveSelect}/>
          <div className="data-container">
            <h2> Aspect-based sentiment: BBQ </h2>
            <div className="data-box">
              <div className="data-left">
                <SuscriptionBox/>
                {
                  (reviewsData != null && reviewsData.summary != null) ?
                  <div className="reviews-container">
                    <Reviews/>
                    <StarsView value={reviewsData.summary.value} total={reviewsData.summary.total}/>
                    <ReviewsBar/>   
                  </div>
                  : null 
                }
              </div>
            <div className="data-right">
          {
          (aspectsData !== null) ?
            aspectsData.map((aspect,index)=> {
              return(                
                  <AspectBox  title={aspect.name} subtitle="Score out of 100" value={aspect.value}/>
                  )
                })
              :null
          }
            </div>
          </div>
        </div>
      </div>
    );
  }
  