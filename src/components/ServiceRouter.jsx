import React, { useState } from "react";
import { cards } from "../data/Api";
import CardRouter from "./CardRouter";
// import AddCard from "./AddCard";
import ServiceTitle from "./ServiceTitle";
import img1 from "../assets/gallery-1.jpg";

const ServiceRouter = () => {
  const [video, setVideo] = useState(cards);

  const newCard = (vidoes) => {
    setVideo([
      ...video,
      {
        ...vidoes,
        id: video.length + 1,
        grid: "col-lg-4 col-md-6",
        img: img1,
        title: "Frontend Development Course",
        text: "Some quick example text to build on the card titile and make up the bulk of the cards content",
      },
    ]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* SERVICE TITLE SECTION START */}
            <ServiceTitle contact="Service" />
            {/* SERVICE CARD SECTION START */}
            <div className="row mb-4">
              <div className="col-6 mx-auto text-center">
                <button
                  onClick={newCard}
                  type="button"
                  className="btn btn-lg btn-outline-primary border-2 border-primary mb-4 "
                >
                  Add Card
                </button>
              </div>
            </div>
            <div className="row gy-4">
              {video.map((element) => {
                return (
                  <CardRouter
                    Grid={element.grid}
                    key={element.id}
                    sourcefile={element.img}
                    cardTitle={element.title}
                    cardText={element.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRouter;
