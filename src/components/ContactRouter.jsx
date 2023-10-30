import React from "react";
import ServiceTitle from "./ServiceTitle";
import AddCard from "./AddCard";

const ContactRouter = () => {
  // GETTING DATA FROM CHILD COMPONENET
  const getData = (data) => {
    console.log(data);
  }


  return (
    <>
      <ServiceTitle contact="Contact" />
      {/* BUTTON FOR ADDING CARDS */}
     <AddCard getData={getData}/>
    </>
  );
};

export default ContactRouter;
