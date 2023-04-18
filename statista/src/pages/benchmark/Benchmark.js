import React from 'react';
import '../../pages/benchmark/Benchmark.css';
import Filter from '../../components/filter/Filter';
import rawData from '../../data/data.json';
import Reviews from '../../components/reviews/Reviews';
import StarsView from '../../components/reviews/StarsView';
import ReviewsBar from '../../components/reviews/ReviewsBar';

function Benchmark() {
    return (
      <div className='datab-container'>         
         <Filter setActiveSelect={(()=>{})}/>
         <h2>Benchmark analysis:BBQ</h2>
         <div className='datab-box'>
          <div className='datab-left'>
                <Reviews/>
                <StarsView value={rawData.data[0].reviews.summary.value} total={rawData.data[0].reviews.summary.total}/>
                <ReviewsBar value={rawData.data[0].reviews.details}/>
          </div>
          <div className='datab-right'>
                <Reviews/>
                <StarsView value={rawData.data[1].reviews.summary.value} total={rawData.data[1].reviews.summary.total}/>
                <ReviewsBar value={rawData.data[1].reviews.details}/>
          </div>
         </div>
      </div>
    );
  }
  
  export default Benchmark;