import React from "react";

export default function Box() {
  
  const [InputData, setInputData] = React.useState("");
  const [showBox, setShowBox] = React.useState(false);
  const [Items, setItems] = React.useState([]);

  // For Current Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[monthIndex];
  const currDate = month + " " + day;
  //

  const Add = () => {
    setShowBox(true);
  };

  const AddItem = () => {
    if (!InputData) {
      alert("Please fill the input");
    } else {
      setItems([...Items, InputData]);
      setInputData("");
      setShowBox(false);
    }
  };

  return (
    <>
      <main id="mainb" className="main">
        <div className="container">
          <div className="nav-boxes">
            <span className="box" id="nav-box-1">
              OPEN
            </span>
            
            {Items.map((elem, index) => (
              <div key={index} className="open-task">
                <p style={{ margin: "initial" }}>List</p>
                <div className="task">
                  <div className="head-name" style={{ fontWeight: "bold" }}>
                    <p>{elem}</p>
                  </div>
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="date">
                  <p>{currDate}</p>
                </div>
                <div className="tasks">
                  <i
                    id="sub-task"
                    className="fa fa-plus"
                    aria-hidden="true"
                  ></i>
                  ADD SUBTASK
                </div>
              </div>
            ))}
            <>
            {showBox && (
              <>
                <div className="input-div">
                  <input
                    type="text"
                    id="input"
                    placeholder="Task Name"
                    autocomplete="off"
                    value={InputData}
                    onChange={(event) => setInputData(event.target.value)}
                  />
                  <button id="save-button" onClick={() => AddItem()}>
                    SAVE
                  </button>
                </div>
              </>
            )}
          </>
            <span id="newTaskb" className="newTask" onClick={() => Add()}>
            <i id="new-task" className="fa fa-plus" aria-hidden="true"></i>New Task
          </span>
          <></>
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-2">
              IN PROGRESS
            </span>
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-3">
              REVIEW
            </span>
          </div>
          <div className="nav-boxes">
            <span className="box" id="nav-box-4">
              CLOSED
            </span>
          </div>
        </div>
      </main>

     
    </>
  );
}
