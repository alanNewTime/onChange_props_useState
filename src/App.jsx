import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "alan", age: 28, major: "physics" },
    { id: 2, name: "andy", age: 25, major: "chemistry" },
    { id: 3, name: "alex", age: 20, major: "biology" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputMajor, setInputMajor] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState(0);

  //HANDLE THE CHANGES IN THE THREE INPUT TAGS START
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setInputAge(e.target.value);
  };

  const handleMajorChange = (e) => {
    setInputMajor(e.target.value);
  };
  //HANDLE THE CHANGES IN THE THREE INPUT TAGS END

  //SUMBMIT LOGIC START
  const submitName = () => {
    setSubmittedName(inputName);
  };

  const submitAge = () => {
    setSubmittedAge(inputAge);
  };

  const submitAll = () => {
    const newStudent = {
      id: students.length + 1,
      name: submittedName,
      age: submittedAge,
      major: inputMajor,
    };
    // Add the new student to the array and update the state
    setStudents([...students, newStudent]);
    //console.log(students);

    // Reset input fields after submission
    setInputName("");
    setInputAge("");
    setInputMajor("");
  };
  //SUMBMIT LOGIC END

  return (
    <>
      {/* INPUT ELEMENTS START */}
      <div className="form">
        {/* name */}
        <div>
          <p>Name : {submittedName} </p>
          <input type="text" value={inputName} onChange={handleNameChange} />
          <button onClick={submitName}>Send</button>
        </div>

        {/* age */}
        <div>
          <p>Age : {submittedAge} </p>
          <input type="number" value={inputAge} onChange={handleAgeChange} />
          <button onClick={submitAge}>Send</button>
        </div>

        {/* major */}
        <div className="select-box">
          <label htmlFor="major">Major : {inputMajor} </label>
          <select name="major" id="major" onChange={handleMajorChange}>
            <option value="">Choose a major</option>
            <option value="Math">Math</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

        <button onClick={submitAll}>TOTAL SUBMIT </button>
      </div>
      {/* INPUT ELEMENTS END */}

      {/* COMPONENT WHERE THE OBJECT GENERATED FROM OUR INPUT ELEMENTS IS MANAGED */}
      <MyComponent items={students} isAvailable={true} category="studente" />
    </>
  );
}

export default App;
