import React from "react";
import Common from "./Common";
import image from '../assets/gallery-2.jpg';
// import image from '../../public/assets/gallery-2.jpg';

const HomeRouter = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Outlet/> */}
      {/* <div id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10  mx-auto px-0">
                <div className="row d-flex align-items-center justify-content-center  g-5">
                  <div className="col-lg-6 order-lg-1 order-2">
                    <div className="home-content">
                    <h1>Grow your business <br className="d-lg-block d-none" /> with <strong className="brand-name text-primary">Adnan Tariq</strong>.</h1>
                <p className="my-3">We are the team of talented developers</p>
                <Link to="/blog" className="btn btn-outline-primary border border-2 border-primary">Get Started</Link></div>    
                  </div>
                  <div className="col-lg-6 order-lg-2 order-1">
                    <div className="home-right-img">
                      <img src={image} alt="HomeImage" className="img-fluid" />
                    </div>
                  </div>
                </div>
               
              </div>
          </div>
        </div>
      </div> */}
      <Common
        title="Grow your business."
        visit="/blog"
        img = {image}
        btn ='Get Started'
      />
    </>
  );
};

export default HomeRouter;
