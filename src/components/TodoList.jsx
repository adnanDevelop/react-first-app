import React, { useRef, useState } from "react";
const TodoList = () => {
  // GETTING INPUT VALUE USING USESTATE
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setEditItem] = useState(null);

  let getInput = useRef("");

  // ADDING ITEMS
  const addItem = () => {
    if (inputValue === "") {
      alert("Please enter anyting in input field then click button");
    } else if (inputValue && !toggleSubmit) {
      setItems(
        items.map((element) => {
          if (element.id === isEditItem) {
            return { ...element, name: inputValue };
          }
          return element;
        })
      );

      setToggleSubmit(true);

      setInputValue("");

      setEditItem(null);
    } else {
      let allInputData = {
        id: new Date().getTime().toString(),
        name: inputValue,
      };
      setItems((items) => {
        return [...items, allInputData];
      });
      setInputValue("");

      console.log(getInput.current.value);

    }
  };

  //   DELETE ITEM FUNCTION START
  const deleteItem = (index) => {
    let filterItem = items.filter((element) => {
      return index !== element.id;
    });
    setItems(filterItem);
  };

  // EDIT ITEM FUNCTION START
  /* Edit the button when user click on edit button

  1: Get the id and the name of the data which user clicked to edit 
  2: Set the toggle mode to change the submit button into edit button
  3: Now update the value of setUpdated value with a new edited value to a new value.
  4: To pass the current element ID to a new state variable for a reference

  */

  const editItem = (index) => {
    let editItem = items.find((element) => {
      return index === element.id;
    });

    setToggleSubmit(false);

    setInputValue(editItem.name);

    setEditItem(index);
  };

  // DELETING ALL ITEMS FUNCTION
  const deleteAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="todo mb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="todo-heading">
              <h1 className="text-center fw-bold">
                Todo <span className="text-white fw-normal">List</span>
              </h1>
            </div>
            <div className="row mt-4">
              <div className="col-8 mx-auto">
                <div className="todoWidth">
                  <div className="todo text-center text-white">
                    <i className="fas fa-sticky-note" title="Add item"></i>
                    <p className="">Add your list here</p>
                  </div>
                  <div className="todoItem bg-white">
                    <input
                      type="text"
                      placeholder="Add items"
                      className="form-control"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      ref={getInput}
                    />
                    {toggleSubmit ? (
                      <i
                        className="fas fa-plus "
                        title="Add item"
                        onClick={addItem}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-edit edit-btn "
                        title="Edit item"
                        onClick={addItem}
                      ></i>
                    )}
                  </div>

                  <div className="showItem mt-3">
                    {/* CREATING TODO ITEMS USING MAP METHOD */}
                    {items.map((element) => {
                      return (
                        <div
                          className="eachItem d-flex align-items-center justify-content-between mb-2"
                          key={element.id}
                        >
                          <p className="fw-normal">{element.name}</p>
                          <div>
                            <i
                              className="fas fa-edit edit-btn"
                              title="Edit item"
                              onClick={() => editItem(element.id)}
                            ></i>
                            <i
                              className="fas fa-trash-alt ms-2 delete-btn"
                              title="Delete item"
                              onClick={() => deleteItem(element.id)}
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="showItem mt-3 text-center">
                    {items.length >= 1 && (
                      <button
                        type="button"
                        className="all-delete-btn"
                        onClick={deleteAll}
                      >
                        Delete all
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
