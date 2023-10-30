import React, { useEffect, useReducer, useState } from "react";
import reducer from "../useReducer/UseReducer";
import {useCustomHook} from '../ContextApi/DataProvider';
import UseRefHook from "../UseRefHook/UseRefHook";

const AddCard = ({getData}) => {
  // USING CONTEXT API
  const userData = useCustomHook();

  // USER REDUCER HOOK PRACTICE
  const initialValue = 0;

  const [Value, dispatch] = useReducer(reducer, initialValue);

  const css = {
    color: "white",
    backgroundColor: "rgb(75, 74, 74)",
    padding: "2rem",
    borderRadius: "20px",
  };

  // CREATING FORM DATA AND STORING IT INTO LOCALSTORAGE

  let formData = {
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };

  const [initialData, updatedData] = useState(formData);

  const inputData = (event) => {
    let eventName = event.target.name;
    let eventValue = event.target.value;

    updatedData((PreviousValue) => {
      return {
        ...PreviousValue,
        [eventName]: eventValue,
      };
    });

    localStorage.setItem("name", initialData.name);
    localStorage.setItem("email", initialData.email);
    localStorage.setItem("password", initialData.password);
    localStorage.setItem("ConfirmPassword", initialData.ConfirmPassword);
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    alert(
      `your name is ${initialData.name} and your password is ${initialData.password}`
    );

    getData(initialData);

  };

  const [initialSize, updateSize] = useState(window.screen.width);

  const resizeScreen = () => {
    updateSize(() => window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);
    return window.removeEventListener("resize", resizeScreen);
  });
  return (
    <>
      <div className="container mb-4 ">
        <div className="row">
          <div className="col-12">
            <UseRefHook/>
          </div>
          <div className="col-12">
            <div className="screen-size text-center">
              <p className="fw-bold">
                My Screen size is
                <span className="text-primary">{initialSize}</span>
              </p>
              <p>
                Child : My name is 
                <span className="text-primary">{userData.name}</span> 
                my age is <span className="text-primary">{userData.age}</span>
                and i am from 
                <span className="text-primary">{userData.city}</span>
              </p>
              {/* INCREMENT AND DECREMENT */}
              <div className="d-flex">
                <button
                  onClick={() => {
                    dispatch({ type: "INCREMENT" });
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  Increment
                </button>
                <h1 className="text-warning mx-4">{Value}</h1>
                <button
                  onClick={() => {
                    dispatch({ type: "DECREMENT" });
                  }}
                  type="button"
                  className="btn btn-success"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 mx-auto text-center">
            <form style={css} onSubmit={FormSubmit}>
              <h3>Registration Form</h3>

              {/*  INPUT FIELDS */}
              <input
                onChange={inputData}
                placeholder="Enter you name"
                autoComplete="off"
                value={initialData.name}
                type="text"
                name="name"
                className="form-control"
              />
              <br />
              <input
                onChange={inputData}
                placeholder="Enter you E-mail"
                autoComplete="off"
                value={initialData.email}
                type="email"
                name="email"
                className="form-control"
              />
              <br />
              <input
                onChange={inputData}
                placeholder="Enter you Password"
                autoComplete="off"
                value={initialData.password}
                type="password"
                name="password"
                className="form-control"
              />
              <br />
            
              <br />
              <button

                type="submit"
                className="btn btn-outline-primary border-2 border-primary"
              >
                Submit
              </button>
              <br />
              <p className="m-3">
                My name is
                <span className="text-success">{initialData.name}</span> and my
                e-mail is
                <span className="text-success">{initialData.email}</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
