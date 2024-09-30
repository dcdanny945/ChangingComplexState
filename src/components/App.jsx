// -------------Steps to work on -----------------------

// hookState of fname & lname in useState as an object
// set useState object default value
// making sure we know which input user is typing
// updating user's input accordinglly
// get pervios vale from efualt value render with new value when user type in new input

import React, { useState } from "react";

function App() {
  const [userEnterName, setUserName] = useState({
    fName: "",
    lName: "",
  });

  function userInputName(e) {
    const userInputNames = e.target.value;
    const userInputSnap = e.target.name;
    console.log(userInputNames);
    console.log(userInputSnap);

    setUserName((previousState) => {
      if (userInputSnap === "fName") {
        return {
          fName: userInputNames,
          lName: previousState.lName,
        };
      } else if (userInputSnap === "lName") {
        return {
          fName: previousState.fName,
          lName: userInputNames,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {userEnterName.fName} {userEnterName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={userInputName}
          value={userEnterName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={userInputName}
          value={userEnterName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
