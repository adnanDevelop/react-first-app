import React from 'react'
import { Link } from "react-router-dom";


const Common = ({title , visit , img , btn}) => {  
  return (
    <>
       <div id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10  mx-auto px-0">
                <div className="row d-flex align-items-center justify-content-center  g-5">
                  <div className="col-lg-6 order-lg-1 order-2">
                    <div className="home-content">
                    <h1>{title}<br className="d-lg-block d-none" /> with <strong className="brand-name text-primary">Adnan Tariq</strong>.</h1>
                <p className="my-3">We are the team of talented developers</p>
                <Link to={visit} className="btn btn-outline-primary fw-bolder border border-2 border-primary">{btn}</Link></div>    
                  </div>
                  <div className="col-lg-6 order-lg-2 order-1">
                    <div className="home-right-img">
                      <img src={img} alt="HomeImage" className="img-fluid" />
                    </div>
                  </div>
                </div>
               
              </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Common
