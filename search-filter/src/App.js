import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="Search..."
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return (
          <div className="user">
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
