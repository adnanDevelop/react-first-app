import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import ServiceTitle from './ServiceTitle';

const AboutRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-10 mx-auto">
          <ServiceTitle contact='About'/>
        </div>
      </div>
    </div>
      <h2>I am on about page</h2>
      <p>My current location is {location.pathname}</p>
      <button onClick={() => navigate('/contact')} type='button' className=' btn btn-primary'>Go to Contact Page</button>
    </>
  );
};

export default AboutRouter;
