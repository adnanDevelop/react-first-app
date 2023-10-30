import React from "react";

const ServiceTitle = (props) => {
  return (
    <>
      <div className="Service-title">
        <h2>
          <strong className="text-primary fw-bolder">{props.contact} </strong>
          <span className="fw-normal">Page</span>
        </h2>
      </div>
    </>
  );
};

export default ServiceTitle;
