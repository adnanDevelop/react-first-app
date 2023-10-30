import React  from "react";
import ButtonRouter from "./ButtonRouter";

const CardRouter = ({ Grid, keys, sourcefile, cardTitle, cardText }) => {
 

  // const [initialData, updatedData] = useState();

  return (
    <>
      <div className={Grid} key={keys}>
        <div className="card border-0">
          <img
            src={sourcefile}
            className="card-img-top rounded rounded-5"
            alt="CourseCard"
          />
          <div className="card-body mt-3">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
              <ButtonRouter />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRouter;
