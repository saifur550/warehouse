import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner text-center mb-5  pt-5">
           <div className="container">
               <div className="row pt-5 ">
                   <div className="col pt-5 z-index">
                       <h4 className="display-4 text-white pt-5  fw-bolder">Get Your item From Here, All  New <br /> Collection Are available  <span className="fw-normal">...</span> </h4>
                   <button className="btn z-index mt-5 btn-light"> All Stock Items</button>
                   </div>
               </div>
           </div>
        </div>
      );
    };

export default Banner;